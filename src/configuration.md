# Configuration

Soar stores configuration at `~/.config/soar/config.toml`. If the file doesn't exist, sensible defaults are used.

> **Quick Start:** Run `soar defconfig` to create a default configuration file.

## Configuration Reference

| Configuration Option | Type | Default | Description |
|---------------------|------|---------|-------------|
| **Path Settings** |
| `cache_path` | String | `~/.local/share/soar/cache` | Directory for cached package files |
| `db_path` | String | `~/.local/share/soar/db` | Path to package database |
| `bin_path` | String | `~/.local/share/soar/bin` | Directory for binary symlinks |
| `repositories_path` | String | `~/.local/share/soar/repos` | Local repository clones |
| `portable_dirs` | String | `~/.local/share/soar/portable-dirs` | Base path for portable app data (AppImage/FlatImage/RunImage/Wrappe only) |
| **Performance** |
| `parallel` | Boolean | `true` | Enable parallel downloads |
| `parallel_limit` | Integer | `4` | Max parallel downloads (1-16) |
| `ghcr_concurrency` | Integer | `8` | Max GHCR concurrent requests (1-32) |
| `search_limit` | Integer | `20` | Max search results (5-100) |
| `cross_repo_updates` | Boolean | `false` | Allow cross-repo updates (not implemented) |
| **Package Installation** |
| `install_patterns` | Array | `["!*.log", "!SBUILD", "!*.json", "!*.version"]` | Files to exclude during installation |
| **Security** |
| `signature_verification` | Boolean | `null` (auto) | Enable package signature verification |
| **Desktop Integration** |
| `desktop_integration` | Boolean | `null` (repo-specific) | Enable desktop menu entries |
| **Repository Sync** |
| `sync_interval` | String | `"3h"` | How often to sync repositories |
| **Display Settings** |
| `display.progress_style` | String | `"modern"` | Progress bar style: `classic`, `modern`, `minimal` |
| `display.icons` | Boolean | `true` | Show Unicode icons |
| `display.spinners` | Boolean | `true` | Show animated spinners |

**Special `sync_interval` values:** `"always"`, `"never"`, `"auto"` (3h), or duration like `"30m"`, `"6h"`, `"1d"`

## Key Options

### Path Settings
Control where Soar stores data. Add `bin_path` to your PATH:
```sh
export PATH="$HOME/.local/share/soar/bin:$PATH"
```

### Performance
- **`parallel` / `parallel_limit`**: Increase for faster downloads on stable connections, decrease for slow/unstable connections
- **`ghcr_concurrency`**: Adjust if experiencing GHCR rate limiting

### Install Patterns
Glob patterns for files to exclude during installation. Patterns starting with `!` are exclusions:
```toml
install_patterns = [
    "!*.log",      # Exclude log files
    "!SBUILD",     # Exclude build scripts
    "!*.debug",    # Exclude debug symbols
]
```

### Security
**`signature_verification`**: Set to `true` for maximum security, `false` for trusted local repos. Can be overridden per-repository.

### Desktop Integration
**`desktop_integration`**: Enable for GUI applications to appear in application menus. Can be set globally or per-repository.

### Display Settings
```toml
[display]
progress_style = "modern"  # classic, modern, minimal
icons = true
spinners = true
```

## Repositories

Repositories are defined as arrays of tables in your configuration:

```toml
[[repositories]]
name = "bincache"
url = "https://meta.pkgforge.dev/bincache/x86_64-Linux.sdb.zstd"
pubkey = "https://meta.pkgforge.dev/bincache/minisign.pub"
desktop_integration = false
enabled = true
signature_verification = true
sync_interval = "3h"
```

### Repository Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | String | (required) | Unique repository name. **Note:** `"local"` is reserved |
| `url` | String | (required) | URL to repository metadata |
| `pubkey` | String | `null` | URL to repository's public key |
| `enabled` | Boolean | `true` | Enable/disable this repository |
| `desktop_integration` | Boolean | `false` | Enable desktop integration for packages |
| `signature_verification` | Boolean | auto | Enable signature verification (auto-enabled if `pubkey` exists) |
| `sync_interval` | String | `"3h"` | Sync interval: `"always"`, `"never"`, `"auto"`, or duration |

### Default Repositories

Soar includes these default repositories for Linux platforms (aarch64, riscv64, x86_64):

- **bincache**: Stripped binaries with no desktop integration
  - URL: `https://meta.pkgforge.dev/bincache/{platform}.sdb.zstd`
  - Signature verification enabled
  - Desktop integration disabled

- **pkgcache**: Full packages with desktop integration
  - URL: `https://meta.pkgforge.dev/pkgcache/{platform}.sdb.zstd`
  - Desktop integration enabled

## Managing Configuration

**View config:**
```sh
soar config
```

**Edit config:**
```sh
soar config -e
```

**Use custom config:**
```sh
soar -c /path/to/config.toml [subcommand]
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `SOAR_CONFIG` | Custom config file path |
| `SOAR_ROOT` | Root directory override (affects all profiles) |
| `SOAR_CACHE` | Cache directory override |
| `SOAR_BIN` | Binary directory override |
| `SOAR_DB` | Database path override |
| `SOAR_PACKAGES` | Packages directory override |
| `SOAR_REPOSITORIES` | Repositories directory override |
| `SOAR_PORTABLE_DIRS` | Portable directories path override |
| `RUST_LOG` | Debug logging level (`debug`, `info`, `trace`) |

> **Note:** Environment variables take precedence over configuration file settings and profile paths.

## Common Issues

### Invalid TOML Syntax
Check for unclosed brackets, missing quotes, or duplicate names. Use `soar config` to validate.

### Command Not Found
Add `bin_path` to your PATH in `~/.bashrc` or `~/.zshrc`.

### Repository Not Syncing
Run `soar sync` manually. Check network connectivity and repository URLs.

### Signature Verification Failed
Verify the `pubkey` URL is correct. Run `soar sync` to update keys.

### Garbled Output
Switch to classic display mode:
```toml
[display]
progress_style = "classic"
icons = false
```
