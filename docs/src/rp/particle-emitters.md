# Particle emitter rules

Particle emitter rules contain rules about which [particle emitter type](#emitter-types) to use in a given particle context, as well as a fallback particle emitter which is used when no rules pass.

Particle emitter rules are loaded from the `assets/<namespace>/eg_particle_interactions/emitter_rules/<path>.json` directory of a resourcepack. If multiple resourcepacks define an emitter rule file with the same namespace and path, the individual entries in `rules` are combined from all packs.

## JSON format

<ParticleEmitterRuleFormat />

### Examples

This emitter rule will spawn the `my_cool_pack:sparkle` particle by default. If it is being used in a block context, and the block is in the `my_cool_pack:soul_sparkles` [block list](/rp/object-lists#block-list), it will spawn the same particle but with the appearance `my_cool_pack:soul_sparkle` instead.

```json
// assets/my_cool_pack/eg_particle_interactions/emitter_rules/sparkles-emitter.json
{
    "rules": [
        {
            "conditions": [
                {
                    "type": "block",
                    "predicate": {
                        "type": "list",
                        "blocks": "my_cool_pack:soul_sparkles"
                    }
                }
            ],
            "emitter": {
                "type": "particle_interactions",
                "particle": "my_cool_pack:sparkle",
                "components": {
                    "appearance": "my_cool_pack:soul_sparkle"
                }
            }
        }
    ],
    "fallback_emitter": {
        "type": "particle_interactions",
        "particle": "my_cool_pack:sparkle"
    }
}
```

## Condition types

### `block` type

Tests the current block against a block state predicate if the emitter rule is being used in a block context. Always fails if not a block context.

<BlockConditionTypeFormat name="" desc="fields"></BlockConditionTypeFormat>

### `fluid` type

Tests the current fluid against a fluid state predicate if the emitter rule is being used in a fluid context. Always fails if not a fluid context.

<FluidConditionTypeFormat name="" desc="fields"></FluidConditionTypeFormat>

### `biome` type

Tests the biome at the emitter position against a biome predicate.

<BiomeConditionTypeFormat name="" desc="fields"></BiomeConditionTypeFormat>

### `entity` type

Tests the current entity type against an entity type predicate if the emitter rule is being used in an entity context. Always fails if not an entity context.

<EntityConditionTypeFormat name="" desc="fields"></EntityConditionTypeFormat>

### `light_level` type

Tests the current [sky](https://minecraft.wiki/w/Light#Sky_light) and [block](https://minecraft.wiki/w/Light#Block_light) light values as displayed in the F3 debug overlay.

<LightLevelConditionTypeFormat name="" desc="fields"></LightLevelConditionTypeFormat>

### `raw_light` type

Tests the [raw light value](https://minecraft.wiki/w/Light#Internal_sky_light) at the emitter position.

<RawLightConditionTypeFormat name="" desc="fields"></RawLightConditionTypeFormat>

### `logic/and` type

Passes if all sub-conditions pass.

<AndLogicConditionTypeFormat name="" desc="fields"></AndLogicConditionTypeFormat>

### `logic/or` type

Passes if at least one of the sub-conditions pass.

<OrLogicConditionTypeFormat name="" desc="fields"></OrLogicConditionTypeFormat>

### `logic/not` type

Inverts the result of a condition. For example if the sub-condition passes then this condition will fail, and vice versa.

<NotLogicConditionTypeFormat name="" desc="fields"></NotLogicConditionTypeFormat>
