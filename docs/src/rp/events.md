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
    <FloatRangeFormat name="lifetime_percentage_range" desc="Optional. If specified, the particle lifetime percentage must be within this range for the trigger to have a chance of firing."></FloatRangeFormat>
</TreeGroup>

## Appearance action types

### `set_appearance` type

Changes the [particle appearance](/rp/particle-appearances) to something else.

<TreeGroup name="" desc="fields">
    <TreeField icon="particle-interactions-id" name="appearance" desc="[html]The id of a particle appearance to set for the particle when the action runs."></TreeField>
</TreeGroup>

### `modify_scale` type

Modifies the particle scale with math operations.

<FloatMathModifierFormat name="" desc="fields"></FloatMathModifierFormat>

### `modify_model_offset` type

Modifies the particle model offset with math operations.

<Vector3MathModifierFormat name="" desc="fields"></Vector3MathModifierFormat>

### `set_model_offset` type

Set the particle model offset.

<TreeGroup name="" desc="fields">
    <Vector3Format name="value" desc=""></Vector3Format>
</TreeGroup>

### `modify_light_emission` type

Modifies the particle light emission with math operations.

<IntMathModifierFormat name="" desc="fields"></IntMathModifierFormat>

### `age_based_scale` type

Sets the particle scale based on its age. If the particle is within the lifetime percentage range specified, a value is calculated from 1 to 0 based on how far along the range it is, called the 'age based value'. This age based value is then multiplied with the `multiplier` and initial scale value if `use_initial_value` is specified.

For a particle with lifetime `100`, age of `75`, initial scale of `1`, `multiplier` of `2`, and `lifetime_percentage_range` of `[0.5, 1]`. The lifetime percentage is calculated as `75/100` = `0.75`; `0.75` is half way between `0.5` and `1` so the age based value works out to be `0.5`. Finally, `0.5` is multiplied by the `multiplier` of `2` to get the final scale, `0.5 * 2 = 1`.

<TreeGroup name="" desc="fields">
    <TreeField name="multiplier" icon="float" desc="[html]Optional, defaults to <code>1</code>."></TreeField>
    <TreeField name="use_initial_value" icon="bool" desc="[html]Optional, defaults to <code>true</code>. If true, also uses the scale value from the particle appearance as a multiplier."></TreeField>
    <FloatRangeFormat name="lifetime_percentage_range"></FloatRangeFormat>
</TreeGroup>

### `age_based_light_emission` type

Sets the particle light emission based on its age. This works in the same way as the [`age_based_scale` type](/rp/events#age-based-scale-type).

<TreeGroup name="" desc="fields">
    <TreeField name="multiplier" icon="float" desc="[html]Optional, defaults to <code>1</code>."></TreeField>
    <TreeField name="use_initial_value" icon="bool" desc="[html]Optional, defaults to <code>true</code>. If true, also uses the scale value from the particle appearance as a multiplier."></TreeField>
    <FloatRangeFormat name="lifetime_percentage_range"></FloatRangeFormat>
</TreeGroup>

### `age_based_alpha` type

Sets the particle opacity based on its age. This works in the same way as the [`age_based_scale` type](/rp/events#age-based-scale-type).

<TreeGroup name="" desc="fields">
    <TreeField name="multiplier" icon="float" desc="[html]Optional, defaults to <code>1</code>."></TreeField>
    <TreeField name="use_initial_value" icon="bool" desc="[html]Optional, defaults to <code>true</code>. If true, also uses the scale value from the particle appearance as a multiplier."></TreeField>
    <FloatRangeFormat name="lifetime_percentage_range"></FloatRangeFormat>
</TreeGroup>

### `set_uv` type

Sets the particle uv.

<TreeGroup name="" desc="fields">
    <UVProviderFormat name="uv" desc="A uv provider"></UVProviderFormat>
</TreeGroup>


## Lifetime action types

### `modify_gravity` type

Modifies the particle gravity with math operations.

<FloatMathModifierFormat name="" desc="fields"></FloatMathModifierFormat>

### `modify_velocity` type

Modifies the particle velocity with math operations.

<Vector3MathModifierFormat name="" desc="fields"></Vector3MathModifierFormat>

### `modify_lifetime` type

Modifies the particle lifetime with math operations.

<IntMathModifierFormat name="" desc="fields"></IntMathModifierFormat>

### `spawn_particle` type

Spawns a particle relative to the particles' current position.

<TreeGroup name="" desc="fields">
    <ParticleEmitterFormat name="emitter" desc="An emitter."></ParticleEmitterFormat>
    <TreeGroup name="velocity_provider" desc="A velocity provider.">
        <TreeField icon="string" name="type" desc="[html]Optional, defaults to <code>static</code>. The type of velocity emitter. Can be one of the following: <code>static</code> or <code>relative</code>."></TreeField>
        <Vector3Format name="value" desc="If <code>type</code> is set to <code>static</code>, this value is used directly as the particle velocity. If <code>type</code> is set to <code>relative</code>, this value is multiplied by the velocity of the original particle."></Vector3Format>
    </TreeGroup>
    <Vector3Format name="pos_offset" desc="Optional. Offsets the position the particle is emitted from."></Vector3Format>
</TreeGroup>

### `kill` type

Removes the particle. Has no additional fields.
