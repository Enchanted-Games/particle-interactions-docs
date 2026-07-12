# Particle palettes

Particle palettes are a set of colours associated with a block or fluid state that can be used for particle tints.

These are generated automatically on the fly as required. For blocks, the palette is generated from the particle texture defined in the block model. For fluids, the palette is generated from the flowing or still texture depending on what is specified in the [colour source](/rp/particle-appearances#colour-source-types). Only pixels with an opacity of `21` or higher are included in the palette, if no valid pixels are present in the texture the palette will default to opqaue white.

Palette overrides can be defined for blocks and fluids. This can be useful if the default behaviour doesn't work for your usecase. For example vanilla grass blocks use the dirt texture as their particle texture, this means that without a palette override, tinted particles would appear brown for grass blocks.

## Block palette override

These are loaded from the `assets/<block namespace>/eg_particle_interactions/palettes/blocks/<block id>.json` directory of a resourcepack.

Note that the namespace and filename must match the block that you wish to define the palette for, so for vanilla `oak_planks` the path would be `assets/minecraft/eg_particle_interactions/palettes/blocks/oak_planks.json`.

Much like [particle emitter rules](/rp/particle-emitters), if multiple resourcepacks define a palette override for the same block, the individual entries in `rules` are combined from all packs.

### JSON format

<BlockPaletteOverrideFormat></BlockPaletteOverrideFormat>

## Fluid palette override

These are loaded from the `assets/<fluid namespace>/eg_particle_interactions/palettes/fluids/<fluid id>.json` directory of a resourcepack. These work the exact same way as block palette overrides just for fluids instead.

### JSON format

<FluidPaletteOverrideFormat></FluidPaletteOverrideFormat>

## Palette types

### `static` type

<StaticPaletteTypeFormat></StaticPaletteTypeFormat>

### `texture` type

For this palette type, only pixels with an opacity of `21` or higher are included in the palette. If no valid pixels are present in the texture the palette will default to opqaue white.

<TexturePaletteTypeFormat></TexturePaletteTypeFormat>

## Examples

### Red water particles

This palette override will give water a translucent red palette instead of the default grayscale one

```json
// assets/minecraft/eg_particle_interactions/palettes/fluids/water.json
{
    "default": {
        "type": "static",
        "colours": [
            [255, 0, 255, 127]
        ]
    }
}
```

### Grass block

This palette override will make grass blocks use the top texture for the palette instead of the dirt texture

```json
// assets/minecraft/eg_particle_interactions/palettes/blocks/grass_block.json
{
    "default": {
        "type": "texture",
        "texture": "block/grass_block_top"
    }
}
```
