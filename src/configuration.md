# Configuration

Soar offers flexible configuration options to customize its behavior according to your needs. This section explains how to configure Soar and details all available configuration options.

## Configuration File

Soar uses a configuration file located at `~/.config/soar/config.toml`. If this file doesn't exist, Soar will use the defaults.

## Configuration Options

Soar's configuration is structured into several key areas: application-wide settings, profiles, and repositories.

### Default Configuration

```toml
# The name of the default profile to use.
default_profile = "default"
# Path to the local cache directory.
# Default: $XDG_DATA_HOME/soar/cache
cache_path = "~/.local/share/soar/cache"
# Path where the Soar package database is stored.
# Default: $XDG_DATA_HOME/soar/db
db_path = "~/.local/share/soar/db"
# Directory where binary symlinks are placed.
# Default: $XDG_DATA_HOME/soar/bin
bin_path = "~/.local/share/soar/bin"
# Path to the local clone of all repositories.
# Default: $XDG_DATA_HOME/soar/packages
repositories_path = "~/.local/share/soar/repos"
# If true, enables parallel downloading of packages.
# Default: true
parallel = true
# Maximum number of parallel downloads.
# Default: 4
parallel_limit = 4
# Maximum number of concurrent requests for GHCR (GitHub Container Registry).
# Default: 8
ghcr_concurrency = 8
# Limits the number of results returned by a search.
# Default: 20
search_limit = 20
# Allows packages to be updated across different repositories.
# NOTE: This is not yet implemented
cross_repo_updates = false
# Glob patterns for package files that should be included during install.
# Default: ["!*.log", "!SBUILD", "!*.json", "!*.version"]
install_patterns = [
    "!*.log",
    "!SBUILD",
    "!*.json",
    "!*.version",
]

# A profile defines a local package store and its configuration.
[profile.default]
# Root directory for this profile’s data and packages.
#
# If `packages_path` is not set, packages will be stored in `root_path/packages`.
root_path = "~/.local/share/soar"
# Optional path where packages are stored.
#
# If unset, defaults to `root_path/packages`.
packages_path = "~/.local/share/soar/packages"

# List of configured repositories.
#
# Defines a remote repository that provides packages.
[[repositories]]
# Unique name of the repository.
name = "bincache"
# URL to the repository's metadata file.
url = "https://meta.pkgforge.dev/bincache/x86_64-Linux.sdb.zstd"
# Enables desktop integration for packages from this repository.
# Default: false
desktop_integration = false
# URL to the repository's public key (for signature verification).
pubkey = "https://meta.pkgforge.dev/bincache/minisign.pub"
# Whether the repository is enabled.
# Default: true
enabled = true
# Enables signature verification for this repository.
# Default is derived based on the existence of `pubkey`
signature_verification = true
# Optional sync interval (e.g., "1h", "12h", "1d").
# Default: "3h"
sync_interval = "3h"

[[repositories]]
name = "pkgcache"
url = "https://meta.pkgforge.dev/pkgcache/x86_64-Linux.sdb.zstd"
desktop_integration = true
pubkey = "https://meta.pkgforge.dev/pkgcache/minisign.pub"
```

<div class="warning">
  The `db_path`, `bin_path` and `repositories_path` is derived from the root path of `default_profile` if not provided explicitly.

   Replace `x86_64` with `aarch64` if you're using `aarch64` system.
</div>

### Create config file

You can create default configuration using command:

```sh
soar defconfig
```

You can also enable [external repositories](https://docs.pkgforge.dev/repositories/external) using command:

```sh
soar defconfig --external
```

You can selectively enable repositories unsing command:

```sh
# only enable bincache repo
soar defconfig -r bincache
```

<div class="warning">
   These commands only work if you haven't created soar configuration file yet.
</div>

### View/Edit config file

Soar provides a convenient way to view and edit configuration file.

View config file
```sh
soar config
```

Edit config file. You need to have `EDITOR` environment variable set, or it'll fallback to `vi`.

```sh
soar config -e
```

### Using custom config file

It is possible to use different configuration file using `-c` flag.

```sh
soar -c /path/to/config.toml [subcommand]
```

### Custom Repository Support

You can fully customize the repositories Soar uses:

- You can completely replace the default pkgforge repositories with your own.
- Soar supports various metadata formats, including `SQLite` and `JSON`, with `zstd` compression.
- You can mix and match different types of repositories.

This flexibility allows you to build a fully customized package management setup that meets your specific needs and security requirements.
## Troubleshooting

### Common Configuration Issues
1. **Invalid TOML Syntax**
 - Problem: Errors like unclosed brackets, braces, or missing quotation marks around strings can lead to configuration parsing failures.
 - Solution: Carefully review your config.toml file for syntax errors. TOML is strict, so ensure all elements are correctly formatted.

2. **Invalid Repository URL**
 - Problem: Soar can't access or parse metadata from a repository URL. This might be due to a malformed URL, a typo, or the server being unreachable.
 - Solution: Double-check that all repository URLs are properly formatted and accessible. Ensure there are no trailing slashes unless explicitly required by the repository server.

3. **Permission Issues**
 - Problem: Soar might not have the necessary read/write permissions for its configuration file or the directories it uses for databases, binaries, or packages.
 - Solution: Verify that your user account has write permissions for ~/.config/soar/config.toml and for all paths specified in your configuration (db_path, bin_path, repositories_path, and root_path/packages_path within your profiles).

4. **Duplicate Repository/Profile Names**
 - Problem: Each repository and profile must have a unique name. Duplicates will cause conflicts.
 - Solution: Ensure that every name field in your `[[repositories]]` sections and every profile name under `[profile.<name>]` is unique. Remember that names are case-sensitive.
