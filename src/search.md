# Search Packages

Soar provides powerful search capabilities to help you find the packages you need. This guide covers all search operations and features.

## Basic Search

To search for packages, use the `soar search` command:

```sh
soar search <query>
```

Alternative aliases:
```sh
# Using shorter alias
soar s <query>

# Using find alias
soar find <query>
```

Example: Search for packages containing "bat"
```sh
soar search bat
```

## Search Options

The search checks for the partial match in `pkg_id`, `pkg_name`, `pkg` and target from `provides`.

### Case-Sensitive Search

For exact case matching:

```sh
soar search <query> --case-sensitive
```

Example: Search with exact case
```sh
soar search Bat --case-sensitive
```

### Exact Match Search

For exact matching (no partial matches):

```sh
soar search <query> --exact
```

Example: Find exact package name
```sh
soar search bat --exact
```

### Result Limit

Limit the number of search results returned:

```sh
soar search <query> --limit <number>
```

Example: Return only top 10 results
```sh
soar search editor --limit 10
```

## Cross-Repository Search

By default, Soar searches across all configured repositories. Search results display which repository each package comes from:

```sh
soar search bat
```

Results may include packages from multiple repositories:
```
bat#official:bincache
bat#official:official
```

To search in a specific repository, use the repository syntax:

```sh
soar search bat:official
```

## Search Results Display

Search results use status icons:

| Icon | Meaning |
|------|---------|
| `[+]` | Package is installed |
| `[-]` | Package is not installed |
| `[?]` | Installation status unknown |

Example output:
```
[+] bat#official:official (0.24.0)
[-] bat#official:bincache (0.23.0)
[?] code#official:flathub (latest)
```

## Query Command

The `query` command provides detailed package information:

```sh
soar query <package>

# Using shorter aliases
soar Q <package>
```

Example: Get detailed information about a package
```sh
soar query bat
```

### Query Syntax

The `query` command supports detailed syntax for specific lookups:

```sh
soar query <name>#<pkg_id>@<version>:<repo>
```

Format breakdown:
- `<name>` - Package name (required)
- `#<pkg_id>` - Package ID (optional, for disambiguation)
- `@<version>` - Version constraint (optional)
- `:<repo>` - Repository name (optional)

### Query Output Format

The query command returns information in this format:

| Field | Description |
|-------|-------------|
| Name | Package name |
| Version | Current/latest version |
| Repository | Source repository |
| pkg_id | Package ID/family |
| Status | [installed], [not-installed], or [broken] |
| Size | Package size on disk |
| Install Date | When the package was installed |
| Last Updated | Last update timestamp |
| Provides | Alternative binary names |
| Description | Package description |

### Example Query Output

```sh
soar query bat

Output:
Name:        bat
Version:     0.24.0
Repository:  official
pkg_id:      catlike.tools.bat.official
Status:      [installed]
Size:        2.3 MiB
Install Date: 2025-01-15
Last Updated: 2025-01-20
Provides:    batcat
Description: A cat clone with syntax highlighting and Git integration
```

## Search Patterns

### Partial Matching

Matches any package containing the query string:

```sh
# Matches any package containing "fire"
soar search fire

# Matches any package containing "code"
soar search code
```

Example results for `soar search fire`:
```
[-] firefox#mozilla:official (122.0)
[-] firewall#system:official (latest)
[+] firefoxpwa#third-party:flathub (1.0)
```

### pkg_id Searching

Search by package ID family:

```sh
# Search in pkg_id
soar search git.busybox.net
```

### Provides Searching

Search by alternative binary names:

```sh
# Find packages that provide alternative names
soar search batcat
```

This finds `bat` because it provides `batcat` as an alternative name.

## Tips for Effective Searching

1. **Start Simple:** Begin with simple queries before adding filters
   ```sh
   soar search editor
   ```

2. **Use Case Sensitivity:** For disambiguation between similar names
   ```sh
   soar search Bat --case-sensitive
   ```

3. **Combine with Query:** Use `query` for detailed information after searching
   ```sh
   soar search bat
   soar query bat
   ```

4. **Limit Results:** For popular terms, limit results for clarity
   ```sh
   soar search tool --limit 10
   ```

5. **Check Alternative Names:** Search for known aliases (provides)
   ```sh
   soar search batcat
   ```

6. **Repository Specific:** If you know the repository
   ```sh
   soar search bat:official
   ```

## Configuration

Search behavior can be configured in Soar's configuration file. See [Configuration](./config.md) for details on:
- Default search repositories
- Search result ordering
- Case sensitivity defaults
- Result limit defaults

## Related Commands

- [Installing Packages](./install.md)
- [Removing Packages](./remove.md)
- [Updating Packages](./update.md)
