# Profiles
Soar supports multiple installation profiles, allowing you to install and manage packages in different locations.
This is particularly useful when you want to maintain separate package sets for different purposes or environments.

## Profile Configuration
Each profile is defined in the configuration file under the [profile.<name>] section.
The minimal profile configuration requires:

```toml
[profile.<name>]
root_path = "/path/to/profile/root"
```

This will create `packages` directory inside the `root_path` where the packages will be installed.
Soar will also create `cache` directory inside the `root_path` if you use command that rely on `cache`.
It is not allowed to set `cache` path explicitly.

## Using Profile
You can specify which profile to use for any Soar command using the --profile flag:
```toml
soar --profile dev add curl
soar --profile testing add bat
```

If no profile is specified, Soar uses the `default_profile` defined in the configuration.

## Example Profile Configuration
Here's an example configuration with multiple profiles:
```toml
# Default profile for general use
[profile.default]
root_path = "~/.local/share/soar"

# Development profile for development tools
[profile.dev]
root_path = "~/dev/tools"
packages_path = "~/dev/tools/packages"

# Testing profile for experimental packages
[profile.testing]
root_path = "~/testing/soar"
```

<div class="warning">
  The same installation and metadata database files are shared among all profiles.
  Do not to change existing profile names as it might break things, unless
  you haven't installed anything yet. But, you can add however many new profiles you would like to.
  You will be able to change profile names using soar CLI once profile naming feature is introduced
  which will move the packages and database accordingly as you update profile names.
</div>
