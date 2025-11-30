# Oracle & Settlement

The integrity of a prediction market depends entirely on how outcomes are resolved. gPredict uses a transparent, decentralized, and modular settlement framework designed to ensure fairness, prevent manipulation, and maintain user trust.

The system is built on three layers:

1. **Data Source Layer (Event Truth Source)**
2. **Oracle Aggregation Layer**
3. **Validator Layer (On-Chain Settlement)**

This layered design enables reliable settlement across a wide range of event types, from blockchain-native metrics to real-world outcomes.


## **1. Data Source Layer — Where Truth Comes From**

Every market must define a **Settlement Source**, which specifies where the event result originates.

Examples of supported data sources:

- Official sports APIs
- Price feeds (crypto, stocks, commodities)
- Social platform verified announcements
- Somnia on-chain data
- Predefined public data endpoints
- Community-approved manual review for niche events

Creators select a settlement source when creating a market, ensuring clarity for participants.


## **2. Oracle Aggregation Layer — Fetching Outcome Data**

The Oracle Layer’s role is to fetch, aggregate, and standardize data from one or multiple truth sources.

Key characteristics:

- Fetches data from the Settlement Source
- Normalizes result format
- Prevents single points of failure
- Makes results verifiable
- Logs all oracle requests and responses for transparency

The oracle layer does **not** finalize outcomes. Instead, it provides structured data to the validators for final settlement.


## **3. Validator Layer — Decentralized Settlement**

Validators serve as the decentralized authority that confirms outcomes and publishes the final settlement on-chain.

### Responsibilities:

- Review oracle data
- Verify it against the settlement source
- Reach consensus on the correct outcome
- Submit the result on-chain for final settlement

Validator submissions are immutable and form the basis for reward distribution.

### Validator Incentives (Phase 2+):

- Receive a share of protocol fees
- Stake-based reputation
- Slashing for malicious or incorrect submissions
- Rewards for accurate, timely validations

This system ensures validators act in the best interest of the protocol.


## **4. Settlement Flow — Step-by-Step**

Here is how gPredict resolves a prediction market:

1. **Market closes** after the end-time.
2. Oracle aggregates data from the defined settlement source.
3. Validators receive the oracle output.
4. Validators confirm and vote on the correct outcome.
5. Consensus is achieved (majority or threshold).
6. The final result is posted on-chain.
7. Rewards are distributed to winners automatically.
8. Creator, validator, and protocol fees are processed.

This flow is fully transparent and logs are accessible for community review.


## **5. Handling Disputes**

To maintain fairness, gPredict includes a dispute mechanism (Phase 2+).

A dispute may occur if:

- Oracle data appears inconsistent
- Validators disagree on the result
- The settlement source provides ambiguous or delayed information

Dispute process:

1. Market enters **dispute mode**
2. Validators re-review the event
3. If unresolved, additional data sources are consulted
4. Final decision made by extended validator quorum
5. Settlement result becomes final

This ensures accuracy in exceptional cases.


## **6. Support for Multi-Chain Settlement (Future)**

When gPredict expands across chains, settlement remains unified:

- Oracle Layer remains chain-agnostic
- Validators publish results on every chain where the market exists
- Users on any supported chain receive correct settlement
- Cross-chain messaging ensures synchronization

This creates a cohesive prediction system across ecosystems.


# Summary

gPredict’s Oracle & Settlement system blends automation, decentralization, and community verification to ensure trust, accuracy, and resilience. By separating data retrieval from final validation, gPredict minimizes manipulation risks while supporting a wide range of prediction categories and future multi-chain expansion.
