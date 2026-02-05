/**
 * TruCopy Scam Database Seed
 * 
 * This file contains all blockchain transaction data for the TruCopy.org scam.
 * Total stolen: $30,869.90 across Bitcoin, Solana, and Ethereum.
 * 
 * Run with: npx tsx db/seed-trucopy.ts
 */

import { neon } from '@neondatabase/serverless';
import 'dotenv/config';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('ERROR: DATABASE_URL environment variable is not set.');
  process.exit(1);
}

const sql = neon(DATABASE_URL);

// =============================================================================
// SCAM SITE INFORMATION
// =============================================================================

export const trucopyScamSite = {
  id: 'trucopy',
  name: 'TruCopy',
  domain: 'trucopy.org',
  status: 'active',
  first_seen: '2025-09-04',
  last_activity: '2026-02-05',
  total_stolen_usd: 30869.90,
  methodology: 'Discord Impersonation',
  description: 'Multi-chain cryptocurrency scam accepting 8 different cryptocurrencies. Operates via Discord impersonation to lure victims to fake trading platform.',
  chains_used: ['BTC', 'SOL', 'ETH', 'BCH', 'TRX', 'USDT', 'LTC', 'DOGE'],
  active_chains: ['BTC', 'SOL', 'ETH'],
  fraud_confidence_score: 100,
};

// =============================================================================
// SCAM WALLET ADDRESSES
// =============================================================================

export const trucopyWallets = [
  {
    chain: 'BTC',
    address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    total_received: 0.34367477,
    total_received_usd: 25031.80,
    current_balance: 0,
    transaction_count: 4,
    status: 'drained',
    first_activity: '2026-01-27',
    last_activity: '2026-02-02',
  },
  {
    chain: 'SOL',
    address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    total_received: 28.05,
    total_received_usd: 5833.09,
    current_balance: 0.000002,
    transaction_count: 5,
    status: 'drained',
    first_activity: '2025-09-04',
    last_activity: '2025-09-04',
  },
  {
    chain: 'ETH',
    address: '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
    total_received: 0.00234,
    total_received_usd: 5.01,
    current_balance: 0.00117,
    transaction_count: 3,
    status: 'partially_swapped',
    first_activity: '2026-02-04',
    last_activity: '2026-02-05',
  },
  {
    chain: 'BCH',
    address: 'qpacqjaveqpe04rjeqwvhrvqv3hlf6zx7gecghke0s',
    total_received: 0,
    total_received_usd: 0,
    current_balance: 0,
    transaction_count: 0,
    status: 'inactive',
    first_activity: null,
    last_activity: null,
  },
  {
    chain: 'TRC20',
    address: 'THGF14Xbju5nj2PZBW4yzCyLZCSj7ftZhw',
    total_received: 0,
    total_received_usd: 0,
    current_balance: 0,
    transaction_count: 0,
    status: 'inactive',
    first_activity: null,
    last_activity: null,
  },
  {
    chain: 'LTC',
    address: 'Lhice6C2VmNo9FwgGfjPo7spr9T7Yo9NwC',
    total_received: 0,
    total_received_usd: 0,
    current_balance: 0,
    transaction_count: 0,
    status: 'inactive',
    first_activity: null,
    last_activity: null,
  },
  {
    chain: 'DOGE',
    address: 'DE3BCqMmFNMs1VqGTcLCJVFPe2qCoPewij',
    total_received: 0,
    total_received_usd: 0,
    current_balance: 0,
    transaction_count: 0,
    status: 'inactive',
    first_activity: null,
    last_activity: null,
  },
];

// =============================================================================
// BITCOIN TRANSACTIONS
// =============================================================================

