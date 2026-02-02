# Health

Soar's health check command is designed to quickly identify potential issues
with your soar installation, missing binaries, broken packages, and broken
symlinks.

## Usage

To check Soar's health, run:

```sh
soar health
```

## Environment Variables

To view all Soar-related environment variables and their current values, run:

```sh
soar env
```

This command displays:
- `SOAR_CONFIG` - Config file path
- `SOAR_BIN` - Binary directory path
- `SOAR_DB` - Database directory path
- `SOAR_CACHE` - Cache directory path
- `SOAR_PACKAGES` - Packages directory path
- `SOAR_REPOSITORIES` - Repository directory path

These environment variables can be set to override Soar's default paths and behavior. For example:

```sh
# Use a custom cache directory
export SOAR_CACHE="/tmp/soar-cache"
soar install neovim

# Switch to nightly builds
SOAR_NIGHTLY=1 soar self update
```

### Functionality

When executed, this command:

- Checks if the Soar binary path is included in the `PATH` environment variable
- Lists **broken packages** (incomplete package installations)
 - Lists **broken symlinks** (dangling symlinks created by Soar that no longer point to valid files)
   - **bin directory**: Detects all broken symlinks
   - **desktop/icons directories**: Only detects broken symlinks with filenames ending in `-soar` suffix

### Output

The health check displays results in a table format with status indicators for each category:

**Status icons:**
- checkmark (green) - Item is healthy
- cross (red) - Issues found
- arrow - Indicates individual items in a list

**Table categories:**
- **PATH** - Checks if Soar's binary directory is in your PATH
- **Broken Packages** - Lists incomplete package installations
- **Broken Symlinks** - Lists dangling symlinks created by Soar

When issues are detected, suggested commands are provided to fix them.

### Fixing Issues
- **Remove broken packages**
  Run:
  ```sh
  soar clean --broken
  ```
- **Remove broken symlinks**
  Run:
  ```sh
  soar clean --broken-symlinks
  ```
- **Clear package cache**
  Run:
  ```sh
  soar clean --cache
  ```

## Clean Command

The `clean` command performs various maintenance operations to keep your Soar installation clean and efficient.

### Usage

```sh
soar clean [OPTIONS]
```

### Options

| Option | Description |
|--------|-------------|
| `--cache` | Deletes the entire cache directory (all cached package files) |
| `--broken` | Removes packages marked as broken in the database (incomplete installations) |
| `--broken-symlinks` | Removes broken symlinks from bin, desktop, and icons directories |

### Behavior

**If no flags are provided**, ALL clean operations are performed (cache, broken packages, and broken symlinks).

### Examples

```sh
# Run all clean operations (no flags = clean everything)
soar clean

# Clean only the cache
soar clean --cache

# Remove only broken packages
soar clean --broken

# Remove only broken symlinks
soar clean --broken-symlinks

# Run specific clean operations
soar clean --cache --broken
```

### When to Use Clean Operations

- **After installation failures**: If `soar health` reports broken packages
- **To free disk space**: Clear the cache (deletes entire cache directory)
- **After manual file removal**: Clean up broken symlinks pointing to deleted files
- **Before major updates**: Clear cache to ensure fresh downloads
- **General maintenance**: Run `soar clean` with no flags to perform all operations

## Sync Command

The `sync` command updates repository metadata from remote sources, ensuring you have the latest package information.

### Usage

```sh
soar sync
```

Or use aliases:
```sh
soar S      # Short alias
soar fetch  # Alternative name
```

### Functionality

When executed, this command:
- Fetches the latest package metadata from all enabled repositories
- Updates the local database with new package versions
- Respects per-repository `sync_interval` settings

### Sync Behavior

Repositories can be configured with different sync intervals:

```toml
# In config.toml
[[repositories]]
name = "main"
url = "https://example.com/repo"
sync_interval = "3h"  # Sync every 3 hours (default)
```

**Special sync_interval values:**
- `"always"` - Sync every time `soar sync` is run
- `"never"` - Never sync automatically
- `"auto"` - Use default 3-hour interval
- `"3h"`, `"12h"`, `"1d"` - Custom duration strings

### When to Sync

- **Before searching for new packages**: Ensures you see the latest versions
- **After adding a new repository**: Fetch initial metadata
- **Before updating packages**: Get latest version information
- **Anytime**: Run to update repository metadata

### Example

```sh
# Sync all repositories
soar sync

# Output example:
Syncing repository 'main'...
Fetching metadata from https://example.com/repo...
Updated: 1427 packages available
```

### **Example Usage**
```sh
$ soar health
```

#### **Example Output (No Issues)**
```
╭────────────────────────────────────────╮
│          System Health Check           │
├──────────────────┬─────────────────────┤
│ PATH             │ ✓ Configured        │
│ Broken Packages  │ ✓ None              │
│ Broken Symlinks  │ ✓ None              │
╰──────────────────┴─────────────────────╯
```

#### **Example Output (With Issues)**
```
╭────────────────────────────────────────╮
│          System Health Check           │
├──────────────────┬─────────────────────┤
│ PATH             │ ⚠ /path/to/bin not │
│                  │   in PATH           │
│ Broken Packages  │ ✗ 2 found          │
│ Broken Symlinks  │ ✗ 1 found          │
╰──────────────────┴─────────────────────╯

Broken packages:
  → cat#test: /home/user/.local/share/soar/packages/cat-test-q1235
  → ls#test: /home/user/.local/share/soar/packages/ls-test-q2345
Run soar clean --broken to remove

Broken symlinks:
  → /home/user/.local/bin/ls
Run soar clean --broken-symlinks to remove
```
