# Introduction

## What is Soar?
Soar is a fast Linux package manager that doesn't suck. Works with static binaries, AppImages, and other portable stuff.

<center>
    <img src="https://raw.githubusercontent.com/pkgforge/soar/refs/heads/main/icons/hicolor/scalable/apps/soar.svg" alt="soar" width="256"/>
</center>

## Key Features

### Universal Package Support
- **[Binary Packages](https://github.com/Azathothas/Toolpacks)**: Direct installation of pre-compiled binaries - no system compilation needed, only bandwidth and storage
- **[AppImage](https://github.com/AppImage/AppImageKit) Integration**: Smart desktop integration with automatic icon scaling, menu entries, and runtime fixes
- **[FlatImage](https://github.com/ruanformigoni/flatimage) Support**: Seamless handling of Flatpak-style packages
- **[Multiple Format Handling](https://github.com/Azathothas/Toolpacks-Extras/tree/main/Docs)**: Extensible architecture supporting various package formats

### Desktop Integration
Soar strictly follows the [freedesktop.org specifications](https://specifications.freedesktop.org/) for seamless Linux desktop integration.
- **Automatic Desktop Entries**: Seamless integration with desktop menus through properly configured desktop files and icons
- **Icon Management**: Automatic scaling and integration of application icons across all system themes and resolutions
- **Smart Symlink Handling**: Intelligent binary path management
- **Portable Configurations**: Take your entire setup anywhere - relocate all apps and their configurations to any device

<div class="warning">
    By following freedesktop.org specifications, Soar ensures consistent behavior across different Linux desktop environments and distributions.
</div>

## Why Choose Soar?

Soar stands out from traditional package managers by offering:

1. **Speed and Efficiency**
   - Uses pre-built binary cache - no unsafe local compilation or shell scripts running on your machine
   - Built with Rust for reliable, fast performance instead of shell script patchworks
   - Parallel downloads and installations

2. **User Experience**
   - Intuitive commands that make sense without memorizing manpages
   - Clear, human-friendly error messages instead of cryptic codes
   - Real-time progress feedback during operations

3. **Flexibility**
   - Support for multiple formats: static binaries, AppImages, FlatImages, AppBundles, and more
   - Fully portable configurations - take your entire setup anywhere

4. **Integration**
   - Comprehensive desktop environment integration across all package formats
   - Smart handling of icons, menus, and file associations
   - Intelligent runtime fixes and compatibility layers

5. **Security**
   - All packages built on secure remote CI servers with transparent build logs
   - Build logs available for auditing via `soar log <package>`
   - Cryptographic verification using BLAKE3 checksums for all downloads
   - No arbitrary script execution on your machine

<div class="warning">
    Unlike traditional package managers that run arbitrary build scripts on your system, Soar uses pre-built binaries that are compiled in transparent, auditable environments.
</div>
