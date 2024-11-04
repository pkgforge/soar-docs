# Package Management

Soar provides a comprehensive set of commands for managing packages on your system. This section covers all package management operations available in Soar.

## Core Operations

### [Installing Packages](./install.md)
Install packages using various methods:
- Basic installation: `soar install <package>`
- Family-specific: `soar install <family>/<package>`
- Collection-specific: `soar install <package>#<collection>`
- Multiple packages: `soar install package1 package2`
- Portable installation: `soar install <package> --portable`

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
- List all packages: `soar list`
- List from collection: `soar list <collection>`
- List installed packages: `soar info`

## Advanced Operations

### [Using Package Variants](./use.md)
Switch between different family of installed packages:
- Switch family: `soar use <family>/<package>`

### [Running Packages](./run.md)
Execute packages without installation:
- Run package: `soar run <package> [args]`

### [Viewing Package Logs](./logs.md)
View detailed package information:
- View build logs: `soar logs <package>`