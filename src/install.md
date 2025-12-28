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

When installing from a URL, you can override the package metadata using these flags:

| Flag | Description |
|------|-------------|
| `--name` | Override the package name |
| `--version` | Override the version |
| `--pkg_type` | Override the package type (e.g., `appimage`, `flatimage`, `archive`) |
| `--pkg_id` | Override the package ID |

Example: Install with custom name and version
```sh
soar add https://example.com/app.appimage --name myapp --version 2.0.0
```

Example: Specify package type for ambiguous URLs
```sh
soar add https://example.com/releases/tool.tar.gz --name tool --pkg_type archive
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

<div class="warning">
    Currently there is no way to unpin the package. This will be introduced gradually.
</div>

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

Portable mode allows packages to store their data in custom locations instead of the default system directories. This is useful for keeping application data self-contained or for running applications from removable media.

<div class="warning">
    Portable mode only applies to AppImages, FlatImages, RunImages, and Wrappe packages. Static binaries do not support portable mode.
</div>

To install a package in portable mode:

```sh
soar add <package> --portable
```

You can specify custom directories for different data types:

| Flag | Description |
|------|-------------|
| `--portable-home` | Custom home directory |
| `--portable-config` | Custom config directory |
| `--portable-cache` | Custom cache directory |
| `--portable-share` | Custom data/share directory |

Example: Install with a custom home directory
```sh
soar add obsidian --portable-home ~/.obsidian-data
```

Example: Install with multiple custom directories
```sh
soar add myapp --portable-home ~/myapp --portable-config ~/myapp/config
```

### Force Installation

To force installation even if the package already exists, use the `--force` flag:

```sh
soar add <package> --force
```

Example: Install the `bat` package even if it already exists
```sh
soar add bat --force
```

### Non-Interactive Installation

By default, Soar prompts for confirmation before installing packages if multiple packages are found for the given query. To skip this prompt, use the `--yes` flag:

```sh
soar add <package> --yes
```

Example: Install the `cat` package without confirmation
```sh
soar add cat --yes
```

<div class="warning">
    <strong>Note:</strong> The `--yes` flag is useful for non-interactive installations, but it's generally recommended to use it with caution. It will install the first package if multiple packages are found.
</div>
