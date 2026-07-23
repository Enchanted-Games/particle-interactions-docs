# Events

::: warning
Events docs WIP
:::

Events can react to certain things a particle does and change something about the particle, such as its size or appearance. Events can be defined in two different places:
- In a [particle appearance](/rp/particle-appearances)
- In the [`lifetime_events` component](/rp/particle-definitions#particle-components)

Events in both of these places can use all trigger types. However, lifetime action types are only valid in a particle definition; likewise for appearance action types and particle appearances.

## Event trigger types

### `tick` type

Triggers every tick, does not have any additional fields.

### `on_ground` type

Triggers when the particle is on the ground.

<TreeGroup name="" desc="fields">
    <TreeField icon="bool" name="oneshot" desc="[html]Optional, defaults to <code>true</code>. If set to true, triggers once when the particle lands. If set to false, triggers every tick while the particle is on the ground."></TreeField>
</TreeGroup>

### `in_air` type

Triggers when the particle is not the ground.

<TreeGroup name="" desc="fields">
    <TreeField icon="bool" name="oneshot" desc="[html]Optional, defaults to <code>true</code>. If set to true, triggers once on the first tick when the particle is not on the ground. If set to false, triggers every tick while the particle is not on the ground."></TreeField>
</TreeGroup>

### `on_bounce` type

Triggers when the particle bounces. Only triggers if the particle has a bounciness value larger than `0` set in the `physics/bounciness` component. Does not have any additional fields.

### `on_spawn` type

Triggers on the first tick of the particle existing. Does not have any additional fields.

### `in_fluid` type

Triggers when the particle is in a fluid.

<TreeGroup name="" desc="fields">
    <TreeField icon="bool" name="oneshot" desc="Optional, defaults to true. If set to true, triggers once on the first tick when the particle enters a fluid. If set to false, triggers every tick while the particle is in a fluid."></TreeField>
    <TreeField icon="int" name="minimum_particle_age" desc="[html]Optional, defaults to <code>0</code>. If the particle age is less than this value, this trigger won't fire."></TreeField>
    <FluidPredicateFormat name="fluid_predicate" desc="Optional. If specified, the trigger will only fire if the predicate passes against the fluid."></FluidPredicateFormat>
</TreeGroup>

### `exited_fluid` type

Triggers once when the particle exits a fluid.

<TreeGroup name="" desc="fields">
    <FluidPredicateFormat name="fluid_predicate" desc="Optional. If specified, the trigger will only fire if the predicate passes against the fluid."></FluidPredicateFormat>
</TreeGroup>

### `after_ticks` type

Triggers after the particle has existed for a certain number of ticks.

<TreeGroup name="" desc="fields">
    <TreeField icon="bool" name="oneshot" desc="Optional, defaults to true. If set to true, triggers once. If set to false, triggers every tick after the particle has existed for the specified amount of ticks."></TreeField>
    <TreeField icon="int" name="ticks" desc="The amount of ticks the particle must have existed for."></TreeField>
</TreeGroup>

### `after_lifetime_percent` type

Triggers after the particle has existed for a certain percentage of its lifetime. For example, if the particle has a lifetime of `100` ticks and has existed for `50` ticks, the particle has existed for `50%` of its lifetime.

<TreeGroup name="" desc="fields">
    <TreeField icon="bool" name="oneshot" desc="Optional, defaults to true. If set to true, triggers once when the particle has existed for the specified lifetime percentage. If set to false, triggers every tick after the particle has existed for the specified lifetime percentage."></TreeField>
    <TreeField icon="float" name="lifetime_percentage" desc="[html]The lifetime percentage between <code>0</code> and <code>1</code> (inclusive). For example, <code>0.25</code> means <code>25%</code> of the particle lifetime."></TreeField>
</TreeGroup>

### `random_chance` type

Has a random chance to trigger every tick, optionally within a certain lifetime percentage range.

<TreeGroup name="" desc="fields">
    <TreeField icon="float" name="chance" desc="[html]A value between <code>0</code> and <code>1</code>. How often this trigger can fire. Setting this to <code>1</code> makes it fire every tick, whereas setting this to <code>0</code> makes it extremely unlikely to fire."></TreeField>
    <FloatRangeFormat name="lifetime_percentage_range" desc="Optional. If specified, the particle lifetime percentage must be within this range."></FloatRangeFormat>
</TreeGroup>

## Appearance action types

## Lifetime action types