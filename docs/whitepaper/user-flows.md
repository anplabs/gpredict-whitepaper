# User Flows

gPredict is designed to offer a seamless, intuitive user experience for both casual participants and advanced market creators. This section outlines the primary user flows, describing how users interact with the protocol from start to finish.

The four core flows are:

1. **Viewing & Discovering Markets**
2. **Participating in a Market**
3. **Creating a Market**
4. **Claiming Rewards After Settlement**


## **1. Viewing & Discovering Markets**

The discovery flow ensures users can quickly find the markets most relevant to them.

### Steps:

1. User opens the gPredict app.
2. The home screen displays:
   - Trending markets
   - Highest reward pools
   - Soon-to-expire markets
   - Creator-curated categories
3. User can filter or search markets by:
   - Category (Sports, Crypto, Web3, Events, etc.)
   - Market type (Binary, Multi-outcome, Time-based)
   - Status (Active, Upcoming, Settled)
4. User selects a market to view its details:
   - Description
   - Settlement source
   - Odds and current pool sizes
   - Time left before closure
   - Creator reputation score

This flow provides full transparency before money is ever staked.


## **2. Participating in a Market**

Staking in a prediction market must be fast, clear, and low-friction.

### Steps:

1. User opens a market page.
2. The user selects an outcome (YES or NO, etc.).
3. User enters the amount of SOMI they want to stake.
4. The app previews:
   - Estimated odds
   - Projected payout if the user wins
   - Market closing time
5. User confirms the prediction.
6. Wallet prompts the user to sign the transaction.
7. Transaction is sent to the Market Pool smart contract.
8. UI updates instantly to:
   - Reflect new pool balances
   - Update odds
   - Display user's position

Once the market closes, the user is locked into their position until settlement.


## **3. Creating a Market**

Creators are essential to the gPredict ecosystem. The flow to create a new market is designed to be simple but secure.

### Steps:

1. User navigates to **Create Market**.
2. Creator enters:
   - Market title
   - Full description
   - Outcome type (Binary, Multi-outcome)
   - End time
   - Settlement Source (truth data source)
3. System performs validation:
   - Checks that end-time is valid
   - Ensures settlement source is approved
   - Confirms outcomes are clear and unambiguous
4. Creator reviews market preview.
5. Creator pays a small creation fee (anti-spam).
6. Wallet request appears for confirmation.
7. Market Factory contract deploys the new market.
8. Market becomes visible to all users under **Upcoming Markets**.

Creators earn a share of fees once their market settles, incentivizing high-quality forecasting questions.


## **4. Claiming Rewards After Settlement**

Once a market is resolved through the Oracle & validator system, users can claim their rewards.

### Steps:

1. Market enters **Settled** status.
2. Oracle publishes the result to the smart contract.
3. Users who staked on the correct outcome receive a **Claim Rewards** button.
4. User clicks **Claim**.
5. Wallet opens for signature.
6. Smart contract sends the user:
   - Their proportional winnings
   - Minus protocol + validator + creator fees
7. UI updates to show:
   - Total claimed rewards
   - Historical participation stats
   - Links to new or trending markets

This creates a positive feedback loop where users naturally move from one resolved market into new opportunities.


# Summary

These user flows highlight gPredict’s commitment to clarity, fairness, and ease of use. Whether users want to browse predictions, participate, create markets, or collect rewards, the protocol ensures the experience is fast, transparent, and designed around minimal friction—making forecasting accessible to all Web3 participants.
