# Particle definitions

A particle definitions defines a set of components to control the behaviour of a particle, such as the particles lifetime, friction, bounciness, etc.

Particle definitions are loaded from the `assets/<namespace>/eg_particle_interactions/particles/<path>.json` directory of a resourcepack. If two resourcepacks define a particle definition with the same namespace and id, the pack with a higher load order takes priority and does not stack with other packs with a lower load order.

## JSON format

<ParticleDefinitionFormat></ParticleDefinitionFormat>

## Particle components

### `gravity/initial`

The initial particle gravity.

<FloatProviderFormat name=""></FloatProviderFormat>

### `gravity/decay`

How much the gravity should change over time. This value is multiplied with gravity every tick.

<FloatProviderFormat name=""></FloatProviderFormat>

### `lifetime`

Maximum amount of ticks the particle can live for.

<IntProviderFormat name=""></IntProviderFormat>

### `velocity/initial_randomness`

Randomness for the `x`, `y`, and `z` velocity. For each velocity direction, a random number is chosen between the value and negative value of this component, then added to the velocity.

For example, if this component value is set to `[0.2, 0.2, 0.2]`, a random value between `-0.2` and `0.2` is added to each velocity direction.

<Vector3Format compact name=""></Vector3Format>

### `velocity/decay`

How much the velocity should change over time. This value is multiplied with velocity every tick.

<Vector3Format compact name=""></Vector3Format>

### `physics/buoyancy`

How buoyant the particle is in fluids. Positive values make the particle float, negative values make the particle sink. Recommended to keep this value in a `-1` to `1` range (inclusive).

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/collision_size`

How big the particle collision box is in pixels.

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/friction`

How much friction the particle has when moving along the ground.

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/bounciness`

How bouncy the particle is when hitting a surface.

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/bounciness_decay`

::: warning
This component was added in Particle Interactions `v0.10.2`
:::

How much the bounciness should change over time. This value is multiplied with bounciness every time the particle bounces.

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/bypass_collision_check`

If set to true, the particle will freeze when colliding with the ground and lose all physics. If set to false, the particle can continue to move after colliding with the ground.

If this component is not explicitly set, it is set to `true` when `physics/friction` is less than `0.99`, otherwise it's set to `false`.

<FloatProviderFormat name=""></FloatProviderFormat>

### `physics/wind_config`

Config for wind to be applied to the particle.

::: warning
`flow_acceleration` does not allow negative values in Particle Interactions `v0.10.1` or lower. Packs will still load with negative values, however particles won't be affected by negative wind values.
:::

<TreeGroup desc="root">
    <TreeGroup name="swirl" desc="Optional. Makes the particle move in a swirling motion, similar to floating ember particles from the mod, or falling leaves in vanilla.">
        <FloatProviderFormat name="period"></FloatProviderFormat>
        <FloatProviderFormat name="strength"></FloatProviderFormat>
    </TreeGroup>
    <Vector3Format name="flow_acceleration" desc="Optional. A direction to move the particle in, bigger values make the particle reach the maximum speed quicker."></Vector3Format>
    <Vector3Format name="max_flow_speed" desc="Optional, but should be specified if <code>flow_acceleration</code> is. How quickly the particle is allowed to move by the directional wind value defined by <code>flow_acceleration</code>."></Vector3Format>
</TreeGroup>

### `physics/intangible_layers`

Which collision layers the particle can collide with.

<TreeGroup desc="root">
    <TreeField icon="bool" name="terrain" desc="Optional. Whether the particle can collide with terrain"></TreeField>
    <TreeField icon="bool" name="fluids" desc="Optional. Whether the particle can collide with fluids"></TreeField>
</TreeGroup>

### `appearance`

A [particle appearance](/rp/particle-appearances) to use for the particle.

<TreeGroup icon="particle-interactions-id" name="" desc="The id of a particle appearance."></TreeGroup>

### `lifetime_events`

::: warning
This component was removed in Particle Interactions v0.10.2 and replaced with `events`
:::

A list of [lifetime events](/rp/events).

<TreeGroup icon="list" name="" desc="root">
    <EventFormat name="" desc="A lifetime event"></EventFormat>
</TreeGroup>

### `events`

::: warning
This component was added in Particle Interactions v0.10.2
:::

A list of [events](/rp/events).

<TreeGroup icon="list" name="" desc="root">
    <EventFormat name="" desc="An event"></EventFormat>
</TreeGroup>

## Behaviour types

A behaviour type controls certain aspects of a particle that arent currently controlled via components. This mostly includes special particle models that arent the default billboarded quad

| Behaviour id | Description |
|--------------|-------------|
| `simple` | Default behaviour, a billboarded quad particle with all behaviour controlled with components |
| `spark_shape` | Uses a plus shaped model that stretches based on the particle speed. Other than that, this is identical to `simple` |
| `shatter_shape` | Uses a model that looks similar to the vanilla `block` particle but has some gaps to look like a shatter. Also fades out near the end of its lifetime. Billboarding is calculated based on the `facing` blockstate if this particle is created with a block particle context and the block has that property |
