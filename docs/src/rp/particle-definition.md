# Particle definition

A particle definition defines a set of components to control the behaviour of a particle, such as the particles lifetime, friction, bounciness, etc.

Particle definitions are loaded from the `assets/<namespace>/eg_particle_interactions/particles/<path>.json` directory of a resourcepack. If two resourcepacks define a particle definition with the same namespace and id, the pack with a higher load order takes priority and does not stack with other packs with a lower load order.

## JSON format

<ParticleDefinitionFormat></ParticleDefinitionFormat>

## Particle components

::: info
List of particle components soon
:::

## Behaviour types

A behaviour type controls certain aspects of a particle that arent currently controlled via components. This mostly includes special particle models that arent the default billboarded quad

| Behaviour id | Description |
|--------------|-------------|
| `simple` | Default behaviour, a billboarded quad particle with all behaviour controlled with components |
| `spark_shape` | Uses a plus shaped model that stretches based on the particle speed. Other than that, this is identical to `simple` |
| `shatter_shape` | Uses a model that looks similar to the vanilla `block` particle but has some gaps to look like a shatter. Also fades out near the end of its lifetime. Billboarding is calculated based on the `facing` blockstate if this particle is created with a block particle context and the block has that property |