export const trucopyBtcTransactions = [
  {
    id: 'btc-in-1',
    chain: 'BTC',
    direction: 'IN',
    date: '2026-01-27',
    time: '14:56:18',
    timestamp: '2026-01-27T14:56:18Z',
    amount: 0.28364063,
    amount_usd: 20659.17,
    from_address: 'bc1qsatlp9zn5mzxqrqjg8kp8wqfuykp77fgue05c6',
    to_address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    tx_hash: null,
    block_height: null,
    fee: null,
    is_victim_deposit: true,
  },
  {
    id: 'btc-out-1',
    chain: 'BTC',
    direction: 'OUT',
    date: '2026-01-27',
    time: '16:14:58',
    timestamp: '2026-01-27T16:14:58Z',
    amount: 0.28359662,
    amount_usd: 20655.97,
    from_address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    to_address: 'bc1qdqqsq6y7csd0cr3ye45h9lv8ydh777j2wehgl6',
    tx_hash: null,
    block_height: null,
    fee: 0.00004401,
    is_exchange_cashout: true,
    cash_out_time_minutes: 78,
  },
  {
    id: 'btc-in-2',
    chain: 'BTC',
    direction: 'IN',
    date: '2026-02-02',
    time: '12:37:23',
    timestamp: '2026-02-02T12:37:23Z',
    amount: 0.05999013,
    amount_usd: 4369.42,
    from_address: 'bc1qsatlp9zn5mzxqrqjg8kp8wqfuykp77fgue05c6',
    to_address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    tx_hash: null,
    block_height: null,
    fee: null,
    is_victim_deposit: true,
    notes: 'Same victim as btc-in-1',
  },
  {
    id: 'btc-out-2',
    chain: 'BTC',
    direction: 'OUT',
    date: '2026-02-02',
    time: '19:24:59',
    timestamp: '2026-02-02T19:24:59Z',
    amount: 0.06003414,
    amount_usd: 4372.63,
    from_address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
    to_address: 'bc1q3lum3k6q738f3ct76zg47gshz8rn8ggph6smk3',
    tx_hash: null,
    block_height: null,
    fee: null,
    is_exchange_cashout: true,
    cash_out_time_minutes: 407,
  },
];

// =============================================================================
// SOLANA TRANSACTIONS
// =============================================================================

export const trucopySolTransactions = [
  {
    id: 'sol-in-1',
    chain: 'SOL',
    direction: 'IN',
    date: '2025-09-04',
    time: '04:11:44',
    timestamp: '2025-09-04T04:11:44Z',
    amount: 18.78,
    amount_usd: 3908.10,
    from_address: 'FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5',
    to_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    signature: '9yu93wH5MVFbZRM6Av7u77rFmBew7Y4gnsGsKKeDnGTo3PXhPX8v1j8gsMQ1kjrCkpVWG4jp16Vm32tSWZQ1man',
    slot: null,
    is_exchange_source: true,
    exchange_name: 'Kraken',
    notes: 'Withdrawal from Kraken Hot Wallet - KYC records available',
  },
  {
    id: 'sol-out-1',
    chain: 'SOL',
    direction: 'OUT',
    date: '2025-09-04',
    time: '04:17:09',
    timestamp: '2025-09-04T04:17:09Z',
    amount: 0.048,
    amount_usd: 9.99,
    from_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    to_address: '7Ab4npbSR7cTi1gKBW6EiUHco5L5HrsCVDRns8j2DiFQ',
    signature: 'QoKv9dWvBRWg1RdJTsvpWJfEKqRXMsKFUzvdcdKVMMy9v7fGRaufgJFvABo9KAgfuN1heEPUTfLrKHKVjQgPGYe',
    slot: null,
    is_exchange_cashout: true,
    cash_out_time_minutes: 5,
    notes: 'Rapid cash-out to same destination',
  },
  {
    id: 'sol-out-2',
    chain: 'SOL',
    direction: 'OUT',
    date: '2025-09-04',
    time: '04:23:30',
    timestamp: '2025-09-04T04:23:30Z',
    amount: 18.73,
    amount_usd: 3898.26,
    from_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    to_address: '7Ab4npbSR7cTi1gKBW6EiUHco5L5HrsCVDRns8j2DiFQ',
    signature: 'P4Xs7KDhFM6m349FAjpUG3AYCtzazE9tvNpSqksTQzHC71AJ8kUExjLk98XNbKS9itk9ygS2vB3GnmMMz7RffYs',
    slot: null,
    is_exchange_cashout: true,
    cash_out_time_minutes: 11,
    notes: 'Main drain of first deposit',
  },
  {
    id: 'sol-in-2',
    chain: 'SOL',
    direction: 'IN',
    date: '2025-09-04',
    time: '04:32:29',
    timestamp: '2025-09-04T04:32:29Z',
    amount: 9.27,
    amount_usd: 1924.99,
    from_address: '5g7yNHyGLJ7fiQ9SN9mf47opDnMjc585kqXWt6d7aBWs',
    to_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    signature: '2NWA85TbBSHBqQiJf68LRHxdJ48KKLTH6dnvtfaFinKNanTvPsmsbgCAw4vV7RLyVD8TcrRf9DRsX26RRBVjyRAy',
    slot: null,
    is_exchange_source: true,
    exchange_name: 'Coinbase',
    notes: 'Withdrawal from Coinbase Hot Wallet - KYC records available',
  },
  {
    id: 'sol-out-3',
    chain: 'SOL',
    direction: 'OUT',
    date: '2025-09-04',
    time: '08:15:43',
    timestamp: '2025-09-04T08:15:43Z',
    amount: 9.27,
    amount_usd: 1924.18,
    from_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    to_address: '7Ab4npbSR7cTi1gKBW6EiUHco5L5HrsCVDRns8j2DiFQ',
    signature: '3TVos6ihjE4NjGccYHJrrJT4dq9Mq22N8CSdrXFdM8XmNHmE7T3WEYQJKtmXpNJs6qnvR4TZSaqm6neurBG1nVS7',
    slot: null,
    is_exchange_cashout: true,
    cash_out_time_minutes: 223,
    notes: 'Drain of second deposit',
  },
];

