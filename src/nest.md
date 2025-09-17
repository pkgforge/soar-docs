# Nests

Soar's "nest" feature allows you to add custom, self-hosted package repositories. Think of them as [homebrew's taps](https://docs.brew.sh/Taps), but for Soar.
This allows developers to distribute their applications directly to users, and for users to get the latest versions of software without waiting for official package managers.

## Managing Nests

### Adding a Nest

To add a nest, you need the URL of the nest repository. You can then use the `nest add` command:

```sh
soar nest add <nest_name> <url>
```

The `<nest_name>` is a local alias for the nest, and the `<url>` is the direct URL for the nest metadata or github repo

Example: Add a nest from a GitHub repository
```sh
soar nest add soar github:pkgforge/soar
```
Example: Add a nest from direct metadata URL
```sh
soar nest add soar https://github.com/pkgforge/soar/releases/download/soar-nest/x86_64-Linux.json
```

Soar will then add the nest info to the database for tracking. Every nest name is prepended with `nest-` to prevent collision with repository names.

### Removing a Nest

To remove a nest, use the `nest remove` command with the nest's name:

```sh
soar nest remove <nest_name_without_prefix>
```

Example: Remove the `soar` nest
```sh
soar nest remove soar
```

### Listing Nests

To see all the nests you've added, use the `nest list` command:

```sh
soar nest list
```

This will output a list of all configured nests and their corresponding URLs.

## Creating a Nest

For developers who want to create their own nests to distribute software, Soar provides a straightforward process involving a GitHub workflow and an `.SBUILD` file.
For more detailed instructions, please refer to the [full guide on creating nests](https://docs.pkgforge.dev/repositories/nests).
