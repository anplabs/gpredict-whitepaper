# Fees & Incentives

The Fees & Incentives model of gPredict is designed to ensure fairness, sustainability, and alignment among all ecosystem participants—users, creators, validators, and the protocol itself. This section outlines how fees are calculated, why they exist, and how incentives promote long-term health and growth of the prediction market ecosystem.


## **1. Fee Philosophy**

gPredict applies a _minimal and transparent_ fee structure. Fees are designed to:

- Sustain the protocol
- Reward contributors
- Prevent spam markets
- Create balanced incentives
- Maintain neutrality and fairness

All fees are visible to users before they participate in or create a market.


## **2. Types of Fees**

gPredict uses four types of fees, applied only when a market settles:

### **2.1 Protocol Fee**

A small percentage of the winning pool that supports:

- platform development
- maintenance
- oracle infrastructure
- community initiatives
- long-term sustainability reserves

**Default: 2% of winning pool**

### **2.2 Creator Fee**

Rewards users who create interesting, relevant, and high-quality markets.

Creators earn a fixed percentage of the market’s settlement, incentivizing:

- creative forecasting topics
- recurring event series
- niche communities building inside gPredict

**Default: 1% of winning pool**

### **2.3 Validator Fee**

Paid to validators who correctly verify and settle the market outcome.

Validators are rewarded for:

- accuracy
- timely submissions
- maintaining data integrity

**Default: 1% of winning pool**

### **2.4 Market Creation Fee (Anti‑Spam)**

A small upfront fee prevents spam or malicious markets.

This fee:

- is static (not percentage-based)
- may be reduced or waived for high‑reputation creators
- ensures only serious markets are created

**Default: Small fixed SOMI fee (configurable)**


## **3. Incentive Model**

The incentive model is designed to support the fundamental roles in the ecosystem.

### **3.1 Participant Incentives**

Users who stake on the winning outcome receive:

- Their original stake
- A proportional share of the losing pools
- Transparent reward calculations via on‑chain logic

Participation incentives ensure users feel confident entering markets frequently.


### **3.2 Creator Incentives**

Creators are rewarded for producing quality markets.

Benefits:

- Earn Creator Fees from settlement
- Build reputation
- Gain visibility in the ecosystem
- Community can “follow” top creators
- Eligibility for seasonal Creator Rewards (Phase 2+)

Creators are essential for organic ecosystem growth.


### **3.3 Validator Incentives**

Validators play a crucial role in ensuring fairness and accuracy.

Incentives:

- Validator Fees from every settled market
- Reputation score tied to accuracy
- Access to advanced validator roles in Phase 2+
- Optional staking rewards once GPRED is introduced

Penalties (Phase 2+):

- Slashing for demonstrably incorrect submissions
- Reputation loss for delayed or inconsistent performance


### **3.4 Protocol Incentives**

The protocol earns a small fee to:

- Maintain infrastructure
- Add new features
- Support marketing and user acquisition
- Fund audits and validator programs

A sustainable fee model ensures the long-term viability of gPredict.


## **4. Reward Distribution Logic**

Once a market is settled:

1. Smart contract determines the winning outcome.
2. Total winning pool is reduced by:
   - Protocol Fee
   - Creator Fee
   - Validator Fee
3. Remaining pool is distributed proportional to each winner’s stake.

Formula:

```
user_payout = user_stake / total_winning_side * (total_pool - total_fees)
```

This ensures transparency, fairness, and trustlessness.


## **5. Optional Future Incentives (Phase 2+)**

### **5.1 Seasonal Leaderboards**

Top performers (creators, validators, participants) receive:

- Bonus payouts
- NFT badges
- Visibility boosts

### **5.2 GPRED Token Rewards**

Once introduced, GPRED may be used for:

- Staking-based rewards
- Creator boosts
- Validator slashing protection
- Governance participation

### **5.3 Sponsored Markets**

Brands or DAOs pay sponsorship fees to highlight their markets:

- Increases liquidity
- Boosts creator visibility
- Supports protocol revenue


# Summary

The Fees & Incentives system is the economic backbone of gPredict. By combining minimal fees with meaningful rewards for creators, participants, and validators, gPredict builds a balanced, sustainable, and community-driven prediction market ecosystem where value flows to those who contribute most.