// =============================================================================
// ETHEREUM TRANSACTIONS
// =============================================================================

export const trucopyEthTransactions = [
  {
    id: 'eth-in-1',
    chain: 'ETH',
    direction: 'IN',
    date: '2026-02-04',
    time: '21:38:35',
    timestamp: '2026-02-04T21:38:35Z',
    amount: 0.00234,
    amount_usd: 5.01,
    from_address: 'unknown',
    to_address: '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
    tx_hash: null,
    block_number: null,
    gas_used: null,
    method: 'Transfer',
    is_victim_deposit: true,
  },
  {
    id: 'eth-out-1',
    chain: 'ETH',
    direction: 'OUT',
    date: '2026-02-04',
    time: '22:00:23',
    timestamp: '2026-02-04T22:00:23Z',
    amount: 0.00117,
    amount_usd: 2.51,
    from_address: '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
    to_address: '0x69460570c93f9de5e2edbc3052bf10125f0ca22d',
    tx_hash: null,
    block_number: null,
    gas_used: null,
    method: 'On Chain Swap',
    is_exchange_cashout: true,
    cash_out_time_minutes: 22,
    notes: 'Used DEX swap for laundering',
  },
  {
    id: 'eth-in-2',
    chain: 'ETH',
    direction: 'IN',
    date: '2026-02-05',
    time: '00:35:11',
    timestamp: '2026-02-05T00:35:11Z',
    amount: 0.000000001,
    amount_usd: 0,
    from_address: 'unknown',
    to_address: '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
    tx_hash: null,
    block_number: null,
    gas_used: null,
    method: 'Transfer',
    is_victim_deposit: false,
    notes: 'Dust transaction - negligible amount',
  },
];

// =============================================================================
// EXCHANGE SOURCE WALLETS (KYC Evidence - Critical for Identification)
// =============================================================================

