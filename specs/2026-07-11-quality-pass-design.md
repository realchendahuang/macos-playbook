# Playbook quality pass

## Scope

Improve the macOS Playbook without changing its repository, Worker, custom-domain routes, VitePress base path, or relationship to the main site.

## Frontend

- Keep the VitePress default theme and current blue visual identity.
- Increase long-form and card copy readability.
- Give mobile Playbooks submenu links a 44px minimum target.
- Respect `prefers-reduced-motion` for hover and transition effects.
- Limit the page outline to useful section depth.
- Replace structural emoji in headings with the existing Lucide visual language.

## Content

- Preserve software names, links, commands, compatibility notes, dates, and personal recommendations.
- Tighten the hero, card summaries, section introductions, and repeated transitions.
- Remove template-like emphasis and explanations while keeping the practical first-person tone.

## Verification

- Run `pnpm check` and `git diff --check`.
- Verify desktop and mobile rendering, local search, mobile navigation, cross-Playbook links, dark mode, reduced motion, and console health.
- Push `main`, deploy the independent Worker, and smoke-test the production route.
