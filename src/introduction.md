# Introduction

## What is Soar?

Soar is a fast, modern, bloat-free distro-independent package manager that just works. It supports static binaries, AppImages, and other portable formats.

> **Note:** Soar is designed to work seamlessly across all Linux distributions, providing a consistent package management experience regardless of your distro choice.

## Key Features

**Universal Package Support**

- **Binary Packages** - Direct installation of pre-compiled binaries from [bincache](https://github.com/pkgforge/bincache) and [pkgcache](https://github.com/pkgforge/pkgcache) repositories - no system compilation needed
- **AppImage Integration** - Smart desktop integration with automatic icon scaling and menu entries
- **FlatImage Support** - Seamless handling of [FlatImage](https://github.com/ruanformigoni/flatimage) packages
- **Extensible Architecture** - Support for [multiple package formats](https://github.com/Azathothas/Toolpacks-Extras/tree/main/Docs)

**Desktop Integration**

Soar strictly follows the [freedesktop.org specifications](https://specifications.freedesktop.org/) for seamless Linux desktop integration.

- **Automatic Desktop Entries** - Seamless integration with desktop menus
- **Icon Management** - Automatic scaling across all themes and resolutions
- **Smart Symlink Handling** - Intelligent binary path management
- **Portable Configurations** - Relocate apps and configs to any device

> **Tip:** By following freedesktop.org specifications, Soar ensures consistent behavior across different Linux desktop environments and distributions.

## Why Soar?

Soar is built for speed, security, and simplicity.

**Fast & Efficient**
- Pre-built binary cache - no unsafe local compilation
- Built with Rust for reliable, fast performance
- Parallel downloads and installations

**User-Friendly**
- Intuitive commands without memorizing manpages
- Clear, human-friendly error messages
- Real-time progress feedback

**Flexible & Portable**
- Multiple package formats: static binaries, AppImages, FlatImages, and more
- Fully portable configurations

**Well-Integrated**
- Comprehensive desktop environment integration
- Smart handling of icons, menus, and file associations

**Secure**
- All packages built on secure remote CI servers
- Build logs available for auditing via `soar log <package>`
- Cryptographic verification using BLAKE3 checksums and minisign signatures
- No arbitrary script execution on your machine

## Quick Start by Goal

Choose your goal to jump to the relevant documentation:

### I want to get started with Soar
- [Installation Guide](./installation.md) - Get Soar running on your system
- [Configuration Basics](./configuration.md) - Set up repositories and preferences
- [First Package Installation](./install.md) - Install your first package

### I want to manage packages
- [Install Packages](./install.md) - Add software to your system
- [Search & Discover](./search.md) - Find available packages
- [Update Packages](./update.md) - Keep software current
- [Remove Packages](./remove.md) - Uninstall what you don't need

### I want to customize my setup
- [Configuration Reference](./configuration.md) - All config options explained
- [Profile Management](./profiles.md) - Multiple isolated environments
- [Declarative Packages](./declarative.md) - Define packages in code

### I want to maintain my system
- [Health & Troubleshooting](./health.md) - Diagnose and fix issues
- [System Maintenance](./maintenance.md) - Updates, cleanup, and repairs
- [CLI Reference](./cli-reference.md) - Complete command documentation

### I want advanced features
- [Package Variants](./use.md) - Switch between versions
- [Run Without Installing](./run.md) - Execute packages directly
- [Download Utilities](./download.md) - Advanced download capabilities
