# Particle appearances

A particle appearances controls various visual aspects of a particle, such as its texture, light emission, scale, etc.

Particle appearances are loaded from the `assets/<namespace>/eg_particle_interactions/appearances/<path>.json` directory of a resourcepack. If two resourcepacks define a particle appearance with the same namespace and id, the pack with a higher load order takes priority and does not stack with other packs with a lower load order.

## JSON format

<ParticleAppearanceFormat></ParticleAppearanceFormat>

## Texture config types

### `sprites` type

<SpritesTextureConfigFormat name="" desc="fields"></SpritesTextureConfigFormat>

### `block_texture` type

Uses the particle texture for the current block if the particle has been spawned with a block context, or a random sprite from a set of fallback sprites otherwise.

For this type, the translucency is calculated automatically. The `layer` field is only used to control the back face rendering of the particle unless the fallback sprites are being used.

<BlockTextureConfigFormat name="" desc="fields"></BlockTextureConfigFormat>

### `fluid_texture` type

Uses either the still or flowing texture for the current fluid if the particle has been spawned with a fluid context, or a random sprite from a set of fallback sprites otherwise.

For this type, the translucency is calculated automatically. The `layer` field is only used to control the back face rendering of the particle unless the fallback sprites are being used.

<FluidTextureConfigFormat name="" desc="fields"></FluidTextureConfigFormat>