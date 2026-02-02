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

Completely removes Soar from your system. This command will:

- Remove the Soar binary from your system
- Prompt for confirmation before proceeding
- Preserve your configuration and packages by default
- Offer options to remove user data if desired

> **Warning:** This action is irreversible. Consider backing up your configuration (`~/.config/soar/config.toml`) and packages (`~/.local/share/soar/packages`) before uninstalling.

#### Uninstall Options

```sh
# Uninstall Soar but keep configuration and packages
soar self uninstall

# After uninstallation, manually remove data if desired:
rm -rf ~/.config/soar
rm -rf ~/.local/share/soar
```

## Maintenance Best Practices

### Regular Health Checks

Run health checks periodically to ensure your Soar installation is in good condition:

```sh
# Weekly health check
soar health
```

**What to look for:**
- PATH status (add Soar's binary directory to your PATH if not configured)
- Broken packages (incomplete installations that should be cleaned up)
- Broken symlinks (dangling symlinks from removed packages; note: only `-soar` suffixed files are detected in desktop/icons directories)

### Cache Management

Package caches can grow large over time. Regular cleanup helps maintain disk space:

```sh
# Clean everything (cache, broken packages, broken symlinks)
soar clean

# Clean only the cache
soar clean --cache

# Check cache size before cleaning
du -sh ~/.local/share/soar/cache
```

**Note**: The `--cache` flag deletes the entire cache directory.

**Recommended schedule:**
- **Monthly**: If you install packages frequently
- **Quarterly**: For moderate usage
- **As needed**: When disk space is low

### Sync Repository Metadata

Keep your package metadata up-to-date to see the latest versions:

```sh
# Sync before searching or installing
soar sync
```

**Recommended schedule:**
- **Automatic**: Let Soar sync based on repository `sync_interval` settings (default: 3 hours)
- **Manual**: Before searching for new packages or running updates

Note: Repositories configured with `sync_interval = "always"` will sync every time `soar sync` is run.

### Cleanup After Failed Installations

Failed installations can leave broken packages and symlinks:

```sh
# Check for issues
soar health

# Clean up if issues found
soar clean --broken
soar clean --broken-symlinks
```

**When to run:**
- After any installation failure
- After system crashes during installations
- Before major system updates

## Scheduling Recommendations

### Automated Maintenance

Set up automated maintenance tasks using cron (Linux):

#### Weekly Health Check (cron)

```bash
# Add to crontab with: crontab -e
# Run every Sunday at 2 AM
0 2 * * 0 /usr/bin/soar health > /tmp/soar-health.log 2>&1
```

#### Monthly Cache Cleanup (cron)

```bash
# Add to crontab with: crontab -e
# Run on the 1st of every month at 3 AM
0 3 1 * * /usr/bin/soar clean --cache > /tmp/soar-clean.log 2>&1
```

#### Systemd Timer (Linux with systemd)

Create `/etc/systemd/system/soar-health.service`:

```ini
[Unit]
Description=Soar Health Check
After=network-online.target

[Service]
Type=oneshot
ExecStart=/usr/bin/soar health
Nice=19
IOSchedulingClass=idle
```

Create `/etc/systemd/system/soar-health.timer`:

```ini
[Unit]
Description=Weekly Soar Health Check
Requires=soar-health.service

[Timer]
OnCalendar=weekly
Persistent=true

[Install]
WantedBy=timers.target
```

Enable the timer:

```bash
sudo systemctl enable --now soar-health.timer
```

### Manual Maintenance Checklist

Perform these tasks manually every 1-3 months:

1. **Health Check**
   ```sh
   soar health
   ```
   - Review any warnings or errors
   - Fix broken packages/symlinks if found

2. **Update Soar**
   ```sh
   soar self update
   ```
   - Keep Soar itself up-to-date
   - Review changelog for new features

3. **Clean Cache**
   ```sh
   soar clean --cache
   ```
   - Free up disk space
   - Ensure fresh downloads on next install

4. **Review Packages**
   ```sh
   soar list-installed
   ```
   - Identify unused packages
   - Remove packages you no longer need

5. **Update Packages**
    ```sh
    soar update
    ```
    - Keep installed packages current
    - Review changelogs for breaking changes

## Maintenance Schedule Summary

| Task | Frequency | Command | Purpose |
|------|-----------|---------|---------|
| Health Check | Weekly | `soar health` | Identify issues early |
| Full Clean | Monthly | `soar clean` | Clean cache, broken packages, and symlinks |
| Sync Metadata | Automatic | `soar sync` | Get latest package info |
| Update Soar | Quarterly | `soar self update` | Get latest features |
| Broken Cleanup | As needed | `soar clean --broken --broken-symlinks` | Fix failed installs |
| Full Maintenance | Quarterly | All commands above | Complete system checkup |

## Troubleshooting Maintenance Issues

### Sync Failures

If `soar sync` fails:

1. Check network connectivity
2. Verify repository URLs in `~/.config/soar/config.toml`
3. Try syncing individual repositories
4. Check if repository is temporarily unavailable

### Cache Won't Clear

If `soar clean --cache` doesn't free space:

1. Check if other processes are using cached files
2. Manually remove cache directory: `rm -rf ~/.local/share/soar/cache/*`
3. Verify Soar has write permissions

### Persistent Broken Packages

If `soar health` continues reporting broken packages:

1. Try reinstalling the broken package: `soar install --force <package>`
2. If that fails, remove and reinstall: `soar remove <package> && soar install <package>`
3. Check if the package version is available in your repositories
4. Report the issue to the repository maintainer
