# System Architecture

gPredict is designed with a modular, scalable architecture that prioritizes simplicity, transparency, and multi-chain expansion. The architecture is divided into four primary layers:

1. **Frontend Application (Client Layer)**
2. **Backend Services (Off‑Chain Logic Layer)**
3. **Smart Contract Layer (On‑Chain Core)**
4. **Oracle & Validator Layer (Settlement Infrastructure)**

This layered approach keeps the system maintainable while enabling future growth into new prediction types, chains, and application integrations.


## **1. Frontend Application (Client Layer)**

The gPredict frontend is a lightweight, responsive decentralized application (dApp) that serves as the main entry point for users.

### Core Responsibilities:

- Display active, upcoming, and settled markets
- Allow users to create new markets
- Provide real‑time market odds and pool balances
- Handle wallet connection (Somnia first)
- Guide users through staking and claiming rewards
- Offer leaderboards, creator profiles, and market discovery tools

### Tech Stack:

- Web-based UI (React or Vue)
- Somnia wallet integration
- GraphQL/REST for off‑chain data retrieval
- Minimal on‑chain transaction steps

### Design Goals:

- **Simple UX** for prediction first-timers
- **Fast** loading and interaction
- **Transparent** odds and settlement information


## **2. Backend Services (Off‑Chain Logic Layer)**

While core logic is on-chain, gPredict uses backend services for tasks that do not need to be executed on-chain.

### Responsibilities:

- Index markets, pools, and user activity
- Cache oracle data for high performance
- Provide search, filtering, trending-metrics
- Monitor market expiration and trigger oracle fetch requests
- Generate analytics, charts, and market histories
- Support Creator reputation and Validator statistics

Backend services ensure the UI remains fast and provide a smooth, real-time experience.

### Components:

- Indexer (Somnia event listener)
- Market Cache and Analytics Engine
- API Gateway for querying market data
- Notification/alert system for market resolutions

This layer does **not** perform settlement; it only processes data for display and discoverability.


## **3. Smart Contract Layer (On‑Chain Core)**

The smart contract layer is the heart of gPredict, responsible for all mission-critical logic.

### Core Smart Contract Modules:

1. **Market Factory**

   - Deploys new prediction markets
   - Stores metadata (creator, end-time, settlement source, type)
   - Ensures market structure is valid

2. **Market Pools**

   - Store YES/NO or multi-outcome stakes
   - Track total liquidity
   - Calculate dynamic odds
   - Distribute rewards after settlement

3. **Oracle Bridge Module**

   - Receives validated results from the validator network
   - Locks/unlocks market settlement state
   - Emits settlement events for indexers

4. **Fee Engine**
   - Calculates protocol, validator, and creator fees
   - Handles distribution during reward payouts

### Smart Contract Principles:

- **Minimal attack surface**
- **Deterministic behavior**
- **Upgradeable via proxy (optional)**
- **Optimized for low gas usage on Somnia**


## **4. Oracle & Validator Layer (Settlement Infrastructure)**

This layer handles truth verification and final settlement.

### Components:

- Oracle Fetcher: pulls data from the selected settlement source
- Validator Nodes: confirm results and vote on correct outcomes
- Consensus Module: aggregates validator votes
- Settlement Adapter: posts final result on-chain

The full design of this layer is covered in the **Oracle & Settlement** section, but it is included here to reflect its role within the architecture.


## **5. Multi‑Chain Adapter Layer (Future Expansion)**

When gPredict expands to new chains, a chain adapter module ensures consistency across networks.

### Responsibilities:

- Handle cross‑chain messaging
- Sync market creation and settlement
- Mirror liquidity or maintain separate pools per chain
- Enable unified user identity (optional)

This modularity allows gPredict to operate as a universal forecasting hub across ecosystems.


## **6. Security Framework**

Security is a foundational requirement for prediction systems.

### Measures:

- Formal smart contract audits
- Validator slashing mechanisms
- Rate-limited market creation
- Anti-spam protections for creators
- Disaster recovery and fallback oracle modes
- Multi-sig admin controls for early phases

As decentralization increases, admin power decreases while validator authority expands.


# Summary

gPredict’s architecture is intentionally simple at launch but built with extensibility at its core. By separating the UI, off-chain logic, smart contract core, and oracle settlement layers, the protocol maintains clarity, resilience, and flexibility—positioning it for long-term growth across Somnia and the broader multi-chain ecosystem.
