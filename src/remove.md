# Remove Packages

Soar provides straightforward commands for removing installed packages from your system. This guide covers all removal options and scenarios.

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

<div class="warning">
    If you just provide the package name without pkg_id, it'll remove all installed packages with that name.
</div>

### Removing Package From Specific pkg_id
```sh
soar remove <package>#<pkg_id>
```

Example: Remove `cat` from `git.busybox.net.busybox.standalone.glibc` pkg_id.
```sh
# Remove from specific pkg_id
soar remove cat#git.busybox.net.busybox.standalone.glibc
```

### Removing all package installed at once using `pkg_id`
Example: Remove all packages from `git.busybox.net.busybox.standalone.glibc` pkg_id.
```sh
soar remove '#<pkg_id>'
```

OR, if you don't know full `pkg_id` but know `cat` is in it. This will search for all pkg_ids `cat` is in and prompt you to choose one:
```sh
soar remove 'cat#all'
```

<div class="warning">
    It will ignore the packages that are installed explicitly.
</div>


## Verification

After removal, you can verify that a package was successfully removed:

```sh
# Check if package is still installed
soar info | grep <package>
```
