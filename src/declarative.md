# Declarative Package Management

Soar supports declarative package management, allowing you to define your desired packages in a configuration file and apply them in one command. This is useful for maintaining consistent environments across machines or quickly setting up a new system.

## Configuration File

Create a `packages.toml` file at `~/.config/soar/packages.toml` (the same directory as your Soar configuration).

You can generate a template with examples using:

```sh
soar defpackages
```

## Package Format

The `packages.toml` file supports several formats for specifying packages:

```toml
# Latest version
package_name = "*"

# Specific version (pinned)
package_name = "1.2.3"

# Using table format
package_name = { version = "1.2" }

# With pkg_id and repository
package_name = { pkg_id = "pkg-bin", repo = "bincache" }

# Pinned with portable configuration
package_name = { pinned = true, portable = { home = "~/.pkg", config = "~/.pkg/config" } }

# Install from URL
package_name = { url = "https://example.com/my/test-1.0.0.appimage" }
```

### Format Options

| Option | Description |
|--------|-------------|
| `"*"` | Install the latest version |
| `"version"` | Pin to a specific version |
| `pkg_id` | Specify the package variant/family |
| `repo` | Install from a specific repository |
| `pinned` | Prevent automatic updates |
| `portable` | Configure portable mode with custom directories (`home`, `config`, `cache`, `share`). Only applies to AppImages, FlatImages, RunImages, and Wrappe packages. |
| `url` | Install directly from a URL |

## Applying Packages

To install all packages defined in your `packages.toml`:

```sh
soar apply
```

### Pruning Unlisted Packages

To also remove packages that are not listed in your `packages.toml`:

```sh
soar apply --prune
```

<div class="warning">
    <strong>Warning:</strong> The <code>--prune</code> flag will remove any installed packages not defined in your <code>packages.toml</code>. Make sure your configuration includes all packages you want to keep.
</div>

## Example Configuration

Here's a complete example `packages.toml`:

```toml
# Essential tools - latest versions
bat = "*"
ripgrep = "*"
fd = "*"

# Pin specific versions for stability
soar = "0.5.2"

# Use specific repository
7z = { repo = "bincache" }

# Portable AppImage with custom directories
obsidian = { portable = { home = "~/.obsidian-data", config = "~/.obsidian-data/config" } }

# From external URL
mytool = { url = "https://example.com/releases/mytool-1.0.0.appimage" }
```
