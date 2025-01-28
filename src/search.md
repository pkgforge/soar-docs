# Search Packages

Soar provides powerful search capabilities to help you find the packages you need. This guide covers all search operations and features.

## Basic Search

To search for packages, use the `soar search` command:

```sh
soar search <query>
```

## Search Options

The search checks for the partial match in `pkg_id`, `pkg_name`, `pkg` and target from `provides`.

### Case-Sensitive Search

For exact case matching:

```sh
soar search <query> --exact
```

## Query Command

The `query` command provides detailed package information:

```sh
soar query bat
```

## Search Patterns

### Partial Matching
```sh
# Matches any package containing "fire"
soar search fire

# Matches any package containing "code"
soar search code
```
