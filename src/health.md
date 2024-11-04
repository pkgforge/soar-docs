# Health Check

Soar provides a health check system to verify the integrity of your package installations and system configuration. This helps identify and resolve potential issues before they become problems. The health checks are performed to ensure that AppImages and other self-contained executables can function properly on the system. These checks are critical for applications that rely on user namespaces and FUSE (Filesystem in Userspace) to operate in a confined environment without requiring root privileges.

## Basic Usage

To run a health check:

```sh
soar health
```