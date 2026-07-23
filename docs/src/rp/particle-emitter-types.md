# List of particle emitter types

## Emitter types

### `particle_interactions` type

Emits a [particle definition](/rp/particle-definitions)

<ParticleInteractionsEmitterType name="" desc="fields"></ParticleInteractionsEmitterType>

### `vanilla` type

Emits a particle from the vanilla `particle_types` registry. This includes all vanilla particles and most particles from other mods

<VanillaEmitterType name="" desc="fields"></VanillaEmitterType>

### `special_particle` type

Emits a [special particle type](#special-particle-types). These are used for emitting multiple particles over time, or for spawning specific vanilla particles with data from the particle context that the emitter is being used in.

<SpecialParticleEmitterType name="" desc="fields"></SpecialParticleEmitterType>

### `empty` type

Doens't emit any particles. Has no additional fields.

### `random` type

Uses a weight-based random to choose a random emitter type to use.

<RandomEmitterType name="" desc="fields"></RandomEmitterType>

## Special particle types

To be used with the `special_particle` emitter type

::: info
List of special particle types WIP
:::