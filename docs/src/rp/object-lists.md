# Object lists

Object lists are loaded from the `assets/<namespace>/eg_particle_interactions/lists/<object_type>/<path>.json` directory in a resourcepack. They contain a list of blocks, fluids, biomes, or entity types. These can be referenced within other files and function in a similar way to tags in vanilla datapacks; that being that the contents are combined from multiple resourcepacks if both of them add entries to the same list.

## Block list

Loaded from the `assets/<namespace>/eg_particle_interactions/lists/blocks/<path>.json` directory

<BlockListFormat :compact="false"></BlockListFormat>

## Fluid list

Loaded from the `assets/<namespace>/eg_particle_interactions/lists/fluids/<path>.json` directory

<FluidListFormat :compact="false"></FluidListFormat>

## Biome list

<BiomeListFormat :compact="false"></BiomeListFormat>

## Entity type list