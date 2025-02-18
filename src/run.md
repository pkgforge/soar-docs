# Run Packages

Soar allows you to run packages without installing them permanently on your system. While the package files are still downloaded and stored, they aren't integrated into your system PATH or desktop environment. This feature is perfect for trying out applications or running one-off tasks.

## Basic Usage

To run a package:

```sh
soar run <package>
```

# Example: Run feroxbuster
```sh
soar run feroxbuster
```

<div class="warning">
    Unlike temporary execution, running a package does store the files on disk. This approach provides faster subsequent runs while maintaining system organization.
</div>

## Storage Location

Soar stores "run-only" packages in its managed directory structure:
- Not in `/tmp` (to avoid memory pressure on systems with tmpfs)
- Separate from permanently installed packages
- Managed alongside other Soar data
- Preserved for future runs

<div class="warning">
    This approach ensures that large packages don't fill up memory-based temporary storage while still maintaining separation from system-installed packages.
</div>