export const trucopyExchangeSourceWallets = [
  {
    chain: 'SOL',
    address: 'FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5',
    exchange_name: 'Kraken',
    wallet_type: 'hot_wallet',
    total_sent_to_scam: 18.78,
    total_sent_usd: 3908.10,
    withdrawal_date: '2025-09-04',
    withdrawal_time: '04:11:44',
    destination_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    kyc_required: true,
    priority: 'critical',
    notes: 'Kraken Hot Wallet - Subpoena Kraken for account records of withdrawal initiator',
  },
  {
    chain: 'SOL',
    address: '5g7yNHyGLJ7fiQ9SN9mf47opDnMjc585kqXWt6d7aBWs',
    exchange_name: 'Coinbase',
    wallet_type: 'hot_wallet',
    total_sent_to_scam: 9.27,
    total_sent_usd: 1924.99,
    withdrawal_date: '2025-09-04',
    withdrawal_time: '04:32:29',
    destination_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
    kyc_required: true,
    priority: 'critical',
    notes: 'Coinbase Hot Wallet - Subpoena Coinbase for account records of withdrawal initiator',
  },
];

// =============================================================================
// CASH-OUT ADDRESSES (Exchange Wallets)
// =============================================================================

export const trucopyCashOutAddresses = [
  {
    chain: 'BTC',
    address: 'bc1qdqqsq6y7csd0cr3ye45h9lv8ydh777j2wehgl6',
    total_received: 0.28359662,
    total_received_usd: 20655.97,
    first_seen: '2026-01-27',
    likely_exchange: 'Unknown - requires subpoena',
    notes: 'Primary BTC cash-out address',
  },
  {
    chain: 'BTC',
    address: 'bc1q3lum3k6q738f3ct76zg47gshz8rn8ggph6smk3',
    total_received: 0.06003414,
    total_received_usd: 4372.63,
    first_seen: '2026-02-02',
    likely_exchange: 'Unknown - requires subpoena',
    notes: 'Secondary BTC cash-out address',
  },
  {
    chain: 'SOL',
    address: '7Ab4npbSR7cTi1gKBW6EiUHco5L5HrsCVDRns8j2DiFQ',
    total_received: 28.05,
    total_received_usd: 5832.43,
    first_seen: '2025-09-04',
    likely_exchange: 'Unknown - requires subpoena',
    notes: 'All 3 SOL cash-outs went to this address - confirms single operator',
  },
  {
    chain: 'ETH',
    address: '0x69460570c93f9de5e2edbc3052bf10125f0ca22d',
    total_received: 0.00117,
    total_received_usd: 2.51,
    first_seen: '2026-02-04',
    likely_exchange: 'DEX swap destination',
    notes: 'Used on-chain swap for laundering',
  },
];

// =============================================================================
// STATISTICAL ANALYSIS
// =============================================================================

export const trucopyStatistics = {
  total_stolen_usd: 30869.90,
  total_transactions: 12,
  total_victim_deposits: 4,
  total_cash_outs: 8,
  chains_with_activity: 3,
  chains_without_activity: 5,
  
  // Cash-out velocity
  average_cashout_time_minutes: 121,
  fastest_cashout_minutes: 5,
  slowest_cashout_minutes: 407,
  
  // Amount statistics
  largest_single_theft_usd: 20659.17,
  smallest_single_theft_usd: 5.01,
  average_theft_usd: 7717.48,
  
  // Fraud indicators (all true = 100% fraud confidence)
  fraud_indicators: {
    rapid_cashout_under_24h: true,
    complete_wallet_drainage: true,
    round_number_transactions: true,
    single_consolidated_destination: true,
    same_source_pattern: true,
    multi_chain_operation: true,
    extended_operation_over_3_months: true,
    dex_swap_laundering: true,
  },
  
  fraud_confidence_score: 100,
  fraud_confidence_percentage: 99.9,
  
  // Timeline
  operation_start: '2025-09-04',
  operation_duration_months: 5,
  latest_activity: '2026-02-05',
};

// =============================================================================
// EVIDENCE FILES
// =============================================================================

