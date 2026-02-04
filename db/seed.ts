import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set.');
  console.error('Please create a .env.local file with your Neon database connection string.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

async function runSchema() {
  console.log('Creating database schema...');
  
  // Create tables one by one using tagged template literals
  try {
    await sql`
      CREATE TABLE IF NOT EXISTS scam_wallets (
        id SERIAL PRIMARY KEY,
        address VARCHAR(100) NOT NULL UNIQUE,
        blockchain VARCHAR(20) NOT NULL,
        wallet_type VARCHAR(50) NOT NULL,
        label VARCHAR(100),
        total_received_usd DECIMAL(15, 2) DEFAULT 0,
        total_sent_usd DECIMAL(15, 2) DEFAULT 0,
        transaction_count INTEGER DEFAULT 0,
        is_exchange BOOLEAN DEFAULT FALSE,
        exchange_name VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('  ✓ scam_wallets table');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) console.error('Error:', err.message);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS transactions (
        id SERIAL PRIMARY KEY,
        wallet_id INTEGER REFERENCES scam_wallets(id),
        tx_hash VARCHAR(100),
        tx_date TIMESTAMP,
        direction VARCHAR(10) NOT NULL,
        amount VARCHAR(50),
        amount_usd DECIMAL(15, 2),
        from_address VARCHAR(100),
        to_address VARCHAR(100),
        blockchain VARCHAR(20) NOT NULL,
        fee_amount VARCHAR(50),
        fee_usd DECIMAL(10, 2),
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('  ✓ transactions table');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) console.error('Error:', err.message);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS scam_domains (
        id SERIAL PRIMARY KEY,
        domain VARCHAR(255) NOT NULL UNIQUE,
        status VARCHAR(20) DEFAULT 'active',
        scammer_username VARCHAR(100),
        contact_email VARCHAR(255),
        claimed_address TEXT,
        first_seen DATE,
        last_seen DATE,
        netcraft_report_id VARCHAR(100),
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('  ✓ scam_domains table');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) console.error('Error:', err.message);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS exchange_cashouts (
        id SERIAL PRIMARY KEY,
        address VARCHAR(100) NOT NULL UNIQUE,
        blockchain VARCHAR(20) NOT NULL,
        exchange_name VARCHAR(50),
        total_received_usd DECIMAL(15, 2),
        is_kyc_required BOOLEAN DEFAULT TRUE,
        priority VARCHAR(20) DEFAULT 'medium',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('  ✓ exchange_cashouts table');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) console.error('Error:', err.message);
  }

  try {
    await sql`
      CREATE TABLE IF NOT EXISTS victim_reports (
        id SERIAL PRIMARY KEY,
        report_date DATE,
        amount_lost_usd DECIMAL(15, 2),
        cryptocurrency VARCHAR(20),
        wallet_sent_to VARCHAR(100),
        contact_method VARCHAR(50),
        scammer_username VARCHAR(100),
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('  ✓ victim_reports table');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) console.error('Error:', err.message);
  }

  // Create indexes
  try {
    await sql`CREATE INDEX IF NOT EXISTS idx_transactions_wallet_id ON transactions(wallet_id)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_transactions_blockchain ON transactions(blockchain)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_scam_wallets_blockchain ON scam_wallets(blockchain)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_scam_wallets_address ON scam_wallets(address)`;
    console.log('  ✓ indexes created');
  } catch (err: any) {
    // Indexes may already exist
  }
  
  console.log('Schema created successfully!\n');
}

async function seedWallets() {
  console.log('Seeding scam wallets...');
  
  const wallets = [
    // Bitcoin wallets
    { address: '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC', blockchain: 'btc', wallet_type: 'collection', label: 'Scam Platform Collection Wallet', total_received_usd: 4918, transaction_count: 43, is_exchange: false, exchange_name: null, notes: 'Primary collection wallet for fake trading platform deposits' },
    { address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', blockchain: 'btc', wallet_type: 'personal', label: 'Scammer Personal Wallet', total_received_usd: 9657, transaction_count: 67, is_exchange: false, exchange_name: null, notes: 'Personal wallet receiving funds from collection wallet and direct victims' },
    { address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', blockchain: 'btc', wallet_type: 'bybit', label: 'ByBit Wallet', total_received_usd: 23501, transaction_count: 6, is_exchange: false, exchange_name: 'ByBit', notes: 'High-value transactions, ByBit exchange linked - KYC required' },
    { address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', blockchain: 'btc', wallet_type: 'segwit', label: 'SegWit Routing Wallet', total_received_usd: 868, transaction_count: 6, is_exchange: false, exchange_name: null, notes: 'Intermediate routing wallet, forwards to personal and ByBit wallets' },
    { address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', wallet_type: 'cashout', label: 'Exchange Hot Wallet (Binance)', total_received_usd: 9657, transaction_count: 0, is_exchange: true, exchange_name: 'Binance', notes: 'Primary cash-out destination - likely Binance hot wallet' },
    // Ethereum wallet
    { address: '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09', blockchain: 'eth', wallet_type: 'collection', label: 'Ethereum Scam Wallet', total_received_usd: 2252, transaction_count: 4, is_exchange: false, exchange_name: null, notes: 'Received 0.994 ETH, cashed out within hours' },
    { address: '0x5938E9B77bA995c402B17ABa9e069731F27e6FF3', blockchain: 'eth', wallet_type: 'cashout', label: 'Ethereum Cash-Out', total_received_usd: 2252, transaction_count: 0, is_exchange: true, exchange_name: null, notes: 'Received entire ETH balance from scam wallet' },
    // Tron wallet
    { address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', blockchain: 'trx', wallet_type: 'collection', label: 'Tron/USDT Scam Wallet', total_received_usd: 75, transaction_count: 20, is_exchange: false, exchange_name: null, notes: 'TRX deposits plus USDT transfers (USDT amounts not fully captured)' },
    { address: 'TTBFQK759oYTXSscYp5DahGtDN6zLyNXUp', blockchain: 'trx', wallet_type: 'cashout', label: 'Tron Cash-Out', total_received_usd: 35, transaction_count: 0, is_exchange: false, exchange_name: null, notes: 'Received 296.9 TRX from scam wallet' }
  ];
  
  for (const w of wallets) {
    try {
      await sql`
        INSERT INTO scam_wallets (address, blockchain, wallet_type, label, total_received_usd, transaction_count, is_exchange, exchange_name, notes)
        VALUES (${w.address}, ${w.blockchain}, ${w.wallet_type}, ${w.label}, ${w.total_received_usd}, ${w.transaction_count}, ${w.is_exchange}, ${w.exchange_name}, ${w.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          transaction_count = EXCLUDED.transaction_count,
          updated_at = CURRENT_TIMESTAMP
      `;
    } catch (err: any) {
      console.error(`  Error inserting wallet ${w.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${wallets.length} wallets\n`);
}

async function seedTransactions() {
  console.log('Seeding transactions...');
  
  // Get wallet IDs
  const wallets = await sql`SELECT id, address FROM scam_wallets`;
  const walletMap = new Map(wallets.map((w: any) => [w.address, w.id]));
  
  const transactions = [
    // ByBit wallet major transactions
    { wallet_address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', tx_hash: 'f7f1-f215', tx_date: '2025-09-24', direction: 'in', amount: '0.26382228 BTC', amount_usd: 20144.38, from_address: 'Binance', to_address: null, blockchain: 'btc', notes: 'Large incoming transaction from Binance' },
    { wallet_address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', tx_hash: 'd2fe-d3c5', tx_date: '2026-01-23', direction: 'in', amount: '0.04284823 BTC', amount_usd: 3271.71, from_address: 'bc1q-688k', to_address: null, blockchain: 'btc', notes: null },
    { wallet_address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', tx_hash: '7f72-5754', tx_date: '2026-01-24', direction: 'in', amount: '0.00112036 BTC', amount_usd: 85.55, from_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', to_address: null, blockchain: 'btc', notes: 'From SegWit routing wallet' },
    { wallet_address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', tx_hash: '0a0f-94d6', tx_date: '2025-09-24', direction: 'out', amount: '0.26382228 BTC', amount_usd: 20144.38, from_address: null, to_address: '1DLe-zx3w', blockchain: 'btc', notes: 'Cash-out' },
    { wallet_address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', tx_hash: 'a2e1-d93b', tx_date: '2026-01-23', direction: 'out', amount: '0.04284823 BTC', amount_usd: 3271.71, from_address: null, to_address: '1Grw-kmqC', blockchain: 'btc', notes: 'Cash-out' },
    // SegWit wallet transactions
    { wallet_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', tx_hash: '5dab-e24d', tx_date: '2026-01-26', direction: 'in', amount: '0.00532406 BTC', amount_usd: 406.32, from_address: 'bc1q0z27uz9mgzs5wsrwd9t4xdkus7qtwkufumwgk6', to_address: null, blockchain: 'btc', notes: 'Victim deposit' },
    { wallet_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', tx_hash: '845f-a8d9', tx_date: '2026-01-24', direction: 'in', amount: '0.00604973 BTC', amount_usd: 461.70, from_address: 'bc1q0z27uz9mgzs5wsrwd9t4xdkus7qtwkufumwgk6', to_address: null, blockchain: 'btc', notes: 'Victim deposit' },
    { wallet_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', tx_hash: '7335-a809', tx_date: '2026-01-27', direction: 'out', amount: '0.00575665 BTC', amount_usd: 439.34, from_address: null, to_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', blockchain: 'btc', notes: 'Transfer to personal wallet' },
    { wallet_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', tx_hash: 'd390-c70d', tx_date: '2026-01-24', direction: 'out', amount: '0.00225074 BTC', amount_usd: 171.77, from_address: null, to_address: '1GTZ3suTHhQFC4SN6iudCX5gYHV5PEz9mg', blockchain: 'btc', notes: null },
    { wallet_address: 'bc1qz5xlayxpa3dk4u8vduwvx0r4f3v2sf0eejpd46', tx_hash: '6232-6678', tx_date: '2026-01-24', direction: 'out', amount: '0.00224172 BTC', amount_usd: 171.08, from_address: null, to_address: 'bc1qgxjxjgfxmtkvnf4qknpwn7qeha0fkmsljm35t7', blockchain: 'btc', notes: null },
    // Personal wallet cash-outs
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2026-01-27', direction: 'out', amount: null, amount_usd: 480.19, from_address: null, to_address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', notes: 'Cash-out to exchange' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2025-12-24', direction: 'out', amount: null, amount_usd: 344.59, from_address: null, to_address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', notes: 'Cash-out to exchange' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2025-12-23', direction: 'out', amount: null, amount_usd: 605.20, from_address: null, to_address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', notes: 'Cash-out to exchange' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2024-12-18', direction: 'out', amount: null, amount_usd: 6808.63, from_address: null, to_address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', notes: 'Large cash-out to exchange' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2026-01-19', direction: 'in', amount: null, amount_usd: 20.98, from_address: '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC', to_address: null, blockchain: 'btc', notes: 'From collection wallet' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2025-12-30', direction: 'in', amount: null, amount_usd: 48.30, from_address: '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC', to_address: null, blockchain: 'btc', notes: 'From collection wallet' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2025-12-26', direction: 'in', amount: null, amount_usd: 86.88, from_address: '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC', to_address: null, blockchain: 'btc', notes: 'From collection wallet' },
    { wallet_address: '1GC4fSsmgJMCtMh643WBCi5pBnTpqqCXP2', tx_hash: null, tx_date: '2025-12-14', direction: 'in', amount: null, amount_usd: 276.87, from_address: '1NTXSjeydYLhWuXS8cVWx57VqyRFqz4gaC', to_address: null, blockchain: 'btc', notes: 'From collection wallet' },
    // Ethereum transactions
    { wallet_address: '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09', tx_hash: '0x526004735dad32f6e8137891982473be9e6017d7f947b354251b0d9163a42fd5', tx_date: '2025-07-14', direction: 'in', amount: '0.994147 ETH', amount_usd: 2252, from_address: '0x23a14520c7750ff82df1d3037a5734a6dd817fd9', to_address: null, blockchain: 'eth', notes: 'Victim deposit' },
    { wallet_address: '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09', tx_hash: '0x7877e5974601d6592e605eb779f5d57775fe9df1d90a2f744b54d152e54529a5', tx_date: '2025-07-15', direction: 'out', amount: '0.325443 ETH', amount_usd: 737, from_address: null, to_address: '0x5938E9B77bA995c402B17ABa9e069731F27e6FF3', blockchain: 'eth', notes: 'Cash-out transfer' },
    { wallet_address: '0x5f9ce0dA56c867D1BD06185D6d21744daC83cb09', tx_hash: '0xbaed3b75ca018f29129ae5ca2234bb741533c968a3fd537743ea20654ff7d816', tx_date: '2025-07-15', direction: 'out', amount: '0.668664 ETH', amount_usd: 1515, from_address: null, to_address: '0x5938E9B77bA995c402B17ABa9e069731F27e6FF3', blockchain: 'eth', notes: 'Cash-out transfer' },
    // Tron transactions
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '11868dcb38b59e74290f51c8e3fe01f84e1156254686c044585f8b2d8fef5e1a', tx_date: '2024-03-29', direction: 'in', amount: '356.901240 TRX', amount_usd: 42, from_address: 'TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '90726423b00e19f378cc2a6d9051f0440f04ba7aba98e42c457975a42799b443', tx_date: '2024-03-29', direction: 'in', amount: '41 TRX', amount_usd: 5, from_address: 'TNXoiAJ3dct8Fjg4M9fkLFh9S2v9TXc32G', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '5b760b68de9dfba34c03eb21808b655d89ecc2ea281756e69c2d6e9dfe8f5820', tx_date: '2024-01-11', direction: 'in', amount: '36.598055 TRX', amount_usd: 4, from_address: 'TYASr5UV6HEcXatwdFQfmLVUqQQQMUxHLS', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '80db9659c21b42452908f53f853c0a6167190e70e8940ae0a0f8ec9c26298169', tx_date: '2023-12-23', direction: 'in', amount: '18.952617 TRX', amount_usd: 2, from_address: 'TLc7qBt7qTtYzoPq8eKQUsuhthivnLBkvy', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '33375cf7b1dc8ff4c0922c7023b99fa24a208a1bffde61fa3e2402d55ecff6c3', tx_date: '2023-11-25', direction: 'in', amount: '17.670009 TRX', amount_usd: 2, from_address: 'TAzsQ9Gx8eqFNFSKbeXrbi45CuVPHzA8wr', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '0cfd4bf2d28215ccebeb50f83a47827370f40d6f442c0515a5ae12d81e277a49', tx_date: '2023-08-17', direction: 'in', amount: '28.6 TRX', amount_usd: 3, from_address: 'TU4vEruvZwLLkSfV9bNw12EJTPvNr7Pvaa', to_address: null, blockchain: 'trx', notes: null },
    { wallet_address: 'TCgcYUD74LoeMoKRb7X6WcYPVD3VgZccZR', tx_hash: '47cb6864f45f51be7229e43fff250b500645a5e99bd27512ee31702d2837435b', tx_date: '2024-04-04', direction: 'out', amount: '296.923481 TRX', amount_usd: 35, from_address: null, to_address: 'TTBFQK759oYTXSscYp5DahGtDN6zLyNXUp', blockchain: 'trx', notes: 'Cash-out transfer' },
  ];
  
  let count = 0;
  for (const tx of transactions) {
    const walletId = walletMap.get(tx.wallet_address);
    if (!walletId) {
      console.error(`  Wallet not found: ${tx.wallet_address}`);
      continue;
    }
    
    try {
      await sql`
        INSERT INTO transactions (wallet_id, tx_hash, tx_date, direction, amount, amount_usd, from_address, to_address, blockchain, notes)
        VALUES (${walletId}, ${tx.tx_hash}, ${tx.tx_date}, ${tx.direction}, ${tx.amount}, ${tx.amount_usd}, ${tx.from_address}, ${tx.to_address}, ${tx.blockchain}, ${tx.notes})
      `;
      count++;
    } catch (err: any) {
      console.error(`  Error inserting transaction:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${count} transactions\n`);
}

async function seedDomains() {
  console.log('Seeding scam domains...');
  
  const domains = [
    { domain: 'oxycapitalsltd.com', status: 'active', scammer_username: 'sajmaogs', contact_email: 'support@oxycapitalsltd.com', claimed_address: 'Flat 8 Graves Court, 16 Pevensey Avenue, Southgate, London, UK, N11 2RD', netcraft_report_id: 'f2f3oteicz4yrmh2qenr54', notes: 'Primary scam domain, reported to Netcraft as Phishing & Malicious' },
    { domain: 'bridgestocks.com', status: 'taken_down', scammer_username: 'sajmaogs', contact_email: null, claimed_address: null, netcraft_report_id: null, notes: 'Previous scam domain by same operators, now removed from internet' }
  ];
  
  for (const d of domains) {
    try {
      await sql`
        INSERT INTO scam_domains (domain, status, scammer_username, contact_email, claimed_address, netcraft_report_id, notes)
        VALUES (${d.domain}, ${d.status}, ${d.scammer_username}, ${d.contact_email}, ${d.claimed_address}, ${d.netcraft_report_id}, ${d.notes})
        ON CONFLICT (domain) DO UPDATE SET
          status = EXCLUDED.status,
          updated_at = CURRENT_TIMESTAMP
      `;
    } catch (err: any) {
      console.error(`  Error inserting domain ${d.domain}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${domains.length} domains\n`);
}

async function seedExchangeCashouts() {
  console.log('Seeding exchange cash-out addresses...');
  
  const cashouts = [
    { address: '1FWQiwK27EnGXb6BiBMRLJvunJQZZPMcGd', blockchain: 'btc', exchange_name: 'Binance', total_received_usd: 9657, priority: 'high', notes: 'Primary BTC cash-out - likely Binance hot wallet. Multiple deposits from scammer.' },
    { address: '0x5938E9B77bA995c402B17ABa9e069731F27e6FF3', blockchain: 'eth', exchange_name: null, total_received_usd: 2252, priority: 'high', notes: 'ETH cash-out destination. Received entire ETH balance within hours of theft.' },
    { address: 'TTBFQK759oYTXSscYp5DahGtDN6zLyNXUp', blockchain: 'trx', exchange_name: null, total_received_usd: 35, priority: 'medium', notes: 'TRX cash-out destination.' },
    { address: '192UAp4TEGApNdxPbSN5veQZ8ynyixjqvB', blockchain: 'btc', exchange_name: 'ByBit', total_received_usd: 23501, priority: 'high', notes: 'ByBit-linked wallet. KYC required for this exchange. Highest priority for subpoena.' }
  ];
  
  for (const c of cashouts) {
    try {
      await sql`
        INSERT INTO exchange_cashouts (address, blockchain, exchange_name, total_received_usd, priority, notes)
        VALUES (${c.address}, ${c.blockchain}, ${c.exchange_name}, ${c.total_received_usd}, ${c.priority}, ${c.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          priority = EXCLUDED.priority
      `;
    } catch (err: any) {
      console.error(`  Error inserting cashout ${c.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${cashouts.length} exchange cash-out addresses\n`);
}

async function main() {
  console.log('='.repeat(50));
  console.log('OxyCapitals Scam Database - Seed Script');
  console.log('='.repeat(50) + '\n');
  
  try {
    await runSchema();
    await seedWallets();
    await seedTransactions();
    await seedDomains();
    await seedExchangeCashouts();
    
    // Print summary
    console.log('='.repeat(50));
    console.log('Database Summary');
    console.log('='.repeat(50));
    
    const walletCount = await sql`SELECT COUNT(*) as count FROM scam_wallets`;
    const txCount = await sql`SELECT COUNT(*) as count FROM transactions`;
    const domainCount = await sql`SELECT COUNT(*) as count FROM scam_domains`;
    const cashoutCount = await sql`SELECT COUNT(*) as count FROM exchange_cashouts`;
    const totalStolen = await sql`SELECT COALESCE(SUM(total_received_usd), 0) as total FROM scam_wallets WHERE wallet_type != 'cashout'`;
    
    console.log(`  Wallets:       ${walletCount[0].count}`);
    console.log(`  Transactions:  ${txCount[0].count}`);
    console.log(`  Scam Domains:  ${domainCount[0].count}`);
    console.log(`  Exchange IDs:  ${cashoutCount[0].count}`);
    console.log(`  Total Stolen:  $${Number(totalStolen[0].total).toLocaleString()}`);
    
    console.log('\n✓ Database seeding complete!');
  } catch (err) {
    console.error('\n✗ Error seeding database:', err);
    process.exit(1);
  }
}

main();
