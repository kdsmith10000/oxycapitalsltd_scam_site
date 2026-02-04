-- OxyCapitals Scam Database Schema
-- Tracks all wallets, transactions, and scam operations

-- Scam Wallets Table
CREATE TABLE IF NOT EXISTS scam_wallets (
    id SERIAL PRIMARY KEY,
    address VARCHAR(100) NOT NULL UNIQUE,
    blockchain VARCHAR(20) NOT NULL, -- btc, eth, trx
    wallet_type VARCHAR(50) NOT NULL, -- collection, personal, bybit, segwit, cashout
    label VARCHAR(100),
    total_received_usd DECIMAL(15, 2) DEFAULT 0,
    total_sent_usd DECIMAL(15, 2) DEFAULT 0,
    transaction_count INTEGER DEFAULT 0,
    is_exchange BOOLEAN DEFAULT FALSE,
    exchange_name VARCHAR(50),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Transactions Table
CREATE TABLE IF NOT EXISTS transactions (
    id SERIAL PRIMARY KEY,
    wallet_id INTEGER REFERENCES scam_wallets(id),
    tx_hash VARCHAR(100),
    tx_date TIMESTAMP,
    direction VARCHAR(10) NOT NULL, -- in, out
    amount VARCHAR(50), -- Original amount with unit
    amount_usd DECIMAL(15, 2),
    from_address VARCHAR(100),
    to_address VARCHAR(100),
    blockchain VARCHAR(20) NOT NULL,
    fee_amount VARCHAR(50),
    fee_usd DECIMAL(10, 2),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Scam Domains Table
CREATE TABLE IF NOT EXISTS scam_domains (
    id SERIAL PRIMARY KEY,
    domain VARCHAR(255) NOT NULL UNIQUE,
    status VARCHAR(20) DEFAULT 'active', -- active, taken_down, unknown
    scammer_username VARCHAR(100),
    contact_email VARCHAR(255),
    claimed_address TEXT,
    first_seen DATE,
    last_seen DATE,
    netcraft_report_id VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exchange Cash-Out Addresses (for law enforcement)
CREATE TABLE IF NOT EXISTS exchange_cashouts (
    id SERIAL PRIMARY KEY,
    address VARCHAR(100) NOT NULL UNIQUE,
    blockchain VARCHAR(20) NOT NULL,
    exchange_name VARCHAR(50),
    total_received_usd DECIMAL(15, 2),
    is_kyc_required BOOLEAN DEFAULT TRUE,
    priority VARCHAR(20) DEFAULT 'medium', -- high, medium, low
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Victim Reports (optional - for future use)
CREATE TABLE IF NOT EXISTS victim_reports (
    id SERIAL PRIMARY KEY,
    report_date DATE,
    amount_lost_usd DECIMAL(15, 2),
    cryptocurrency VARCHAR(20),
    wallet_sent_to VARCHAR(100),
    contact_method VARCHAR(50), -- discord, telegram, email
    scammer_username VARCHAR(100),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Summary Statistics View
CREATE OR REPLACE VIEW scam_summary AS
SELECT 
    (SELECT COALESCE(SUM(total_received_usd), 0) FROM scam_wallets WHERE wallet_type != 'cashout') as total_stolen_usd,
    (SELECT COUNT(*) FROM scam_wallets WHERE wallet_type != 'cashout') as scam_wallet_count,
    (SELECT COUNT(*) FROM transactions) as total_transactions,
    (SELECT COUNT(*) FROM scam_domains) as scam_domain_count,
    (SELECT COUNT(*) FROM scam_domains WHERE status = 'taken_down') as domains_taken_down;

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_transactions_wallet_id ON transactions(wallet_id);
CREATE INDEX IF NOT EXISTS idx_transactions_blockchain ON transactions(blockchain);
CREATE INDEX IF NOT EXISTS idx_transactions_tx_date ON transactions(tx_date);
CREATE INDEX IF NOT EXISTS idx_scam_wallets_blockchain ON scam_wallets(blockchain);
CREATE INDEX IF NOT EXISTS idx_scam_wallets_address ON scam_wallets(address);
