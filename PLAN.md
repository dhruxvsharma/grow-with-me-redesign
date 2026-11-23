Status: Implemented locally; static validation complete. Live local-browser preview was blocked by the browser security boundary.

Summary: Replace the current pastel-gradient prototype styling with a cohesive illustrated botanical world built around the new Sprout, Cactus, and Blossom character packs. Preserve the local-first PWA and habit logic while introducing a character manifest, scene-based backgrounds, and a more legible garden-ledger habit system.

Context: The new packs share a watercolor/storybook aesthetic, five growth images, seven expressions, and six pose images. Their exported PNGs are transparent and similarly sized, but their silhouettes and baselines differ. The current app draws placeholder plants in code, uses broad gradients and generic white rounded cards, and resolves only kind/stage/sad rather than the richer mood and pose vocabulary now available.

System Impact: Persisted habit data remains authoritative. A new character presentation layer derives the correct asset, scale, baseline, expression, and pose from plant kind, growth, time of day, and recent user events. UI backgrounds and cards consume shared visual tokens rather than embedding one-off colors. No user data or offline behavior changes.

Approach: Treat the interface as a quiet botanical journal surrounding one expressive illustrated diorama. Use warm paper as the app surface, reserve richer scenery for the character stage, and make habit cards compact task instruments rather than decorative tiles. Character changes are pose swaps plus restrained CSS motion, not fake frame animation.

Visual direction:
- World: illustrated greenhouse journal; tactile paper, ink, leaf, clay, sky, and blossom colors.
- Core palette: paper `#F7F1E5`, ink `#283A24`, leaf `#5E8C3A`, young leaf `#A7C957`, terracotta `#C98252`, blossom `#F58EA0`, sky `#BBD9D1`, sunlight `#F4C35C`.
- Type: retain Fraunces for warm editorial headings and Figtree for highly legible controls; let the illustrations carry the handmade personality.
- Memorable element: a layered character habitat that changes with time, mood, and completion state.
- Restraint: paper texture only on large surfaces; no texture behind small text, no gradients as primary scenery, and no decorative motion outside the character habitat.

Screen map:
- Welcome: full-height nursery scene with one character peeking through leaves; one clear start action.
- Plant choice: three equal habitat pedestals with consistent character scale, short personality copy, and selected-state lighting.
- Home: greeting and streak summary; illustrated habitat; compact growth rail; today's habit ledger; streak garden preview.
- Add/edit habit: plant-tag bottom sheet with category stamp, schedule, reminder, save, and delete actions.
- Completion: watering action travels into the habitat; character swaps to happy/excited; one concise reward message.
- Growth moment: dedicated stage plate with the next growth asset, paper-confetti leaves, and before/after silhouette.
- Missed day: overcast/rain habitat, sad expression, supportive copy, and one explicit recovery task.
- Progress: botanical field journal with calendar stamps, weekly growth stems, and meaningful totals.
- Garden: greenhouse shelf containing unlocked character habitats; locked plants become seed packets rather than grey cards.
- Profile: quiet utility screen; settings grouped like journal controls, with minimal character art.

Habit-card anatomy:
- Left: category stamp with a hand-drawn icon and stable category color.
- Center: habit title, schedule, and optional streak/goal metadata.
- Right: large droplet action with explicit completed state; a separate accessible edit action.
- Default: warm paper card with a subtle fibre edge and low shadow.
- Pressed: 2 px downward movement and darker paper edge.
- Completed: mint wash, filled droplet, small leaf/bloom stamp, readable title without aggressive strikethrough.
- Missed/overdue: clay accent and supportive label; never use red as the full-card background.
- Empty state: character holding a blank plant tag with “Plant your first habit.”

Character-state map:
- Normal home: `idle`; occasional `looking around` or `moving with wind`.
- Habit completed: `happy`, then return to `idle`.
- All habits completed: `excited` plus `jumping` pose.
- Missed day: `sad`.
- Late evening: `sleepy` when no stronger state is active.
- New/unconfigured state: `confused` sparingly.
- Growth event: matching growth asset, then `excited`.
- User speech bubble: `talking` pose.

Background system:
- Global surface: solid warm paper with a very subtle reusable grain asset.
- Home habitat: three composited illustrated layers—distant sky/window, midground foliage/shelf, foreground leaves and grounded shadow.
- Time variants: morning dew and angled light; daytime clear greenhouse; evening amber window and fireflies.
- Mood variants: missed-day overcast plate with rain marks; completion plate with sunlight and small petals.
- Other screens: use cropped botanical corner motifs and journal rules instead of full-scene backgrounds, keeping content legible.

Changes:
- `assets/characters/<kind>/...` - Import and rename growth, expression, and pose PNGs consistently; keep original packs outside the shipped bundle.
- `assets/scenes/...` - Add paper grain, habitat layers, time-of-day plates, and mood overlays in the same watercolor style.
- `js/characters.js` - Define one character manifest with asset paths, growth thresholds, scale, baseline, and state fallbacks.
- `js/app.js` - Replace the inline SVG renderer with manifest-driven character selection and event-based mood/pose transitions.
- `index.html` - Restructure screens around habitat, journal, ledger, and shelf components while retaining semantic controls.
- `css/styles.css` - Replace gradient-heavy styling with the new token system, scene layers, card anatomy, responsive rules, and restrained motion.
- `js/storage.js` - Preserve the existing schema; add a migration only if a persistent selected character-state field becomes necessary.
- `sw.js` - Cache the new character and scene assets, with a bumped cache version.

Implementation order:
1. Normalize and rename all character assets; build the manifest and a visual alignment test page.
2. Establish tokens, typography, paper surface, spacing, and shared controls.
3. Build the Home habitat and habit ledger as the reference screen.
4. Apply the system to onboarding, completion, recovery, progress, garden, and profile.
5. Add scene variants and character state transitions.
6. Optimize PNG/WebP assets, update offline caching, and perform accessibility/responsive verification.

Verification:
- Capture Sprout, Cactus, and Blossom in the same habitat at phone widths and confirm stable baseline, perceived size, and shadow.
- Test all five growth assets, seven expressions, and six poses with missing-asset fallbacks.
- Exercise habit default, pressed, completed, overdue, editing, empty, and long-title states.
- Verify morning, day, evening, missed-day, and completion habitats without reducing text contrast.
- Test 320 px, 390 px, and tablet/desktop layouts; keyboard focus; reduced motion; offline reload; and persisted-state migration.
- Run one combined mobile/desktop visual review, fix defects in one batch, and confirm once more.
