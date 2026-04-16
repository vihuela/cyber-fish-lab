# Game Systems

## Main Gameplay Loop

### Session Loop

1. Enter the main tank.
2. Check fish state and passive income.
3. Feed fish or clean the tank if needed.
4. Adjust decor and lighting.
5. Visit the shop to buy new items.
6. Complete small missions.
7. Return later for more growth and rewards.

### Long-Term Loop

1. Improve tank quality.
2. Unlock rarer fish.
3. Discover stronger decoration combinations.
4. Complete codex entries.
5. Unlock larger and more advanced tanks.

## Resource Model

Use a small resource set in the MVP.

- Credits: the main spend currency
- Bio Points: optional progression currency for milestones

If needed, V1 can ship with only Credits.

## Tank State

Every tank has:

- Capacity
- Decoration limit
- Cleanliness
- Light
- Comfort
- Beauty
- Signal Stability

### Suggested Gameplay Meaning

- Cleanliness affects fish mood and income
- Light affects fish preference matching
- Comfort affects growth speed
- Beauty affects mission score and presentation
- Signal Stability affects rare fish attraction and special states

## Fish Model

Each fish can contain:

- id
- name
- rarity
- size
- growthProgress
- hunger
- happiness
- preferredLightRange
- preferredDecorTags
- requiredSignal
- rewardRate

## Decoration Model

Each decoration can contain:

- id
- name
- category
- price
- tags
- beautyBonus
- comfortBonus
- lightDelta
- signalDelta

## Example Fish Roster

### Common

- Data Guppy
- Pixel Goldfish
- Neon Minnow

### Rare

- Chrome Betta
- Static Koi
- Hologram Jelly

### Epic

- Neon Ribbon Eel
- Ghost Circuit Ray

## Example Decor Tags

- organic
- industrial
- signal
- warm-light
- cool-light
- ruins
- lab

## Mission System

Keep missions short and readable.

Examples:

- Reach 60 Beauty in any tank
- Keep Signal Stability above 70 for 10 minutes
- Raise 3 rare fish
- Place 5 lab-tag decorations in one tank
- Unlock your first jelly-type fish

## Balancing Guidance

- The first fish should be affordable within 1 minute.
- The first tank upgrade should feel reachable in the first session.
- Rare fish should require a visible but understandable setup goal.
- Decoration bonuses should be meaningful enough to notice.

## UI Priorities

The main screen should always make these things clear:

- Which fish are present
- What the current tank mood is
- Which stats are healthy or weak
- What the player can do next

## V2 Expansion Ideas

- Fish variants and mutations
- Day and night visual cycles
- Environmental events
- Multi-tank management
- Breeding lab
- Special event fish
