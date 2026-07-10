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

## Colour source types

### `constant` type

<ConstantColourSourceFormat name="" desc="fields"></ConstantColourSourceFormat>

### `block_texture` type

A random entry from the palette for the current block state if the particle has been spawned with a block context. See [Particle Palettes](/rp/particle-palettes) for more info.

<BlockTextureColourSourceFormat name="" desc="fields"></BlockTextureColourSourceFormat>

### `block_tint` type

The [tint](https://minecraft.wiki/w/Block_colors) for the current block state if the particle has been spawned with a block context.

<BlockTintColourSourceFormat name="" desc="fields"></BlockTintColourSourceFormat>

### `fluid_texture` type

A random entry from the palette for the current fluid state if the particle has been spawned with a fluid context. See [Particle Palettes](/rp/particle-palettes) for more info.

<FluidTextureColourSourceFormat name="" desc="fields"></FluidTextureColourSourceFormat>

### `fluid_tint` type

The [tint](https://minecraft.wiki/w/Block_colors) for the current fluid state if the particle has been spawned with a fluid context.

<FluidTintColourSourceFormat name="" desc="fields"></FluidTintColourSourceFormat>

### `variable` type

Takes a base colour and ransomises it for each particle instance.

<VariableColourSourceFormat name="" desc="fields"></VariableColourSourceFormat>

### `redstone_power` type

Calculates the redstone power level of a redstone component then returns the tint of redstone dust with that power level.

<RedstonePowerColourSourceFormat name="" desc="fields"></RedstonePowerColourSourceFormat>

## Model offset

## UV provider types

### `simple` type

<SimpleUVProviderFormat name="" desc="fields"></SimpleUVProviderFormat>

### `random_within_sprite` type

Picks a random section of the current sprite to display based on the particle scale, this works in a very similar way to how vanilla `block` particles look.

Whenever the sprite changes, a different section of the new sprite is chosen to be displayed.

<RandomUVProviderFormat name="" desc="fields"></RandomUVProviderFormat>