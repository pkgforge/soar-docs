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
