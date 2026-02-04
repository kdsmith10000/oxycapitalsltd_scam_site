import { neon } from '@neondatabase/serverless';

// Direct connection string for this script
const DATABASE_URL = 'postgresql://neondb_owner:npg_QTSl8btH5nUz@ep-shy-brook-ah9eoh1h-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require';

const sql = neon(DATABASE_URL);

async function addScamOperationColumn() {
  console.log('Adding scam_operation column to tables...');
  
  try {
    // Add scam_operation column to scam_wallets
    await sql`
      ALTER TABLE scam_wallets 
      ADD COLUMN IF NOT EXISTS scam_operation VARCHAR(50) DEFAULT 'oxycapitals'
    `;
    console.log('  ✓ Added scam_operation to scam_wallets');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) {
      console.log('  ℹ Column may already exist:', err.message);
    }
  }

  try {
    // Add scam_operation column to scam_domains
    await sql`
      ALTER TABLE scam_domains 
      ADD COLUMN IF NOT EXISTS scam_operation VARCHAR(50) DEFAULT 'oxycapitals'
    `;
    console.log('  ✓ Added scam_operation to scam_domains');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) {
      console.log('  ℹ Column may already exist:', err.message);
    }
  }

  try {
    // Add scam_operation column to exchange_cashouts
    await sql`
      ALTER TABLE exchange_cashouts 
      ADD COLUMN IF NOT EXISTS scam_operation VARCHAR(50) DEFAULT 'oxycapitals'
    `;
    console.log('  ✓ Added scam_operation to exchange_cashouts');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) {
      console.log('  ℹ Column may already exist:', err.message);
    }
  }

  try {
    // Add scam_operation column to transactions
    await sql`
      ALTER TABLE transactions 
      ADD COLUMN IF NOT EXISTS scam_operation VARCHAR(50) DEFAULT 'oxycapitals'
    `;
    console.log('  ✓ Added scam_operation to transactions');
  } catch (err: any) {
    if (!err.message?.includes('already exists')) {
      console.log('  ℹ Column may already exist:', err.message);
    }
  }

  // Create index for scam_operation queries
  try {
    await sql`CREATE INDEX IF NOT EXISTS idx_scam_wallets_operation ON scam_wallets(scam_operation)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_transactions_operation ON transactions(scam_operation)`;
    console.log('  ✓ Created indexes for scam_operation');
  } catch (err: any) {
    // Index may already exist
  }

  console.log('');
}