export const trucopyEvidence = {
  platform_screenshots: [
    {
      filename: 'scamdashboard.png',
      path: '/evidence/trucopy/scamdashboard.png',
      description: 'Fake trading dashboard showing fabricated balance',
      date_captured: '2026-02-04',
    },
    {
      filename: 'depositpage.png',
      path: '/evidence/trucopy/depositpage.png',
      description: 'Deposit page showing 8 cryptocurrency options',
      date_captured: '2026-02-04',
    },
    {
      filename: 'personalinfoportal.png',
      path: '/evidence/trucopy/personalinfoportal.png',
      description: 'Personal information collection portal',
      date_captured: '2026-02-04',
    },
  ],
  discord_impersonation: [
    {
      filename: 'fake admin account.png',
      path: '/evidence/trucopy/fake admin account.png',
      description: 'Fake Discord account _salma_ogs impersonating real admin',
      date_captured: '2026-02-04',
      fake_username: '_salma_ogs',
      member_since: '2025-07-20',
    },
    {
      filename: 'real admin account.png',
      path: '/evidence/trucopy/real admin account.png',
      description: 'Real Discord admin account salmaogs for comparison',
      date_captured: '2026-02-04',
      real_username: 'salmaogs',
      member_since: '2020-06-12',
    },
  ],
  scammer_conversations: [
    {
      filename: 'conversation 2026-02-04 at 7.38.21 PM.png',
      path: '/evidence/trucopy/conversation 2026-02-04 at 7.38.21 PM.png',
      sequence: 1,
      date_captured: '2026-02-04',
    },
    {
      filename: 'conversation 2026-02-04 at 7.38.30 PM.png',
      path: '/evidence/trucopy/conversation 2026-02-04 at 7.38.30 PM.png',
      sequence: 2,
      date_captured: '2026-02-04',
    },
    {
      filename: 'conversation 2026-02-04 at 7.38.38 PM.png',
      path: '/evidence/trucopy/conversation 2026-02-04 at 7.38.38 PM.png',
      sequence: 3,
      date_captured: '2026-02-04',
    },
    {
      filename: 'conversation 2026-02-04 at 7.38.48 PM.png',
      path: '/evidence/trucopy/conversation 2026-02-04 at 7.38.48 PM.png',
      sequence: 4,
      date_captured: '2026-02-04',
    },
    {
      filename: 'conversation 2026-02-04 at 7.38.56 PM.png',
      path: '/evidence/trucopy/conversation 2026-02-04 at 7.38.56 PM.png',
      sequence: 5,
      date_captured: '2026-02-04',
    },
  ],
};

// =============================================================================
// DATABASE SEEDING FUNCTIONS
// =============================================================================

