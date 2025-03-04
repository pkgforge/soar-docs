# Configuration

Soar offers flexible configuration options to customize its behavior according to your needs. This section explains how to configure Soar and details all available configuration options.

## Configuration File

Soar uses a configuration file located at `~/.config/soar/config.toml`. If this file doesn't exist, Soar will use the defaults.

## Configuration Options

### Default Configuration

```toml
# Directory where Soar stores it's core database 
db_path = "~/.local/share/soar/db"
# Directory where Soar stores binary symlinks
bin_path = "~/.local/share/soar/bin"
# Directory where Soar stores repository metadata databases
repositories_path = "~/.local/share/soar/repos"
# Enable/disable parallel downloads
parallel = true
# Maximum number of concurrent downloads
parallel_limit = 4
# Maximum number of concurrent downloads for GHCR package
ghcr_concurrency = 8
# Maximum number of results to show in search
search_limit = 20
# Default profile to use for operations
# Do not change this after first setup, unless you want to do some manual work moving directories
# (we'll introduce a way to change it in future)
default_profile = "default"
# Currently unused, this will be used to identify whether to enable cross-repo updates
cross_repo_updates = false

[[repositories]]
# name of the repository
name = "bincache"
# URL of the metadata database (compressed SQLite)
url = "https://meta.pkgforge.dev/bincache/x86_64-Linux.sdb.zstd"
# Enable or disable desktop integration for installed packages  
# If enabled, it creates desktop entries (shortcuts) for packages that support it
desktop_integration = false
# URL of the Minisign public key used for verifying package signatures
pubkey = "https://meta.pkgforge.dev/bincache/minisign.pub"
signature_verification = true
# How often to synchronize metadata from the repository (e.g., every 3 hours)
sync_interval = "3h"

[[repositories]]
name = "pkgcache"
url = "https://meta.pkgforge.dev/pkgcache/x86_64-Linux.sdb.zstd"
desktop_integration = true
pubkey = "https://meta.pkgforge.dev/pkgcache/minisign.pub"
signature_verification = true
sync_interval = "3h"

# Profile with name `default`
[profile.default]
# Root path for the profile
root_path = "~/.local/share/soar"
# Packages path for the profile. Can be derived from `root_path` if not provided.
packages_path = "~/.local/share/soar/packages"
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

- You can completely replace the default pkgforge repositories with your own custom repositories
- You can use any metadata format supported by Soar (`SQLite` or `JSON` incl. `zstd` compression support)
- You can mix and match different repository types

This flexibility allows you to build a fully customized package management setup that meets your specific needs and security requirements.
## Troubleshooting

### Common Configuration Issues

1. **Invalid TOML Syntax**
   - Unclosed brackets or braces
   - Missing quotation marks around strings

2. **Invalid Repository URL**
   - Ensure URLs are properly formatted and accessible
   - Check for trailing slashes in URLs

3. **Permission Issues**
   - Verify write permissions for all the paths
   - Check file permissions for the config file

4. **Duplicate Repository/Profile Names**
   - Ensure each repository/profile has a unique name
   - Check for case-sensitive duplicates