async function seedMirrorExpWallets() {
  console.log('Seeding MirrorExp scam wallets...');
  
  const wallets = [
    // Bitcoin Primary Deposit Wallet
    { 
      address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      blockchain: 'btc', 
      wallet_type: 'collection', 
      label: 'MirrorExp Primary Deposit Wallet', 
      total_received_usd: 21853, 
      total_sent_usd: 21853,
      transaction_count: 4, 
      is_exchange: false, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'Primary scam wallet. Current balance: 0.13 BTC (~$9,450). Total received: $21,853. Victims directed here from fake platform.'
    },
    // Bitcoin Staging Wallet #1
    { 
      address: 'bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x', 
      blockchain: 'btc', 
      wallet_type: 'staging', 
      label: 'MirrorExp Staging Wallet #1', 
      total_received_usd: 3628, 
      total_sent_usd: 3628,
      transaction_count: 2, 
      is_exchange: false, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'One-time-use staging wallet. Received 0.05 BTC ($3,628). Emptied to exchange pool at 14:01:55. Balance: 0 BTC (abandoned).'
    },
    // Bitcoin Staging Wallet #2
    { 
      address: 'bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug', 
      blockchain: 'btc', 
      wallet_type: 'staging', 
      label: 'MirrorExp Staging Wallet #2', 
      total_received_usd: 4391, 
      total_sent_usd: 4391,
      transaction_count: 2, 
      is_exchange: false, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'One-time-use staging wallet. Received 0.06 BTC ($4,391). Emptied to exchange pool at 13:57:30 (4 min before Staging #1). Balance: 0 BTC (abandoned).'
    },
    // Bitcoin Exchange Pool (65-input consolidation)
    { 
      address: 'bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76', 
      blockchain: 'btc', 
      wallet_type: 'cashout', 
      label: 'Exchange Consolidation Pool (65 inputs)', 
      total_received_usd: 2100000, 
      total_sent_usd: 2100000,
      transaction_count: 65, 
      is_exchange: true, 
      exchange_name: 'Unknown Exchange/Mixer', 
      scam_operation: 'mirrorexp',
      notes: 'Final cash-out destination. 65-input consolidation transaction. Total: 29.43 BTC ($2.1M). 15+ round number amounts suggest multiple manual fraud operations. KEY LEAD FOR LAW ENFORCEMENT.'
    },
    // Ethereum/USDC Wallet
    { 
      address: '0xE28425B27d555f870d3CaCAC4Bf7F549c768022F', 
      blockchain: 'eth', 
      wallet_type: 'collection', 
      label: 'MirrorExp ETH/USDC Wallet', 
      total_received_usd: 275, 
      total_sent_usd: 275,
      transaction_count: 4, 
      is_exchange: false, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'Same address used for ETH and USDC deposits. ~$75 ETH + ~$200 USDC estimated. Funds cashed out within 5 minutes.'
    },
    // USDT Wallet (ERC-20)
    { 
      address: '0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC', 
      blockchain: 'eth', 
      wallet_type: 'collection', 
      label: 'MirrorExp USDT Wallet (ERC-20)', 
      total_received_usd: 200, 
      total_sent_usd: 200,
      transaction_count: 3, 
      is_exchange: false, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'USDT (ERC-20) deposits. Active since August 2025. 6+ months of operation.'
    },
    // ETH Cash-out #1
    { 
      address: '0x00f03542c5c73705d9be26c82f2fb1cc202f32a8', 
      blockchain: 'eth', 
      wallet_type: 'cashout', 
      label: 'MirrorExp ETH Cash-Out #1', 
      total_received_usd: 60, 
      total_sent_usd: 0,
      transaction_count: 1, 
      is_exchange: true, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'Received 0.02659 ETH from scam wallet. Cash-out destination.'
    },
    // ETH Cash-out #2
    { 
      address: '0x0559de40ac8f780648490143b90aa8ff3b1b805a', 
      blockchain: 'eth', 
      wallet_type: 'cashout', 
      label: 'MirrorExp ETH Cash-Out #2', 
      total_received_usd: 20, 
      total_sent_usd: 0,
      transaction_count: 1, 
      is_exchange: true, 
      exchange_name: null, 
      scam_operation: 'mirrorexp',
      notes: 'Received 0.00881 ETH from scam wallet. Cash-out destination.'
    },
  ];
  
  let count = 0;
  for (const w of wallets) {
    try {
      await sql`
        INSERT INTO scam_wallets (address, blockchain, wallet_type, label, total_received_usd, total_sent_usd, transaction_count, is_exchange, exchange_name, scam_operation, notes)
        VALUES (${w.address}, ${w.blockchain}, ${w.wallet_type}, ${w.label}, ${w.total_received_usd}, ${w.total_sent_usd}, ${w.transaction_count}, ${w.is_exchange}, ${w.exchange_name}, ${w.scam_operation}, ${w.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          total_sent_usd = EXCLUDED.total_sent_usd,
          transaction_count = EXCLUDED.transaction_count,
          scam_operation = EXCLUDED.scam_operation,
          notes = EXCLUDED.notes,
          updated_at = CURRENT_TIMESTAMP
      `;
      count++;
    } catch (err: any) {
      console.error(`  Error inserting wallet ${w.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${count} MirrorExp wallets\n`);
}

async function seedMirrorExpTransactions() {
  console.log('Seeding MirrorExp transactions...');
  
  // Get wallet IDs
  const wallets = await sql`SELECT id, address FROM scam_wallets WHERE scam_operation = 'mirrorexp'`;
  const walletMap = new Map(wallets.map((w: any) => [w.address, w.id]));
  
  const transactions = [
    // Primary Deposit Wallet - Incoming victim deposits
    { 
      wallet_address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      tx_hash: null, 
      tx_date: '2025-08-15', 
      direction: 'in', 
      amount: '0.30 BTC', 
      amount_usd: 21853, 
      from_address: 'Multiple victims', 
      to_address: null, 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'Aggregated victim deposits. 4 transactions tracked.' 
    },
    // Primary to Staging #1
    { 
      wallet_address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      tx_hash: null, 
      tx_date: '2026-02-01', 
      direction: 'out', 
      amount: '0.05 BTC', 
      amount_usd: 3628, 
      from_address: null, 
      to_address: 'bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x', 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'ROUND NUMBER EVIDENCE - Manual withdrawal to staging wallet #1. 74 minutes after deposit.' 
    },
    // Primary to Staging #2
    { 
      wallet_address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      tx_hash: null, 
      tx_date: '2026-02-01', 
      direction: 'out', 
      amount: '0.06 BTC', 
      amount_usd: 4391, 
      from_address: null, 
      to_address: 'bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug', 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'Manual withdrawal to staging wallet #2.' 
    },
    // Staging #1 - Incoming
    { 
      wallet_address: 'bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x', 
      tx_hash: null, 
      tx_date: '2026-02-01 10:47:00', 
      direction: 'in', 
      amount: '0.05 BTC', 
      amount_usd: 3628, 
      from_address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      to_address: null, 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'From primary deposit wallet.' 
    },
    // Staging #1 - Outgoing to exchange
    { 
      wallet_address: 'bc1qqtjrzvrft6rz794x0qr70zvm9r6kz5y4zu5u0x', 
      tx_hash: null, 
      tx_date: '2026-02-01 14:01:55', 
      direction: 'out', 
      amount: '0.05 BTC', 
      amount_usd: 3628, 
      from_address: null, 
      to_address: 'bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76', 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'Emptied to exchange consolidation pool. ~3 hour hold time. Wallet abandoned.' 
    },
    // Staging #2 - Incoming
    { 
      wallet_address: 'bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug', 
      tx_hash: null, 
      tx_date: '2026-02-01 10:50:00', 
      direction: 'in', 
      amount: '0.06 BTC', 
      amount_usd: 4391, 
      from_address: 'bc1qy28j32l0ntncyuqczzeau2k9yslh76djy0nh5v', 
      to_address: null, 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'From primary deposit wallet.' 
    },
    // Staging #2 - Outgoing to exchange
    { 
      wallet_address: 'bc1q6z9f0gcl7d0j2jsc02jxcxv4n2ydjnqqr5v6ug', 
      tx_hash: null, 
      tx_date: '2026-02-01 13:57:30', 
      direction: 'out', 
      amount: '0.06 BTC', 
      amount_usd: 4391, 
      from_address: null, 
      to_address: 'bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76', 
      blockchain: 'btc', 
      scam_operation: 'mirrorexp',
      notes: 'Emptied to exchange consolidation pool. 4 minutes before Staging #1 emptied (same operator). Wallet abandoned.' 
    },
    // ETH/USDC wallet - Incoming
    { 
      wallet_address: '0xE28425B27d555f870d3CaCAC4Bf7F549c768022F', 
      tx_hash: null, 
      tx_date: '2025-10-15', 
      direction: 'in', 
      amount: '0.03 ETH', 
      amount_usd: 75, 
      from_address: 'Victim', 
      to_address: null, 
      blockchain: 'eth', 
      scam_operation: 'mirrorexp',
      notes: 'ETH deposit from victim.' 
    },
    // ETH/USDC wallet - Outgoing
    { 
      wallet_address: '0xE28425B27d555f870d3CaCAC4Bf7F549c768022F', 
      tx_hash: null, 
      tx_date: '2025-10-15', 
      direction: 'out', 
      amount: '0.02659 ETH', 
      amount_usd: 60, 
      from_address: null, 
      to_address: '0x00f03542c5c73705d9be26c82f2fb1cc202f32a8', 
      blockchain: 'eth', 
      scam_operation: 'mirrorexp',
      notes: 'Cash-out within 5 MINUTES of deposit. Lightning-fast extraction.' 
    },
    { 
      wallet_address: '0xE28425B27d555f870d3CaCAC4Bf7F549c768022F', 
      tx_hash: null, 
      tx_date: '2025-10-15', 
      direction: 'out', 
      amount: '0.00881 ETH', 
      amount_usd: 20, 
      from_address: null, 
      to_address: '0x0559de40ac8f780648490143b90aa8ff3b1b805a', 
      blockchain: 'eth', 
      scam_operation: 'mirrorexp',
      notes: 'Second cash-out transfer.' 
    },
    // USDT wallet activity
    { 
      wallet_address: '0xF4eE6d12f95f401BF6b0aB488Ec18E43bfdbeAFC', 
      tx_hash: null, 
      tx_date: '2025-08-20', 
      direction: 'in', 
      amount: '200 USDT', 
      amount_usd: 200, 
      from_address: 'Multiple victims', 
      to_address: null, 
      blockchain: 'eth', 
      scam_operation: 'mirrorexp',
      notes: 'USDT (ERC-20) deposits aggregated. Active since August 2025.' 
    },
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
        INSERT INTO transactions (wallet_id, tx_hash, tx_date, direction, amount, amount_usd, from_address, to_address, blockchain, scam_operation, notes)
        VALUES (${walletId}, ${tx.tx_hash}, ${tx.tx_date}, ${tx.direction}, ${tx.amount}, ${tx.amount_usd}, ${tx.from_address}, ${tx.to_address}, ${tx.blockchain}, ${tx.scam_operation}, ${tx.notes})
      `;
      count++;
    } catch (err: any) {
      console.error(`  Error inserting transaction:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${count} MirrorExp transactions\n`);
}

async function seedMirrorExpDomain() {
  console.log('Seeding MirrorExp domain...');
  
  const domain = {
    domain: 'mirrorexp.com',
    status: 'active',
    scammer_username: '_atraveller',
    contact_email: null,
    claimed_address: null,
    first_seen: '2025-08-01',
    last_seen: '2026-02-04',
    netcraft_report_id: null,
    scam_operation: 'mirrorexp',
    notes: 'Fake crypto trading platform. Scammer uses typosquatting: impersonates ".atraveller" (real admin) as "_atraveller" (period→underscore). 6+ month operation. $22,000+ stolen.'
  };
  
  try {
    await sql`
      INSERT INTO scam_domains (domain, status, scammer_username, contact_email, claimed_address, first_seen, last_seen, netcraft_report_id, scam_operation, notes)
      VALUES (${domain.domain}, ${domain.status}, ${domain.scammer_username}, ${domain.contact_email}, ${domain.claimed_address}, ${domain.first_seen}, ${domain.last_seen}, ${domain.netcraft_report_id}, ${domain.scam_operation}, ${domain.notes})
      ON CONFLICT (domain) DO UPDATE SET
        status = EXCLUDED.status,
        scammer_username = EXCLUDED.scammer_username,
        last_seen = EXCLUDED.last_seen,
        scam_operation = EXCLUDED.scam_operation,
        notes = EXCLUDED.notes,
        updated_at = CURRENT_TIMESTAMP
    `;
    console.log('  ✓ Seeded mirrorexp.com domain\n');
  } catch (err: any) {
    console.error(`  Error inserting domain:`, err.message);
  }
}

async function seedMirrorExpCashouts() {
  console.log('Seeding MirrorExp exchange cash-out addresses...');
  
  const cashouts = [
    { 
      address: 'bc1qdfl3dfnwwvlqa5jpckh0ccwpjczh5y566c4g76', 
      blockchain: 'btc', 
      exchange_name: 'Unknown (65-input pool)', 
      total_received_usd: 2100000, 
      priority: 'high', 
      scam_operation: 'mirrorexp',
      notes: 'PRIMARY LAW ENFORCEMENT LEAD. 65-input consolidation = exchange or mixer. 29.43 BTC ($2.1M). 15+ round number amounts indicate multiple fraud sources. KYC subpoena target.' 
    },
    { 
      address: '0x00f03542c5c73705d9be26c82f2fb1cc202f32a8', 
      blockchain: 'eth', 
      exchange_name: null, 
      total_received_usd: 60, 
      priority: 'medium', 
      scam_operation: 'mirrorexp',
      notes: 'ETH cash-out destination #1. Received 0.02659 ETH.' 
    },
    { 
      address: '0x0559de40ac8f780648490143b90aa8ff3b1b805a', 
      blockchain: 'eth', 
      exchange_name: null, 
      total_received_usd: 20, 
      priority: 'medium', 
      scam_operation: 'mirrorexp',
      notes: 'ETH cash-out destination #2. Received 0.00881 ETH.' 
    },
  ];
  
  let count = 0;
  for (const c of cashouts) {
    try {
      await sql`
        INSERT INTO exchange_cashouts (address, blockchain, exchange_name, total_received_usd, priority, scam_operation, notes)
        VALUES (${c.address}, ${c.blockchain}, ${c.exchange_name}, ${c.total_received_usd}, ${c.priority}, ${c.scam_operation}, ${c.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          priority = EXCLUDED.priority,
          scam_operation = EXCLUDED.scam_operation,
          notes = EXCLUDED.notes
      `;
      count++;
    } catch (err: any) {
      console.error(`  Error inserting cashout ${c.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${count} MirrorExp exchange cash-out addresses\n`);
}

async function printSummary() {
  console.log('='.repeat(60));
  console.log('Database Summary (All Scam Operations)');
  console.log('='.repeat(60));
  
  // Overall stats
  const walletCount = await sql`SELECT COUNT(*) as count FROM scam_wallets`;
  const txCount = await sql`SELECT COUNT(*) as count FROM transactions`;
  const domainCount = await sql`SELECT COUNT(*) as count FROM scam_domains`;
  const cashoutCount = await sql`SELECT COUNT(*) as count FROM exchange_cashouts`;
  
  console.log(`\n  TOTAL RECORDS:`);
  console.log(`  Wallets:           ${walletCount[0].count}`);
  console.log(`  Transactions:      ${txCount[0].count}`);
  console.log(`  Scam Domains:      ${domainCount[0].count}`);
  console.log(`  Exchange Cash-outs: ${cashoutCount[0].count}`);
  
  // Per-operation breakdown
  const oxyStats = await sql`
    SELECT 
      COUNT(*) as wallets,
      COALESCE(SUM(total_received_usd), 0) as total_stolen
    FROM scam_wallets 
    WHERE scam_operation = 'oxycapitals' AND wallet_type != 'cashout'
  `;
  
  const mirrorStats = await sql`
    SELECT 
      COUNT(*) as wallets,
      COALESCE(SUM(total_received_usd), 0) as total_stolen
    FROM scam_wallets 
    WHERE scam_operation = 'mirrorexp' AND wallet_type != 'cashout'
  `;
  
  console.log(`\n  OXYCAPITALS:`);
  console.log(`  Wallets: ${oxyStats[0].wallets} | Stolen: $${Number(oxyStats[0].total_stolen).toLocaleString()}`);
  
  console.log(`\n  MIRROREXP:`);
  console.log(`  Wallets: ${mirrorStats[0].wallets} | Stolen: $${Number(mirrorStats[0].total_stolen).toLocaleString()}`);
  
  const grandTotal = Number(oxyStats[0].total_stolen) + Number(mirrorStats[0].total_stolen);
  console.log(`\n  ${'─'.repeat(40)}`);
  console.log(`  COMBINED TOTAL STOLEN: $${grandTotal.toLocaleString()}`);
  console.log(`  ${'─'.repeat(40)}`);
}

async function main() {
  console.log('='.repeat(60));
  console.log('MirrorExp Scam Database - Seed Script');
  console.log('Dirty Crypto Scams - dirtycrypto.org');
  console.log('='.repeat(60) + '\n');
  
  try {
    await addScamOperationColumn();
    await seedMirrorExpWallets();
    await seedMirrorExpTransactions();
    await seedMirrorExpDomain();
    await seedMirrorExpCashouts();
    await printSummary();
    
    console.log('\n✓ MirrorExp database seeding complete!');
  } catch (err) {
    console.error('\n✗ Error seeding database:', err);
    process.exit(1);
  }
}

main();
