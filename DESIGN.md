# Grow with me — design system

## Direction

An illustrated greenhouse journal: expressive watercolor plant companions live inside a quiet, tactile habit-tracking interface. The character habitat carries emotion; surrounding controls stay calm, legible, and task-focused.

## Principles

1. The character is the emotional center, not decoration.
2. Paper and botanical materials replace generic gradients.
3. Rich scenery belongs inside habitats; text surfaces remain quiet.
4. Habit completion should feel like caring for a plant.
5. Motion answers an action and always respects reduced motion.

## Tokens

- Paper `#F7F1E5`
- Card `#FFFDF7`
- Ink `#283A24`
- Muted ink `#6F7868`
- Leaf `#5E8C3A`
- Young leaf `#A7C957`
- Terracotta `#C98252`
- Blossom `#F58EA0`
- Sky `#BBD9D1`
- Sunlight `#F4C35C`

Fraunces is used for warm editorial headings. Figtree is used for controls, labels, and body text.

## Components

- **Habitat:** watercolor scene, grounded shelf, character, speech bubble, and an inset paper growth panel.
- **Habit ledger row:** category stamp, habit text, schedule, droplet completion control, and separate edit action.
- **Journal card:** warm paper, fine clay-toned edge, shallow hard bottom shadow.
- **Plant tag sheet:** bottom sheet for habit editing, using the same paper and garden-label language.
- **Greenhouse shelf:** collection cards with consistent character baselines and seed-packet locked states.

## Character states

Growth artwork is resolved from persisted stage and progress. Expressions and poses are event-driven: happy after completion, excited/jumping when the day is complete, sad after a missed day, sleepy in a quiet evening state, talking with speech, and wind/look poses as restrained idle moments.

## Motion

Use short plant reactions and physical button depression. Do not animate every card on hover. Disable decorative movement under `prefers-reduced-motion`.
