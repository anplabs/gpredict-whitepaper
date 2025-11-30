# Economy Overview

The gPredict economy is designed to be simple at launch, fair for all participants, and flexible enough to scale as the protocol grows. The economic model ensures that incentives are aligned across market participants, creators, validators, and the protocol itself.

The primary goals of the gPredict economy are:

- **Simplicity** — easy to understand for first-time users
- **Sustainability** — fees that support growth without burdening users
- **Neutrality** — no advantage for any participant beyond their stake and accuracy
- **Scalability** — modular design ready for advanced incentives and token models in later phases


## **1. Base Currency: SOMI (Somnia Native Token)**

gPredict launches without introducing a new token. Instead, the protocol uses **SOMI**, the native currency of the Somnia ecosystem.

Benefits:

- Low transaction fees
- Fast confirmations
- Broad accessibility for the Somnia user base
- Simplifies UX and avoids premature token design

SOMI is used for:

- Market participation (staking)
- Market creation fees
- Reward distribution
- Validator compensation
- Protocol revenue

This establishes a stable, reliable economic foundation.


## **2. Market Pools (YES/NO or Multi-Outcome)**

Each prediction market uses a pool-based liquidity model:

### For Binary Markets:

- **YES Pool** — SOMI staked on outcome YES
- **NO Pool** — SOMI staked on outcome NO

### For Multi-Outcome Markets:

- A pool is created for each outcome

Payouts are based on **proportional share of the winning pool**, meaning:

```
user_reward = (user_stake / total_stake_on_winning_side)
              * (total_pool - protocol_fees - creator_fees - validator_fees)
```

This ensures predictable and transparent reward calculations.


## **3. Fees & Distribution Model**

The protocol charges minimal fees to ensure sustainability while keeping participation attractive.

### Fee Types:

- **Protocol Fee** — supports ongoing development
- **Creator Fee** — rewards users for creating high-quality markets
- **Validator Fee** — incentivizes accurate settlement
- **Optional Burn/Buyback Allocation** — future token model (Phase 2+)

### Example Default Fee Structure:

- Protocol Fee: **2%**
- Creator Fee: **1%**
- Validator Fee: **1%**

Fees are only applied **to the winning pool**, meaning losers pay nothing beyond their stake.


## **4. Creator Incentives**

Creators are a key part of the ecosystem; they generate the questions that attract participants.

Creator incentives:

- Earn a percentage of settlement fees
- Gain reputation through successful markets
- Visibility boosts for highly accurate or popular markets
- Ability to form communities or themed market sets

This creates a network of creators who organically expand the prediction ecosystem.


## **5. Validator Incentives**

Validators ensure fair settlement and maintain trust in the system.

Validators earn:

- A percent of the market’s settlement fees
- Additional rewards in future staking-based upgrades (Phase 2+)
- Reputation points tied to accuracy and reliability

Penalties for validators (Phase 2+):

- Slashing for incorrect submissions
- Loss of reputation for delayed settlement

This encourages accurate, timely validation.


## **6. Protocol Revenue**

Revenue generated from protocol fees will be used to:

- Fund continued development
- Support Oracle infrastructure
- Finance user acquisition and growth programs
- Build a long-term sustainability reserve

The protocol grows as the ecosystem grows.


## **7. Future Token Model (Phase 2+)**

Although no token launches at MVP, gPredict’s economic architecture includes room for future expansion via a governance or utility token (GPRED).

Possible future utilities:

- Discounted fees
- Enhanced creator visibility
- Validator staking and slashing
- Governance voting rights
- Seasonal incentive pools

The token will be introduced only when the protocol demonstrates sustainable usage.


# Summary

The gPredict economy begins with a minimal and transparent structure based entirely on SOMI. This simplicity makes the system accessible, fair, and easy to scale. Over time, the economy evolves toward deeper incentives, reputation systems, and potentially a native token—ensuring long-term sustainability and community ownership.
