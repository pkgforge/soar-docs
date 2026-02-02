# List Packages

Soar provides commands to list available and installed packages. This guide covers all listing operations and features.

## List vs Info: What's the Difference?

Before diving into the commands, it's important to understand the distinction:

- **`soar list`**: Lists **available** packages from repositories (what you *can* install)
- **`soar info`**: Lists **installed** packages on your system (what you *have* installed)

---

## List Available Packages

The `list` command shows all packages available across your configured repositories.

### Basic Usage

```sh
# List all available packages
soar list

# Using the short alias
soar ls
```

### Filter by Repository

To list packages from a specific repository only:

```sh
# List packages from the 'bincache' repository
soar list bincache

# List packages from the 'myrepo' repository
soar ls myrepo
```

### Example Output

```sh
$ soar list bincache

[-] 7z#e4d8:bincache | 24.09 | archive
[+] bat#7a3c:bincache | 0.24.0 | cli
[+] curl#9f2d:bincache | 8.11.1 | web
[-] ffmpeg#1b5e:bincache | 7.1 | multimedia
...

┏━━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃ Total     ┃ 4            ┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━┃
┃ ✓ Installed ┃ 2            ┃
┃ ▸ Available ┃ 2            ┃
┗━━━━━━━━━━━┻━━━━━━━━━━━━━━━┛
```

**Output Format**: `[icon] name#pkg_id:repo | version | type`

- **Icon**: `+` (green) or ✓ = installed, `-` or ▸ = available, `?` = unknown status
- **name**: Package name (blue)
- **pkg_id**: Package identifier (cyan)
- **repo**: Repository name (cyan)
- **version**: Package version (light red)
- **type**: Package type (magenta, optional)

---

## List Installed Packages

The `info` command (aliased as `list-installed`) shows all packages currently installed on your system, including their size and installation status.

### Basic Usage

```sh
# List all installed packages
soar info

# Using the list-installed alias
soar list-installed
```

It will list all the installed packages alongside the total size used by each package. This will also report partially installed packages as `Broken`.

### Info Command Options

| Option | Short | Description |
|--------|-------|-------------|
| `--repo-name` | `-r` | Filter installed packages by repository name |
| `--count` | - | Only show the total count of unique installed packages |

### Filter Installed Packages by Repository

To see only packages installed from a specific repository:

```sh
# Show packages installed from 'bincache'
soar info --repo-name bincache

# Using the short option
soar info -r bincache
```

### Count Installed Packages

To get a quick count of installed packages:

```sh
# Show total count of unique packages
soar info --count

# Count packages from specific repository
soar info --repo-name bincache --count
```

### Example Output

```sh
$ soar info

bat-0.24.0:bincache (2025-01-15) (1.8 MB)
curl-8.11.1:bincache (2025-01-15) (2.4 MB)
ffmpeg-7.1:bincache (2025-01-14) (15.2 MB)
jq-1.7.1:bincache (2025-01-10) (1.5 MB) ✗ Broken

┏━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ ✓ Installed ┃ 3, 3 distinct (20.0 MB)     ┃
┃ ✗ Broken    ┃ 1 (1.5 MB)                  ┃
┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃ Total       ┃ 4 (21.5 MB)                 ┃
┗━━━━━━━━━━━━┻━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

**Output Format**: `name-version:repo (date) (size) [status]`

- **name**: Package name (blue)
- **version**: Package version (magenta)
- **repo**: Repository name (cyan)
- **date**: Installation date (green)
- **size**: Package size on disk (human-readable)
- **status**: Empty for installed packages, `✗ Broken` or `[Broken]` (red) for packages with missing/corrupted files

```sh
$ soar info --count
4
```

---

## Advanced Use Cases

### Checking Package Status

Use `info` to verify installation status before performing operations:

```sh
# Check if package is installed
soar info | grep ripgrep

# Check specific repository packages
soar info --repo-name bincache | grep ffmpeg
```

---

## Common Use Cases

### Find What's Available vs Installed

```sh
# See all available ffmpeg packages
soar list | grep ffmpeg

# Check if ffmpeg is installed
soar info | grep ffmpeg
```

### Repository Management

```sh
# List all packages in a repository before adding it
soar list new-repo

# After installation, verify what was installed
soar info --repo-name new-repo

# Get quick count of packages from repository
soar info --repo-name new-repo --count
```

### System Cleanup

```sh
# Check total packages installed
soar info --count

# Identify broken installations
soar info | grep "Broken"

# Remove broken packages (see remove.md)
soar remove broken-package
```

---

## See Also

- [Search Packages](./search.md) - Search available packages by query
- [Install Packages](./install.md) - Install packages from repositories
- [Remove Packages](./remove.md) - Remove installed packages
- [Configuration](./configuration.md) - Configure repositories
