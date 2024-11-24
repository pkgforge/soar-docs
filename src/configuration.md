# Configuration

Soar offers flexible configuration options to customize its behavior according to your needs. This section explains how to configure Soar and details all available configuration options.

## Configuration File

Soar uses a configuration file located at `~/.config/soar/config.json`. If this file doesn't exist, Soar will use the defaults.

## Configuration Options

### Global Settings

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `soar_root` | String | `~/.local/share/soar` | Directory where Soar stores it's data |
| `soar_cache` | String | `~/.local/share/soar/cache` | Directory where Soar stores cache |
| `soar_bin` | String | `~/.local/share/soar/bin` | Directory where Soar stores binary symlinks |
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
    "soar_root": "~/.local/share/soar",
    "soar_cache": "~/.local/share/soar/cache",
    "soar_bin": "~/.local/share/soar/bin",
    "parallel": true,
    "parallel_limit": 2,
    "repositories": [
        {
            "name": "pkgforge",
            "url": "https://bin.pkgforge.dev/x86_64",
            "metadata": "METADATA.AIO.json",
            "sources": {
                "bin": "https://bin.pkgforge.dev/x86_64",
                "base": "https://bin.pkgforge.dev/x86_64/Baseutils",
                "pkg": "https://pkg.pkgforge.dev/x86_64"
            }
        }
    ]
}
```

## Validation

Soar automatically validates your configuration file when loading it. If there are any issues, it will display helpful error messages indicating what needs to be corrected.

Common validation checks include:
- Valid URLs for repositories
- Unique repository names
- Valid parallel_limit values (must be positive)
- Accessible soar_root (and other) directory

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
   - Verify write permissions for soar_root (and other paths)
   - Check file permissions for the config file

4. **Duplicate Repository Names**
   - Ensure each repository has a unique name
   - Check for case-sensitive duplicates
