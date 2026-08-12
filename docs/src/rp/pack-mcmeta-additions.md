# Pack.mcmeta additions

::: warning
Pack.mcmeta additions were added in Particle Interactions v0.10.2. Older versions of particle interactions will ignore these fields.
:::

Particle Interactions adds some extra fields to resourcepack overlays. This allows you to make a pack compatible with multiple versions of Particle Interactions in a similar way as you would for vanilla Minecraft.

## JSON format

This format should be specified in a [pack overlay](https://minecraft.wiki/w/Pack.mcmeta#Format) next to other vanilla fields such as `directory`. For the `min` and `max` fields, both formats are identical in functionality. They are just 2 different ways of writing the same thing.

<TreeGroup name="" desc="root">
    <TreeGroup name="eg_particle_interactions">
        <TreeField icon="bool" name="ignore_vanilla_formats" desc="If set to true, the overlay will apply if the current Particle Interactions version is within the specified range. If set to false, the vanilla formats must contain the current game version AND the Particle Interactions version must be within the specified range."></TreeField>
        <TreeGroup name="version" desc="A range of Particle Interactions versions to test for">
            <TreeField icon="list" name="min" desc="[html]Minimum version (inclusive), list format. A list of exactly 3 intergers representing a major, minor, and patch version. <code>0.10.2</code> can be represented as <code>[0, 10, 2]</code>"></TreeField>
            <TreeGroup icon="object" name="min" desc='[html]Minimum version (inclusive), object format. <code>0.10.2</code> can be represented as <code>{"major": 0, "minor": 10, "patch: 2"}</code>'>
                <TreeField icon="int" name="major" desc="Major version section."></TreeField>
                <TreeField icon="int" name="minor" desc="Minor version section."></TreeField>
                <TreeField icon="int" name="patch" desc="Patch version section."></TreeField>
            </TreeGroup>
            <TreeField icon="list" name="max" desc='[html]Maximum version (inclusive), list format. A list of exactly 3 entries representing a major, minor, and patch version. Each entry can be either an integer or <code>*</code> wildcard. <code>0.10.x</code> can be represented as <code>[0, 10, "*"]</code>'></TreeField>
            <TreeGroup icon="object" name="max" desc='[html]Maximum version (inclusive), object format. <code>0.10.x</code> can be represented as <code>{"major": 0, "minor": 10, "patch: "*""}</code>'>
                <TreeField icon="int|string" name="major" desc="[html]Major version section. <code>*</code> can be used as a wildcard"></TreeField>
                <TreeField icon="int|string" name="minor" desc="[html]Minor version section. <code>*</code> can be used as a wildcard"></TreeField>
                <TreeField icon="int|string" name="patch" desc="[html]Patch version section. <code>*</code> can be used as a wildcard"></TreeField>
            </TreeGroup>
        </TreeGroup>
    </TreeGroup>
</TreeGroup>

## Examples

### Example 1

An overlay which only applies to Particle Interactions `0.10.5` on Minecraft 26.2

```json
{
    "pack": {
		"min_format": 84,
		"max_format": 88,
        "description": "My cool pack"
    },
	"overlays": {
		"entries": [
			{
				"eg_particle_interactions": {
					"version": {
						"min": [0, 10, 5],
						"max": [0, 10, 5],
					},
					"ignore_vanilla_formats": false
				},
				"min_format": 88,
				"max_format": 88,
				"directory": "mc_26.2_pi_0.10.5_overlay"
			}
		]
	}
}
```

### Example 2

An overlay which applies to Particle Interactions `0.10.2` or higher on any Minecraft version, only if Particle Interactions is installed

```json
{
    "pack": {
		"min_format": 84,
		"max_format": 88,
        "description": "My cool pack"
    },
	"overlays": {
		"entries": [
			{
				"eg_particle_interactions": {
					"version": {
						"min": [0, 10, 2],
						"max": ["*", "*", "*"],
					},
					"ignore_vanilla_formats": true
				},
				"min_format": 2147483647,
				"max_format": 2147483647,
				"directory": "pi_0.10.2_overlay"
			}
		]
	}
}
```


