# Update Packages

Soar provides efficient commands to keep your packages up to date. This guide covers all update operations and scenarios.

<div>
    <video src="/videos/update.mp4" controls></video>
</div>

## Basic Update

To update all installed packages to their latest versions:
```sh
soar update
```

To update specific packages:
```sh
soar update <package1> <package2>
```

Example: Update Specific Packages
```sh
soar update 7z bat
```

## Automated Updates

While Soar doesn't include a built-in update scheduler, you can automate updates using system tools:

### Using Cron
```sh
# Add to crontab
0 0 * * * soar update
```

### Using Systemd Timer
```ini
[Unit]
Description=Daily Soar Update

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

<div class="warning">
    Automated updates should be used with caution in production environments.
</div>
