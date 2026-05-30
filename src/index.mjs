// @papercusp/token-kit — generic Style Dictionary tooling, shared across projects.
//
//   transforms  — restart/name (kebab, drop color./shop. prefix),
//                 restart/srgb (→ hex / rgba), restart/oklch (→ oklch(L C H [/a]))
//   formats     — restart/tailwind-theme (@theme block), restart/grid-ts (typed `as const`)
//   preflight   — validate token sources (zero-token / tree-merge / $schema collisions)
//
// No brand values live here — projects supply their own *.tokens.json + SD config.
export { transforms } from './transforms.mjs';
export { formats } from './formats.mjs';
export { preflight } from './preflight.mjs';
