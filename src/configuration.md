# Configuration

Soar offers flexible configuration options to customize its behavior according to your needs. This section explains how to configure Soar and details all available configuration options.

## Configuration File

Soar uses a configuration file located at `~/.config/soar/config.json`. If this file doesn't exist, Soar will create one with default settings on first run.



## Configuration Options

### Global Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `soar_path` | String | `~/.soar` | Directory where Soar stores package data |
| `parallel` | Boolean | `true` | Enable/disable parallel downloads |
| `parallel_limit` | Integer | `2` | Maximum number of concurrent downloads |

### Repository Configuration

Each repository in the `repositories` array can be configured with the following options:

| Option | Type | Description |
|--------|------|-------------|
| `name` | String | Repository identifier |
| `url` | String | Base URL of the repository |
| `metadata` | String (Optional) | Custom metadata file name |
| `sources` | Object | Collection-specific download sources (used to fetch default icons) |

## Example Configurations

### Default Configuration

```json
{
    "soar_path": "$HOME/.soar",
    "parallel": true,
    "parallel_limit": 2,
    "repositories": [
        {
            "name": "ajam",
            "url": "https://bin.ajam.dev/x86_64",
            "metadata": "METADATA.AIO.json",
            "sources": {
                "bin": "https://bin.ajam.dev/x86_64",
                "pkg": "https://pkg.ajam.dev/x86_64",
                "base": "https://bin.ajam.dev/x86_64/Baseutils"
            }
        }
    ]
}
```

<div class="warning">
    <strong>Note:</strong> Changes to the configuration file take effect immediately for new operations.
</div>

## Validation

Soar automatically validates your configuration file when loading it. If there are any issues, it will display helpful error messages indicating what needs to be corrected.

Common validation checks include:
- Valid URLs for repositories
- Unique repository names
- Valid parallel_limit values (must be positive)
- Accessible soar_path directory

## Troubleshooting

### Common Configuration Issues

1. **Invalid JSON Syntax**
   - Missing or extra commas
   - Unclosed brackets or braces
   - Missing quotation marks around strings

2. **Invalid Repository URL**
   - Ensure URLs are properly formatted and accessible
   - Check for trailing slashes in URLs

3. **Permission Issues**
   - Verify write permissions for soar_path
   - Check file permissions for the config file

4. **Duplicate Repository Names**
   - Ensure each repository has a unique name
   - Check for case-sensitive duplicates
