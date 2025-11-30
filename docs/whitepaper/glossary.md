# Glossary

A reference guide to key terms used throughout the gPredict protocol and whitepaper.


## **A**

### **AMM (Automated Market Maker)**

A type of algorithm used in many decentralized markets to determine prices based on supply and demand. gPredict does _not_ use an AMM in its MVP to keep markets simple and predictable.


## **B**

### **Binary Market**

A prediction market with two possible outcomes (YES/NO). This is the default market type in gPredict’s MVP.

### **Burn Mechanism**

A tokenomics feature (future phase) where a portion of protocol revenue may be permanently removed from circulation to support long-term value.


## **C**

### **Creator**

A user who creates a prediction market. Creators earn fees when their market is settled.

### **Claim**

The action of withdrawing rewards after a market is settled and the user's chosen outcome is correct.

### **Consensus**

The method by which validators agree on the correct outcome of a market during settlement.


## **D**

### **DAO (Decentralized Autonomous Organization)**

A decentralized governance structure that controls protocol decisions in later phases of gPredict.

### **Dispute Mode**

A fallback system activated when oracle data is unclear or validator consensus is not immediately reached.


## **E**

### **End Time**

The timestamp after which a market closes and no further participation is allowed.

### **Event Outcome**

The final result of the real-world or digital event the prediction market is based on.


## **F**

### **Factory Contract**

The smart contract responsible for creating new markets and registering their metadata.

### **Fee Engine**

Smart contract logic that calculates protocol, creator, and validator fees during settlement.


## **G**

### **GPRED Token**

The future governance and utility token of gPredict (Phase 2+), used for voting, staking, and protocol incentives.

### **Governance**

The decision-making process that manages upgrades, fees, validators, and protocol parameters.


## **I**

### **Indexer**

A backend service that reads blockchain events, aggregates market data, and serves it to the frontend via API.


## **L**

### **Liquidity**

The total amount of SOMI staked across market pools. Higher liquidity increases market stability and reduces volatility in payout ratios.


## **M**

### **Market**

A prediction event with defined outcomes, end time, settlement source, and reward pools.

### **Market Pool**

The on-chain structure holding stakes for each outcome (YES/NO or multiple outcomes).

### **Market Creator Fee**

The portion of settlement fees allocated to the market creator.


## **O**

### **Oracle**

The system responsible for fetching real-world or digital data to determine the correct outcome of a market.

### **Outcome**

A possible result that users can stake on within a prediction market.


## **P**

### **Pool-Based Model**

A market design where each outcome has a dedicated liquidity pool. Payouts are based on the size of winning and losing pools.

### **Protocol Fee**

The percentage of the winning pool allocated to support protocol maintenance and growth.


## **R**

### **Reputation**

A non-transferable score for creators and validators based on accuracy, reliability, and user trust.

### **Reward Distribution**

The process of distributing the remaining market pool (after fees) proportionally among users who predicted correctly.


## **S**

### **Settlement**

The process of determining the outcome of a market after the end time and distributing rewards.

### **Settlement Source**

The official data source used to verify the outcome of a prediction event.

### **SOMI**

The native token of Somnia, used for all market interactions in the MVP.


## **T**

### **Time Lock**

A delay mechanism used to protect protocol changes or contract upgrades.

### **Token Model**

The structure describing the purpose and mechanics of the GPRED token.


## **V**

### **Validator**

A participant responsible for confirming oracle data and submitting the final settlement result on-chain.

### **Validator Fee**

The percentage of the winning pool allocated to validators for their work in confirming market outcomes.


## **W**

### **Winning Pool**

The pool corresponding to the outcome that validators confirm as correct.


# Summary

This glossary provides clear definitions of core concepts in gPredict, helping users, developers, and stakeholders navigate the terminology used throughout the protocol.
