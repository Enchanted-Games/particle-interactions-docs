# Particle emitter rules

Particle emitter rules contain rules about which [particle emitter type](#emitter-types) to use in a given particle context, as well as a fallback particle emitter which is used when no rules pass.

Particle emitter rules are loaded from the `assets/<namespace>/eg_particle_interactions/emitter_rules/<path>.json` directory of a resourcepack. If multiple resourcepacks define an emitter rule file with the same namespace and path, the individual entries in `rules` are combined from all packs.

## JSON format

<TreeGroup name="root">

</TreeGroup>

## Emitter types