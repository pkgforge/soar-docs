# Remove Packages

Soar provides straightforward commands for removing installed packages from your system. This guide covers all removal options and scenarios.

<div>
    <video src="/videos/remove.mp4" controls></video>
</div>

## Usage

To remove a package, use either the `remove` command or its aliases:

### Removing Single Package

```sh
# Using remove command
soar remove <package>

# Using shorter alias
soar r <package>

# Using del alias
soar del <package>
```

Example: Remove `7z`
```sh
soar remove 7z
```

### Removing Multiple Packages

Remove multiple packages in a single command:
```sh
soar remove <package1> <package2> <package3>
```

Example: Remove `7z` and `bat`
```sh
soar remove 7z bat
```

### Removing Package From Specific Family
```sh
soar remove <family>/<package>
```

Example: Remove `cat` from `coreutils` family.
```sh
# Remove specific family
soar remove coreutils/cat
```

<div class="warning">
    If you just provide the package name without family, it'll remove all packages in that family, so you may want to specify --exact or -e flag to remove exact match only.
</div>

## Verification

After removal, you can verify that a package was successfully removed:

```sh
# Check if package is still installed
soar info | grep <package>
```
