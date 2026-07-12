# Intro to resourcepacks

This section of the documentation covers how the mod can be customised with resourcepacks and how you can add your own particles for blocks and fluids.

## Prerequisites

Before starting it is expected that you have a basic understanding of JSON files and file management as you will be using these skills to make a resourcepack for the mod.

### Minecraft concepts

It also helps to have an understanding of some Minecraft specific concepts such as the [basic structure of a resourcepack](https://minecraft.wiki/w/Resource_pack), [identifiers](https://minecraft.wiki/w/Identifier), and [namespaces](https://minecraft.wiki/w/Identifier#Namespaces) in a resourcepack.

### Text editor

You can use any text editor of your choice, preferrably one with JSON support. I personally use VSCode but the choice is yours.

## Terminology

A quick explanation of some terminology which will be used throughout these docs. Most of these have dedicated pages which go into more detail about how they work, this is section just serves as a brief guide.

### [Particle override](/rp/particle-overrides)

A particle override defines a set of [particle emitter rules](#particle-emitter-rules) for various [particle origins](#particle-origin). These are used for specifying custom particles for specific blocks as an example.

### [Override rule](/rp/particle-overrides#override-rules)

Override rules defines what objects a particle override should be applied to.

### [Particle origin](/rp/particle-origins)

A place where a particle is being spawned from, for example `block/broken` if the particle is coming from a block being broken.

### [Particle emitter rule](/rp/particle-emitters)

A particle emitter rule contains rules about which [particle emitter type](#particle-emitter-type) to use in a given context, as well as a fallback particle emitter which is used when no rules pass. These can often be inlined directly in files or be referenced by id in other files.

### [Particle emitter type](/rp/particle-emitters#emitter-types)

An object that defines a particle to emit with an optional velocity multiplier and position offset. Particle emitter types can emit a resourcepack-driven particle from any resourcepack or a particle from the vanilla particle_types registry.

### [Object list](/rp/object-lists)

Contains a list of blocks, fluids, biomes, or entity types. These can be referenced within other files and function in a similar way to tags in vanilla datapacks; that being that the contents are combined from multiple resourcepacks if both of them add entries to the same list.

### [Object predicates](/rp/object-predicates)

An object that defines tests against certain objects, such as blocks, fluids, biomes, or entity types.

### [Particle definition](/rp/particle-definitions)

A particle definition contains a set of components to control the behaviour of a particle.

### [Particle appearance](/rp/particle-appearances)

A particle appearance controls the visual appearance of a particle, such as its texture, light emission, scale, etc.

### [Palette override](/rp/palette-overrides)

A palette override defines a custom set of particle colours for block and fluid states.

### Particle Interactions identifier

A version of vanilla Minecraft [Identifiers](https://minecraft.wiki/w/Identifier), however if no namespace is specified it will default to `eg_particle_interactions` instead of `minecraft`.

For example, `some_id` will resolve to `eg_particle_interactions:some_id` instead of `minecraft:some_id` like it would for a normal identifier. You can of course still specify the namespace manually like a normal identifier, `my_namespace:some_id` resolves to `my_namespace:some_id` as usual.

### Particle context

You don't interact with particle contexts directly, however you can perform checks against them using, for example, [object predicates](#object-predicates). [Particle appearances](#particle-appearance) can also base colours and textures on this depending on what the context is.

A particle context can be one of the following:
- 'Plain': contains no object
- 'Block': contains a blockstate and block position
- 'Fluid': contains a fluidstate and block position
- 'Entity': contains an entity type id
