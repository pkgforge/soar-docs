# Installing Packages

Soar provides several flexible ways to install packages. This guide covers all installation methods and options.

## Basic Installation

To install a package, use either the `install` command or its aliases:

```sh
# Using install command
soar install <package>

# Using shorter alias
soar i <package>

# Using add alias
soar add <package>
```

Example: Install the `soar` package
```sh
soar add soar
```

### Installing from Specific pkg_id

Packages can be organized into pkg_id (like family). To install a package from a specific pkg_id:

```sh
soar add <package>#<pkg_id>
```

Example: Install the `cat` package from the `git.busybox.net.busybox.standalone.glibc` pkg_id. Yep, a really long pkg_id.
```sh
soar add cat#git.busybox.net.busybox.standalone.glibc
```

### Installing from Specific Repository
To install a package from a specific repository:

```sh
soar add <package>:<repository_name>
```

Example: Install the `7z` package from the `bincache` repository
```sh
soar add 7z:bincache
```

### Installing from URL

You can install packages directly from a URL:

```sh
soar add <url>
```

Example: Install an AppImage from a URL
```sh
soar add https://example.com/releases/myapp-1.0.0.appimage
```

#### Overriding Package Metadata

When installing from a URL, Soar attempts to automatically detect package metadata. You can override this behavior using the following flags:

| Flag | Description |
|------|-------------|
| `--name` | Override the package name |
| `--version` | Override the version |
| `--pkg-type` | Override the package type (e.g., appimage, flatimage, archive) |
| `--pkg-id` | Override the package ID |
| `--binary-only` | Install only binaries, skip other files |
| `--no-verify` | Skip checksum and signature verification |
| `--portable [DIR]` | Set portable dir for home & config (optional value) |
| `--portable-home [DIR]` | Set custom home directory (optional value) |
| `--portable-config [DIR]` | Set custom config directory (optional value) |
| `--portable-share [DIR]` | Set custom share directory (optional value) |
| `--portable-cache [DIR]` | Set custom cache directory (optional value) |
| `--show` | Show all available variants for interactive selection |

**Basic Example:**
```sh
soar add https://example.com/app.appimage --name myapp --version 2.0.0
```

**Portable Installation:**
```sh
soar add https://example.com/app.AppImage \
  --name myapp \
  --portable-home ~/myapp
```

### Installing Multiple Packages

To install multiple packages, list them after the command:

```sh
soar add <package1> <package2> <package3>
```

Example: Install the `bat` and `7z` packages
```sh
soar add bat 7z
```

### Pin package to specific version
To pin package at specific version:

```sh
soar add <package>@<version>
```

Example: Install the `soar` package and pin at version `0.5.2`.
```sh
soar add soar@0.5.2
```

> **Warning:** Currently there is no way to unpin the package. This will be introduced gradually.

### Installing All Packages provided by a pkg_id

To install all the packages provided by a pkg_id `git.busybox.net.busybox.standalone.glibc`:

```sh
soar add '#git.busybox.net.busybox.standalone.glibc'
```

OR, if you don't know full `pkg_id` but know `cat` is in it. This will search for all pkg_ids `cat` is in and prompt you to choose one:
```sh
soar add 'cat#all'
```

### Portable Installation

Portable mode creates symlinks for application data directories (home, config, share, cache) to custom locations. This keeps application data self-contained or allows running from removable media.

> **Warning:** Portable mode **only works** for AppImage, FlatImage, RunImage, and Wrappe packages. Static binaries and archive packages do **not support** portable mode.

To install a package in portable mode:

```sh
soar add <package> --portable
```

You can specify custom directories for different data types:

| Flag | Description |
|------|-------------|
| `--portable [DIR]` | Set base portable directory (applies to home and config). Optional value: if no directory specified, uses package installation directory |
| `--portable-home [DIR]` | Custom home directory (creates symlink). Optional value |
| `--portable-config [DIR]` | Custom config directory (creates symlink). Optional value |
| `--portable-share [DIR]` | Custom share directory (creates symlink). Optional value |
| `--portable-cache [DIR]` | Custom cache directory (creates symlink). Optional value |

Example: Install with a custom home directory
```sh
soar add obsidian.AppImage --portable-home ~/.obsidian-data
```

Example: Install with multiple custom directories
```sh
soar add myapp.AppImage --portable-home ~/myapp --portable-config ~/myapp/config --portable-share ~/myapp/share --portable-cache ~/myapp/cache
```

> **Note:** Portable options create symlinks from the package's expected directories to your custom locations. These settings are stored in the database and reused on reinstallation.

### Force Installation

To force installation even if the package already exists, use the `--force` flag:

