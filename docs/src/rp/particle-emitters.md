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

::: info
List of condition types soon
:::

## Emitter types

::: info
List of emitter types soon
:::