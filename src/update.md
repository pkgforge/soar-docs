# Update Packages

Soar provides efficient commands to keep your packages up to date. This guide covers all update operations and options.

## Quick Start

To update all installed packages to their latest versions:
```sh
soar update
```

To update specific packages:
```sh
soar update <package1> <package2>
```

Example: Update specific packages
```sh
soar update 7z bat
```

## Update Options

The `update` command supports the following options:

| Option | Description |
|--------|-------------|
| `--ask` | Prompt for confirmation before updating each package |
| `--keep` | Keep the current version (only refresh metadata) |
| `--no-verify` | Skip checksum and signature verification |

## Version Determination

### Repository Packages

For packages installed from repositories, Soar determines the latest version from the package database:

```sh
soar update bat
```

This will update `bat` to the latest version available in the repository it was installed from.

### Local Packages

Packages installed from URLs retain their installation specifications. Updates check for newer versions at the same URL or based on version detection:

```sh
soar update https://example.com/app.AppImage
```

## Profile Handling

> **Warning:** The profile flag has no effect on package installation path; it'll use the profile used at the time of installation.

The update process respects the original installation profile. If a package was installed with a specific profile, updates will maintain that profile setting.

## Update Options Details

### Ask for Confirmation

To prompt for confirmation before updating each package:

```sh
soar update --ask
soar update <package> --ask
```

This is useful when you want to review changes before updating:

```sh
soar update --ask
# Soar will prompt for each package update
```

### Keep Current Version

To refresh package metadata without updating to a newer version, use `--keep`:

```sh
soar update <package> --keep
```

This updates the package database entry but maintains the current installed version. Useful for:
- Refreshing package information
- Re-verifying installations
- Testing without version changes

### Skip Verification

To skip signature and checksum verification during updates (not recommended):

```sh
soar update <package> --no-verify
```

> **Security Warning:** Skipping verification exposes you to potentially compromised updates. Only use with trusted sources.

## Cross-Repository Update Behavior

> **Warning:** The update process ignores updates from another repository than the one the package is installed from.

Important update behaviors:

- **Single Repository Source:** A package always updates from the same repository it was installed from
- **No Repository Switching:** Even if a newer version exists in a different repository, it won't be used
- **Explicit Override:** To switch repositories, use `soar remove` followed by `soar add <package>:<new-repo>`

Example: Update from the original repository
```sh
# Installed from 'official', will only check 'official' for updates
soar update bat
```

To update from a different repository:
```sh
# Remove from original repository
soar remove bat

# Install from new repository
soar add bat:bincache
```

## Update Behavior Details

### What Happens During Update

When you update a package, Soar:

1. Checks for newer versions in the source repository
2. Verifies signatures and checksums (unless `--no-verify` is used)
3. Downloads the new version
4. Backs up the current installation
5. Extracts the new version
6. Updates symlinks and database entries
7. Removes the old version (if successful)

### Backup and Recovery

Soar maintains backups during updates:

```sh
# If update fails, the previous version remains intact
soar update bat
```

### Batch Updates

Update multiple packages in one command:

```sh
soar update bat ripgrep fd
soar update --ask bat ripgrep fd
```

## Best Practices

1. **Regular Updates:** Keep packages up to date for security fixes and features
   ```sh
   soar update
   ```

2. **Test Before Production:** Use `--ask` to review updates
   ```sh
   soar update --ask
   ```

3. **Verify Trust:** Always verify package sources before updating
   ```sh
   soar info <package>
   ```

4. **Backup Important Data:** For critical applications, backup data before updating
   ```sh
   soar update --ask <critical-app>
   ```

5. **Selective Updates:** Update specific packages if concerned about compatibility
   ```sh
   soar update <package1> <package2>
   ```

## Scenarios

### Update All Packages

```sh
soar update
```

This updates all installed packages to their latest versions from their original repositories.

### Update with Confirmation

```sh
soar update --ask
```

Review each package update before proceeding.

### Update Specific Package

```sh
soar update ripgrep
```

Update only the `ripgrep` package.

### Refresh Metadata Without Updating

```sh
soar update --keep
```

Update package metadata in the database without changing installed versions.

### Update from Different Repository

```sh
# Current setup uses 'official' repository
soar remove bat

# Switch to 'bincache' repository
soar add bat:bincache

# Future updates will use 'bincache'
soar update bat
```

## Troubleshooting

### Update Fails with Signature Error

Verify the package source is trusted:
```sh
soar info <package>
soar update --no-verify <package>  # Only if source is trusted
```

### Update Stuck or Slow

Check network connection and repository status:
```sh
soar sync
soar update <package>
```

### Version Didn't Change

Verify the package actually has a newer version available:
```sh
soar query <package>
```

### Can't Update from Different Repository

This is by design. Remove and reinstall from the new repository:
```sh
soar remove <package>
soar add <package>:<new-repo>
```

For more help, see [Health Check](./health.md)

## Related Commands

- [Installing Packages](./install.md)
- [Removing Packages](./remove.md)
- [Searching Packages](./search.md)