```sh
soar add <package> --force
```

Example: Install the `bat` package even if it already exists
```sh
soar add bat --force
```

### Binary-Only Installation

By default, Soar extracts all files from a package. The `--binary-only` flag skips extracting non-essential files to save disk space:

```sh
soar add <package> --binary-only
```

This flag excludes:
- `*.png` and `*.svg` (icon files)
- `*.desktop` (desktop entry files)
- `LICENSE` (license files)
- `CHECKSUM` (checksum files)

Example: Install `ripgrep` without icons, desktop files, and license
```sh
soar add ripgrep --binary-only
```

> **Note:** This option is useful for minimal installations. However, excluding desktop files (`*.desktop`) means the package won't appear in your system's application menu.

### Suppress Package Notes

Some packages display important information after installation. To suppress these notes, use the `--no-notes` flag:

```sh
soar add <package> --no-notes
```

Example: Install `neovim` without displaying post-installation notes
```sh
soar add neovim --no-notes
```

> **Note:** Package notes often contain critical setup instructions or configuration tips. Use this flag with caution.

### Interactive Installation

By default, Soar automatically installs packages. To explicitly enable interactive prompts (for example, to choose between multiple versions or variants), use the `--ask` flag:

```sh
soar add <package> --ask
```

This is the opposite of `--yes` and ensures Soar will always prompt for confirmation before proceeding with installation.

### Skip Signature Verification

By default, Soar verifies package signatures for security. To skip signature verification (not recommended unless you trust the source), use the `--no-verify` flag:

```sh
soar add <package> --no-verify
```

> **Security Warning:** Skipping signature verification exposes you to potentially compromised packages. Only use `--no-verify` with packages from trusted sources or during testing/development.

Example: Install a package from a trusted development build
```sh
soar add https://internal.example.com/builds/myapp.appimage --no-verify
```

### Package ID Override

To explicitly specify the package ID (useful when multiple packages share the same name), use the `--pkg-id` flag:

```sh
soar add <package> --pkg-id <package_id>
```

Example: Install `cat` from a specific package ID
```sh
soar add cat --pkg-id git.busybox.net.busybox.standalone.glibc
```

This is equivalent to using the `cat#git.busybox.net.busybox.standalone.glibc` syntax but can be more readable in scripts.

### Show Package Information

To interactively browse and select package variants before installing, use the `--show` flag:

```sh
soar add <package> --show
```

This opens an interactive picker that displays:
- All available versions and variants of the package
- `[installed]` marker next to already-installed versions
- Package details (name, version, repository, pkg_id)

Example: Browse all `bat` variants interactively
```sh
soar add bat --show
```

> **Note:** Unlike a non-interactive display, `--show` always presents an interactive selection menu. You can choose which variant to install or cancel without installing anything.

### Non-Interactive Installation

By default, Soar prompts for confirmation before installing packages if multiple packages are found for the given query. To skip this prompt, use the `--yes` flag:

```sh
soar add <package> --yes
```

Example: Install the `cat` package without confirmation
```sh
soar add cat --yes
```

> **Note:** The `--yes` flag is useful for non-interactive installations, but it's generally recommended to use it with caution. It will install the first package if multiple packages are found.

## Advanced Scenarios

### Batch Installation

You can combine multiple installation options for complex scenarios:

```sh
soar add bat --yes --no-notes
soar add ripgrep --yes --binary-only
```

### Portable Application Setup

For AppImage/FlatImage/RunImage/Wrapper applications that need to be completely self-contained (e.g., on a USB drive):

```sh
soar add obsidian.AppImage \
  --portable-home /media/usb/obsidian/home \
  --portable-config /media/usb/obsidian/config
```

### Installing All Packages from a pkg_id

To install all packages provided by a specific package ID family:

```sh
soar add '#git.busybox.net.busybox.standalone.glibc'
```

Or if you know one package name but want to see all pkg_ids it belongs to:

```sh
soar add 'cat#all'
```

## Troubleshooting

### Package Not Found

Check package name spelling, sync repositories, or try installing from URL directly:
```sh
soar search <name>
soar sync
```

### Multiple Packages Found

Use `--ask` to choose interactively, specify repository with `<package>:<repo>`, or use `--yes` for first match.

### Permission Denied

Verify profile permissions or use `sudo` with `--system` mode.

### Portable Mode Not Working

Portable mode only works for AppImage, FlatImage, RunImage, and Wrappe packages. Static binaries and archives are not supported.

For more troubleshooting, see [Health Check](./health.md)

## Related Topics

- [Removing Packages](./remove.md)
- [Updating Packages](./update.md)
- [Searching Packages](./search.md)
