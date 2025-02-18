# Update Packages

Soar provides efficient commands to keep your packages up to date. This guide covers all update operations and scenarios.

## Basic Update

To update all installed packages to their latest versions:
```sh
soar update
```

To update specific packages:
```sh
soar update <package1> <package2>
```

Example: Update Specific Packages
```sh
soar update 7z bat
```

<div class="warning">
    The update process ignores the updates from another repository than the one the package is installed from.
    The profile flag has no effect on package installation path; it'll use the profile used at the time of installation.
</div>
