# Particle appearance

A particle appearance controls various visual aspects of a particle, such as its texture, light emission, scale, etc.

Particle appearances are loaded from the `assets/<namespace>/eg_particle_interactions/appearances/<path>.json` directory of a resourcepack. If two resourcepacks define a particle appearance with the same namespace and id, the pack with a higher load order takes priority and does not stack with other packs with a lower load order.

## JSON format

<ParticleDefinitionFormat></ParticleDefinitionFormat>
