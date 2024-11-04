# Installing Packages

Soar provides several flexible ways to install packages. This guide covers all installation methods and options.

<div>
    <video src="/videos/install.mp4" controls></video>
</div>

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
soar install soar
```

### Installing from Specific Families

Packages can be organized into families (like categories). To install a package from a specific family:

```sh
soar install <family>/<package>
```

Example: Install the `cat` package from the `busybox` family
```sh
soar install busybox/cat
```

### Installing from Specific Collections

Packages can also be organized into collections. To install a package from a specific collection:

```sh
soar install <package>#<collection>
```

Example: Install the `7z` package from the `bin` collection
```sh
soar install 7z#bin
```

### Installing Multiple Packages

To install multiple packages, list them after the command:

```sh
soar install <package1> <package2> <package3>
```

Example: Install the `bat` and `7z` packages
```sh
soar install bat 7z
```

### Force Installation

To force installation even if the package already exists, use the `--force` flag:

```sh
soar install <package> --force
```

Example: Install the `bat` package even if it already exists
```sh
soar install bat --force
```

### Non-Interactive Installation

By default, Soar prompts for confirmation before installing packages if multiple packages are found. To skip this prompt, use the `--yes` flag:

```sh
soar install <package> --yes
```

Example: Install the `cat` package without confirmation
```sh
soar install cat --yes
```

<div class="warning">
    <strong>Note:</strong> The `--yes` flag is useful for non-interactive installations, but it's generally recommended to use it with caution. It will install the first package if multiple packages are found.
</div>
