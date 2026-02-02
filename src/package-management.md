# Package Management

Soar provides a comprehensive set of commands for managing packages on your system. This section covers all package management operations available in Soar.

## Declarative Management

### [Declarative Packages](./declarative.md)
Define packages in a configuration file and apply them:
- Configuration file: `~/.config/soar/packages.toml`
- Apply packages: `soar apply`
- Prune unlisted: `soar apply --prune`

## Core Operations

### [Installing Packages](./install.md)
Install packages using various methods:
- Basic installation: `soar install <package>`
- pkg_id specific: `soar install <package>#<pkg_id>`
- From URL: `soar install <url>`
- Multiple packages: `soar install package1 package2`
- Portable installation (for AppImages): `soar install <package> --portable`

### [Removing Packages](./remove.md)
Remove installed packages:
- Basic removal: `soar remove <package>`
- Multiple packages: `soar remove package1 package2`

### [Updating Packages](./update.md)
Keep your packages up to date:
- Update all packages: `soar update`
- Update specific packages: `soar update package1 package2`

## Package Discovery

### [Searching Packages](./search.md)
Find packages in repositories:
- Basic search: `soar search <query>`
- Case-sensitive search: `soar search <query> --case-sensitive`
- Detailed package info: `soar query <package>`

### [Listing Packages](./list.md)
View available and installed packages:
- List all available packages: `soar list`
- List installed packages with sizes: `soar info`

## Package Inspection

### [Inspection Commands](./inspection.md)
Inspect package details and build information:
- View build logs: `soar log <package>`
- Inspect build scripts: `soar inspect <package>`
- Query package details: `soar query <package>`

## Advanced Operations

### [Using Package Variants](./use.md)
Switch between different variant of installed packages:
- Switch family: `soar use <package>`

### [Running Packages](./run.md)
Execute packages without installation:
- Run package: `soar run <package> [args]`

## System Maintenance

Perform system maintenance and repository operations:

### [Maintenance Commands](./maintenance.md)
- Clean cache and broken files: `soar clean`
- Sync repositories: `soar sync`
- View environment: `soar env`
