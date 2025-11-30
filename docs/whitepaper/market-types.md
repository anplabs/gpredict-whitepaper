# Market Types

gPredict supports a structured set of market formats designed to keep forecasting simple, intuitive, and scalable. The initial release focuses on lean, easy-to-understand prediction mechanics, while the protocol architecture allows for more advanced formats to be added over time.

This section outlines the market types available in the MVP and those planned for future phases.


## **1. Binary Markets (YES / NO) — MVP**

Binary markets are the foundational market type in gPredict and the simplest form of prediction:

**Example:**

- _Will BTC close above $100k by Dec 31?_
- _Will Team A win the match?_
- _Will this protocol launch on Somnia before Q3?_

Binary markets consist of:

- **Two outcome pools:** YES and NO
- **Open participation:** users stake SOMI on their chosen side
- **Dynamic odds:** calculated based on relative pool sizes
- **Transparent settlement:** resolved via the Oracle & Validator layer

Binary markets form the backbone of gPredict’s early ecosystem due to their clarity and universal applicability.


## **2. Multi-Outcome Markets — Phase 2**

Multi-outcome markets allow more than two choices, enabling richer forecasting scenarios.

**Examples:**

- _Which team will win the tournament?_
- _Which token will have the highest gain this week?_
- _Who will win the presidential debate?_

These markets use a **multi-pool structure**, where each outcome has its own pool. Rewards are distributed to participants in the winning pool proportionally to their stake.

Multi-outcome markets open the door to:

- sports and eSports tournaments
- entertainment events
- Web3 token performance predictions
- competitive seasonal events


## **3. Time-Based & Expiring Markets — MVP**

Certain forecasts depend not just on “what happens” but _when_ it happens.

Examples:

- _Will BTC hit $120k before March 1?_
- _Will the server migration complete within 24 hours?_

Time-based markets rely on:

- **predefined expiration windows**
- Oracle confirmation when a condition is met
- early closure if the condition becomes impossible

This format allows for more dynamic forecasting, often used in crypto, engineering updates, and community events.


## **4. Ranking & Leaderboard Markets — Phase 3**

Ranking markets enable predictions where the user forecasts the order of outcomes, not just the winner.

Examples:

- _Rank the top 5 tokens by market cap at year-end_
- _Predict the final order of racers in a tournament_

These require more sophisticated settlement logic but unlock powerful, gamified forecasting ecosystems.


## **5. Custom Creator Markets — MVP+**

Creators can design custom markets using the base templates but apply their own framing.

A creator can define:

- the type (binary, multi-outcome)
- the description
- the settlement source
- any special conditions
- the end time

Custom markets enable community-driven prediction ecosystems and rapid experimentation with new formats.


## **6. In-Game Prediction Markets (MetaHoof Integration) — Future**

Once gPredict integrates with ANP Labs’ broader ecosystem, players will be able to wager on in-game events:

Examples:

- _Which horse will win the next PVP race?_
- _Will this stable finish top 5 in the weekly leaderboard?_
- _Will a Legendary horse be discovered this season?_

These markets can optionally use in-game currencies or cross-game incentives.


## **7. Seasonal & Themed Prediction Events — Future**

Special seasonal markets aligned with major events or cultural moments.

Examples:

- annual crypto season predictions
- Somnia network milestones
- holiday-themed prediction festivals
- ecosystem-wide tournaments

These drive engagement and create cyclical prediction culture.


# Summary

gPredict begins with the simplest reliable market format—binary outcomes—and gradually expands into richer, more expressive forecasting tools. This modular approach ensures the protocol remains easy to use while supporting increasingly sophisticated prediction ecosystems as it grows.
