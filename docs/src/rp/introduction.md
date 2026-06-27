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

### Particle override

A file located at `assets/<namespace>/eg_particle_interactions/particle_overrides/<path>.json` in a resourcepack. A particle override defines a set of [particle emitter rules](#particle-emitter-rules) for various [particle origins](#particle-origin).

### Override rule

A file located at `assets/<namespace>/eg_particle_interactions/override_rules/<object_type>/<path>.json` in a resourcepack, which defines what objects a particle override should be applied to. For example `assets/my_cool_pack/eg_particle_interactions/override_rules/blocks/sparkles_override.json` would define which blocks the particle override `my_cool_pack:sparkles_override` should apply to.

### Particle emitter rule

A file located at `assets/<namespace>/eg_particle_interactions/emitter_rules/<path>.json` in a resourcepack which contains rules about which [particle emitter](#particle-emitter) to use in a given context, as well as a fallback particle emitter which is used when no rules pass. These can often be inlined directly in files or be referenced by id in other files.

### Particle emitter

An object that defines a particle to emit with an optional velocity multiplier and position offset. Particle emitters can emit a resourcepack-driven particle from any resourcepack or a particle from the vanilla particle_types registry.

### Particle origin

A place where a particle is being spawned from, for example `block/broken` if the particle is coming from a block being broken.

### Object list

A file located at `assets/<namespace>/eg_particle_interactions/lists/<object_type>/<path>.json` in a resourcepack which contain a list of blocks, fluids, biomes, or entity types. These can be referenced within other files and function in a similar way to tags in vanilla datapacks; that being that the contents are combined from multiple resourcepacks if both of them add entries to the same list.

### Particle definition

A file located at `assets/<namespace>/eg_particle_interactions/particles/<path>.json` in a resourcepack which contains a set of components to control the behaviour of a particle.

### Particle appearance

A file located at `assets/<namespace>/eg_particle_interactions/appearances/<path>.json` in a resourcepack which controls the visual appearance of a particle, such as its texture, light emission, scale, etc.

### Particle Interactions identifier

A version of vanilla Minecraft [Identifiers](https://minecraft.wiki/w/Identifier), however if no namespace is specified it will default to `eg_particle_interactions` instead of `minecraft`.

For example, `some_id` will resolve to `eg_particle_interactions:some_id` instead of `minecraft:some_id` like it would for a normal identifier. You can of course still specify the namespace manually like a normal identifier, `my_namespace:some_id` resolves to `my_namespace:some_id` as usual.