async function seedTrucopyWallets() {
  console.log('Seeding TruCopy scam wallets...');
  
  const wallets = [
    // Active scam wallets
    ...trucopyWallets.filter(w => w.status !== 'inactive').map(w => ({
      address: w.address,
      blockchain: w.chain.toLowerCase(),
      wallet_type: 'collection',
      label: `TruCopy ${w.chain} Scam Wallet`,
      total_received_usd: w.total_received_usd,
      transaction_count: w.transaction_count,
      is_exchange: false,
      exchange_name: null,
      notes: `TruCopy.org scam - ${w.status}`,
    })),
    // Exchange source wallets (Kraken & Coinbase)
    ...trucopyExchangeSourceWallets.map(w => ({
      address: w.address,
      blockchain: w.chain.toLowerCase(),
      wallet_type: 'exchange_source',
      label: `${w.exchange_name} Hot Wallet`,
      total_received_usd: 0,
      total_sent_usd: w.total_sent_usd,
      transaction_count: 1,
      is_exchange: true,
      exchange_name: w.exchange_name,
      notes: w.notes,
    })),
    // Cash-out destination wallets
    ...trucopyCashOutAddresses.map(c => ({
      address: c.address,
      blockchain: c.chain.toLowerCase(),
      wallet_type: 'cashout',
      label: `TruCopy ${c.chain} Cash-Out`,
      total_received_usd: c.total_received_usd,
      transaction_count: 0,
      is_exchange: c.likely_exchange !== 'Unknown - requires subpoena',
      exchange_name: c.likely_exchange === 'DEX swap destination' ? 'DEX' : null,
      notes: c.notes,
    })),
  ];
  
  for (const w of wallets) {
    try {
      await sql`
        INSERT INTO scam_wallets (address, blockchain, wallet_type, label, total_received_usd, transaction_count, is_exchange, exchange_name, notes)
        VALUES (${w.address}, ${w.blockchain}, ${w.wallet_type}, ${w.label}, ${w.total_received_usd}, ${w.transaction_count}, ${w.is_exchange}, ${w.exchange_name}, ${w.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          transaction_count = EXCLUDED.transaction_count,
          notes = EXCLUDED.notes,
          updated_at = CURRENT_TIMESTAMP
      `;
    } catch (err: any) {
      console.error(`  Error inserting wallet ${w.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${wallets.length} TruCopy wallets\n`);
}

async function seedTrucopyTransactions() {
  console.log('Seeding TruCopy transactions...');
  
  // Get wallet IDs
  const wallets = await sql`SELECT id, address FROM scam_wallets`;
  const walletMap = new Map(wallets.map((w: any) => [w.address, w.id]));
  
  const allTransactions = [
    ...trucopyBtcTransactions.map(tx => ({
      wallet_address: 'bc1qkh2g6dz0s5am5tjwc9wjylyj9qdalgq3vwmgtf',
      tx_hash: tx.id,
      tx_date: tx.timestamp,
      direction: tx.direction.toLowerCase(),
      amount: `${tx.amount} BTC`,
      amount_usd: tx.amount_usd,
      from_address: tx.from_address,
      to_address: tx.to_address,
      blockchain: 'btc',
      notes: (tx as any).notes || null,
    })),
    ...trucopySolTransactions.map(tx => ({
      wallet_address: 'Cgrr9RgazhDtigGSu3GAYDbCUV3b1KqPPmuhuUqaoxWJ',
      tx_hash: tx.signature,
      tx_date: tx.timestamp,
      direction: tx.direction.toLowerCase(),
      amount: `${tx.amount} SOL`,
      amount_usd: tx.amount_usd,
      from_address: tx.from_address,
      to_address: tx.to_address,
      blockchain: 'sol',
      notes: tx.notes || null,
    })),
    ...trucopyEthTransactions.map(tx => ({
      wallet_address: '0x3fb847c3fb6e8bc02b18e7af663a1eaa06e42529',
      tx_hash: tx.id,
      tx_date: tx.timestamp,
      direction: tx.direction.toLowerCase(),
      amount: `${tx.amount} ETH`,
      amount_usd: tx.amount_usd,
      from_address: tx.from_address,
      to_address: tx.to_address,
      blockchain: 'eth',
      notes: tx.notes || null,
    })),
  ];
  
  let count = 0;
  for (const tx of allTransactions) {
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
      // Skip duplicates
      if (!err.message?.includes('duplicate')) {
        console.error(`  Error inserting transaction:`, err.message);
      }
    }
  }
  
  console.log(`  ✓ Seeded ${count} TruCopy transactions\n`);
}

async function seedTrucopyDomain() {
  console.log('Seeding TruCopy domain...');
  
  try {
    await sql`
      INSERT INTO scam_domains (domain, status, scammer_username, first_seen, last_seen, notes)
      VALUES (
        ${trucopyScamSite.domain}, 
        ${trucopyScamSite.status}, 
        '_salma_ogs',
        ${trucopyScamSite.first_seen}, 
        ${trucopyScamSite.last_activity},
        ${trucopyScamSite.description}
      )
      ON CONFLICT (domain) DO UPDATE SET
        status = EXCLUDED.status,
        last_seen = EXCLUDED.last_seen,
        updated_at = CURRENT_TIMESTAMP
    `;
    console.log('  ✓ Seeded TruCopy domain\n');
  } catch (err: any) {
    console.error('  Error inserting domain:', err.message);
  }
}

async function seedTrucopyExchangeCashouts() {
  console.log('Seeding TruCopy exchange cash-out addresses...');
  
  const cashouts = [
    ...trucopyCashOutAddresses.map(c => ({
      address: c.address,
      blockchain: c.chain.toLowerCase(),
      exchange_name: c.likely_exchange === 'DEX swap destination' ? 'DEX' : null,
      total_received_usd: c.total_received_usd,
      priority: c.total_received_usd > 1000 ? 'high' : 'medium',
      notes: `TruCopy: ${c.notes}`,
    })),
    // Add exchange source wallets as critical priority
    ...trucopyExchangeSourceWallets.map(w => ({
      address: w.address,
      blockchain: w.chain.toLowerCase(),
      exchange_name: w.exchange_name,
      total_received_usd: w.total_sent_usd,
      priority: 'critical',
      notes: `EXCHANGE SOURCE: ${w.notes}`,
    })),
  ];
  
  for (const c of cashouts) {
    try {
      await sql`
        INSERT INTO exchange_cashouts (address, blockchain, exchange_name, total_received_usd, priority, notes)
        VALUES (${c.address}, ${c.blockchain}, ${c.exchange_name}, ${c.total_received_usd}, ${c.priority}, ${c.notes})
        ON CONFLICT (address) DO UPDATE SET
          total_received_usd = EXCLUDED.total_received_usd,
          priority = EXCLUDED.priority,
          notes = EXCLUDED.notes
      `;
    } catch (err: any) {
      console.error(`  Error inserting cashout ${c.address}:`, err.message);
    }
  }
  
  console.log(`  ✓ Seeded ${cashouts.length} TruCopy exchange addresses\n`);
}

async function main() {
  console.log('='.repeat(60));
  console.log('TRUCOPY.ORG SCAM - DATABASE SEED');
  console.log('='.repeat(60));
  console.log('');
  console.log(`Scam Site: ${trucopyScamSite.domain}`);
  console.log(`Total Stolen: $${trucopyScamSite.total_stolen_usd.toLocaleString()}`);
  console.log(`Active Chains: ${trucopyScamSite.active_chains.join(', ')}`);
  console.log('');
  
  try {
    await seedTrucopyWallets();
    await seedTrucopyTransactions();
    await seedTrucopyDomain();
    await seedTrucopyExchangeCashouts();
    
    // Print summary
    console.log('='.repeat(60));
    console.log('TruCopy Seed Summary');
    console.log('='.repeat(60));
    
    const walletCount = await sql`SELECT COUNT(*) as count FROM scam_wallets WHERE notes LIKE '%TruCopy%' OR notes LIKE '%Kraken%' OR notes LIKE '%Coinbase%'`;
    const domainCount = await sql`SELECT COUNT(*) as count FROM scam_domains WHERE domain = 'trucopy.org'`;
    const exchangeCount = await sql`SELECT COUNT(*) as count FROM exchange_cashouts WHERE notes LIKE '%TruCopy%' OR notes LIKE '%EXCHANGE SOURCE%'`;
    
    console.log(`  TruCopy Wallets:    ${walletCount[0].count}`);
    console.log(`  TruCopy Domains:    ${domainCount[0].count}`);
    console.log(`  Exchange Addresses: ${exchangeCount[0].count}`);
    console.log(`  Total Stolen:       $${trucopyScamSite.total_stolen_usd.toLocaleString()}`);
    
    console.log('\n✓ TruCopy database seeding complete!');
    console.log('');
    console.log('CRITICAL KYC EVIDENCE:');
    console.log('  • Kraken Hot Wallet: FWznbcNXWQuHTawe9RxvQ2LdCENssh12dsznf4RiouN5');
    console.log('  • Coinbase Hot Wallet: 5g7yNHyGLJ7fiQ9SN9mf47opDnMjc585kqXWt6d7aBWs');
    console.log('  → Subpoena these exchanges for KYC records of withdrawal initiators');
    console.log('='.repeat(60));
  } catch (err) {
    console.error('\n✗ Error seeding TruCopy data:', err);
    process.exit(1);
  }
}

main();
