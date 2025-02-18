# Maintenance

This section covers essential features that are fundamental to Soar's operation and maintenance.

## Self Management

Soar provides commands to manage the package manager itself, including updating
to newer versions and complete uninstallation.

### Update Soar
```sh
soar self update
```

Updates Soar to the latest version by downloading pre-compiled binaries from GitHub releases.

You can control which release channel to use through environment variables:

- `SOAR_NIGHTLY=1` Switches to the nightly (development) channel
- `SOAR_RELEASE=1` Switches to the stable release channel

These environment variables take precedence over the currently installed channel. For example:

```sh
# Update within current channel
soar self update

# Switch to and update from nightly channel
SOAR_NIGHTLY=1 soar self update

# Switch to and update from stable channel
SOAR_RELEASE=1 soar self update
```

### Uninstall Soar

```sh
soar self uninstall
```
Completely removes Soar from your system
