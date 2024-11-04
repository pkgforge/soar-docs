# Search Packages

Soar provides powerful search capabilities to help you find the packages you need. This guide covers all search operations and features.

<div>
    <video src="/videos/search.mp4" controls></video>
</div>

## Basic Search

To search for packages, use the `soar search` command:

```sh
soar search <query>
```

## Search Options

### Case-Sensitive Search

For exact case matching:

```sh
soar search <query> --case-sensitive
```

## Query Command

The `query` command provides detailed package information:

```sh
$ soar query firefox.AppImage
```

## Search Patterns

### Partial Matching
```sh
# Matches any package containing "fire"
soar search fire

# Matches any package containing "code"
soar search code
```

### Family-Specific Search
```sh
# List all coreutils packages
soar search coreutils/
```
