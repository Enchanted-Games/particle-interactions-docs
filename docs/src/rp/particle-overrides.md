# Particle overrides

Particle overrides define a set of [particle emitter rules](/rp/particle-emitters#emitter-rules) for [particle origins](#particle-origins). Currently, these are used to define custom particles for various block and fluid interactions, this may be expanded upon in the future.

Particle overrides are loaded from the `assets/<namespace>/eg_particle_interactions/particle_overrides/<path>.json` directory of a resourcepack, the id is based on what the file is called and tha namespace it is placed in. For example `assets/my_cool_pack/eg_particle_interactions/particle_overrides/sparkles_override.json` will resolve to `my_cool_pack:sparkles_override`.

## Particle override JSON format

<TreeGroup name="root">
    <TreeGroup name="emitters" desc="A map of particle origin to a particle emitter rule">
        <TreeField 
            icon="emitter-rule|particle-interactions-id"
            name="<particle origin>"
            desc="The particle emitter rule to use for this origin. Can be either a particle interactions identifier pointing to an emitter rule file, or an inline emitter rule"
        />
    </TreeGroup>
</TreeGroup>

### List of particle origins

| Origin id | Usecase |
|-----------|---------|
| `default` | Shorthand that includes every other particle origin |
| `block/placed` | A block has been placed |
| `block/broken` | A block has been broken |
| `block/brushed` | A block has been brushed with a brush |
| `block/stripped` | A block has been stripped with an axe |
| `block/tilled` | A block has been tilled with a hoe |
| `block/flattened` | A block has been flattened with a shovel (eg: dirt -> path block) |
| `block/crack` | A block is being mined |
| `block/falling_block_landed` | A falling block has landed |
| `block/falling_block_falling` | A falling block is falling |
| `block/falling_block_unstable` | A falling block is above air or a non-full block |
| `block/redstone_interacted_with` | A repeater, comparator, or redstone dust has been interacted with |
| `block/walked_through` | A player has walked throuh a block |
| `block/sprinted_on` | An entity is sprinting on a block |
| `block/mace_smash` | An entity has been hit by a mace and block particles are spawned |
| `block/sulfur_cube_consumed` | A player has given a sulfur cube a block |
| `block/generic` | Any other instances of the vanilla `block` or `block_crumble` particle not covered by another origin |
| `fluid/placed` | A fluid has been placed |
| `fluid/water/entity_entered` | An entity has entered water (replaced the vanilla `splash` particles) |
| `fluid/water/entity_entered_bubbles` | An entity has entered water (replaced the vanilla `bubble` particles) |

### Examples

This override will use the `my_cool_pack:sparkles-emitter` emitter rule for all particle origins, and will emit the vanilla `splash` particle for the `block/broken` origin.

```json
// assets/my_cool_pack/eg_particle_interactions/particle_overrides/sparkles-override.json
{
    "emitters": {
        "default": "my_cool_pack:sparkles-emitter",
        "block/broken": {
            "type": "vanilla",
            "particle": {
                "type": "splash"
            }
        }
    }
}
```

## Override rules

On its own, a particle override will not do anything. We need to tell it what objects to apply to with an override rule file.

Override rules are loaded from the `assets/<namespace>/eg_particle_interactions/override_rules/<object_type>/<path>.json` directory of a resourcepack and should have the same namespace and path as the override you wish to target. For example, to target the `my_cool_pack:sparkles_override` from the above example, the override rule would go at `assets/my_cool_pack/eg_particle_interactions/override_rules/<object_type>/sparkles_override.json`

As for the `<object_type>` subfolder, this can be either `blocks` or `fluids` to apply the particle override to a block or fluid respectively. 

::: info
Note: the same particle override can be applied to a fluid _and_ a block if you wish! Additionally multiple particle overrides can be applied to the same block or fluid, in this case a random override is chosen for each particle using a weighted random.
:::

### Multiple resourcepacks

When multiple resourcepacks define an override rule for the same particle override, they stack. This happens in a specific order:

1. All entries in `weights` are combined
2. All entries in `exclusions` are combined
3. Exclusions are calculated using the combined list

In practise, this means a pack below yours could define an exclusion for the same particle override as you and it would still apply

### JSON format for `blocks` subfolder

<TreeGroup name="root">
    <TreeGroup name="weights" desc="A map of particle origin to block predicates and weights">
        <TreeGroup icon="list" name="<particle origin>">
            <TreeGroup icon="object" desc="weight and predicate">
                <TreeField icon="int" name="weight" desc="(Optional, default 1)"></TreeField>
                <TreeField
                    icon="block-predicate|list"
                    name="block_predicate"
                    desc="A single block predicate or list of block predicates. If a list is defined here at least one predicate must pass to apply the override"
                />
            </TreeGroup>
        </TreeGroup>
    </TreeGroup>
    <TreeGroup name="exclusions" desc="A map of particle origin to block predicate">
        <TreeGroup icon="list" name="<particle origin>" desc="If any predicate passes the override is excluded applying to the matching blocks">
            <TreeField
                icon="block-predicate"
                desc="A block predicate"
            />
        </TreeGroup>
    </TreeGroup>
</TreeGroup>

### JSON format for `fluids` subfolder

<TreeGroup name="root">
    <TreeGroup name="weights" desc="A map of particle origin to fluid predicates and weights">
        <TreeGroup icon="list" name="<particle origin>">
            <TreeGroup icon="object" desc="weight and predicate">
                <TreeField icon="int" name="weight" desc="(Optional, default 1)"></TreeField>
                <TreeField
                    icon="fluid-predicate|list"
                    name="fluid_predicate"
                    desc="A single fluid predicate or list of fluid predicates. If a list is defined here at least one predicate must pass to apply the override"
                />
            </TreeGroup>
        </TreeGroup>
    </TreeGroup>
    <TreeGroup name="exclusions" desc="A map of particle origin to fluid predicate">
        <TreeGroup icon="list" name="<particle origin>" desc="If any predicate passes the override is excluded applying to the matching fluids">
            <TreeField
                icon="fluid-predicate"
                desc="A fluid predicate"
            />
        </TreeGroup>
    </TreeGroup>
</TreeGroup>

### Examples

This override rule will apply the `my_cool_pack:sparkles_override` override to glowstone and redstone blocks

```json
// assets/my_cool_pack/eg_particle_interactions/override_rules/blocks/sparkles_override.json
{
    "weights": {
        "default": [
            {
                "weight": 1,
                "block_predicate": {
                    "type": "list",
                    "blocks": ["glowstone", "redstone_block"]
                }
            }
        ]
    }
}
```

This override rule will exclude the `my_cool_pack:sparkles_override` override from applying to any fluid in the `#water` tag

```json
// assets/my_cool_pack/eg_particle_interactions/override_rules/fluids/sparkles_override.json
{
    "exclusions": {
        "default": [
            {
                "type": "list",
                "fluids": ["#water"]
            }
        ]
    }
}
```