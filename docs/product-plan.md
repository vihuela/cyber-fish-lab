# Product Plan

## One-Line Pitch

A browser game where players build and maintain a futuristic cyber aquarium by choosing tanks, raising rare fish, and arranging glowing decorative objects.

## Product Vision

Create a relaxing but stylish aquarium game with a distinct cyber identity. The player should feel proud of both the look of their tank and the collection they have built.

## Genre

- Casual simulation
- Collection and decoration
- Light economy and progression

## Core Loop

1. Choose or unlock a tank.
2. Buy fish and decorations.
3. Arrange the environment.
4. Feed fish and maintain the tank.
5. Collect currency and unlock rewards.
6. Improve the tank to attract rarer fish and complete the codex.

## Player Motivation

- I want my tank to look cool.
- I want to collect rare fish.
- I want my choices to matter.
- I want to unlock better visual combinations over time.

## Core Features

### 1. Tank Selection

Different tanks should offer both visual identity and gameplay differences.

Example tanks:

- Orbital Display Tank
- Arcade Showcase Tank
- Industrial Observation Tank

Tank stats can include:

- Capacity
- Decoration slots
- Base comfort
- Base signal stability

### 2. Fish Collection

Each fish should have:

- Name
- Rarity
- Growth stage
- Preferred lighting
- Preferred decoration tags
- Income rate
- Unlock condition

Example fish ideas:

- Neon Ribbon Eel
- Pixel Goldfish
- Hologram Jelly
- Chrome Betta
- Static Koi
- Data Guppy

### 3. Decoration System

Decorations are not only visual. They modify the tank state.

Decoration types:

- Electronic algae tree
- Viewing lamp
- Projection beacon
- Ruined signage
- Pipe cluster
- Data crystal
- Filter tower

Decoration effects can include:

- Beauty
- Comfort
- Light level
- Signal stability
- Rarity attraction bonus

### 4. Tank Parameters

Keep the simulation readable. Avoid too many numbers in the MVP.

Recommended MVP parameters:

- Cleanliness
- Light
- Comfort
- Beauty
- Signal Stability

Signal Stability is the signature cyber stat.

It represents whether the fish tank feels digitally healthy and synchronized. Rare fish can require a minimum signal level before they appear or thrive.

### 5. Progression

Progression should come from:

- Currency earned over time
- Tank level
- Mission rewards
- Codex completion
- New fish discoveries

### 6. Codex

The codex should track:

- Fish unlocked
- Growth forms unlocked
- Variant colors or mutations
- Favorite environment combinations

## MVP Scope

The first playable version should stay compact.

### Tanks

- 3 tanks

### Fish

- 8 fish species

### Decorations

- 15 decorative items

### Screens

- Main tank
- Shop
- Edit mode
- Codex
- Mission panel

### Systems

- Buy and place decorations
- Buy fish
- Fish movement and idle behavior
- Feeding
- Reward collection
- Save and load

## Success Criteria For MVP

- A player can build a personal-looking tank in one session.
- The tank looks alive even when the player is idle.
- Decoration decisions change at least one useful stat.
- There is a clear reason to come back and unlock more content.

## Things To Avoid In V1

- Deep breeding simulation
- Realistic chemistry simulation
- Online multiplayer
- Complex market systems
- Too many resource types

## Technical Recommendation

- Framework: React
- Build tool: Vite
- Language: TypeScript
- Scene rendering: Pixi.js
- State: Zustand or simple React state for MVP
- Persistence: localStorage
