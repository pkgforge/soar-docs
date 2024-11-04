# Use Package From Different Family

Soar allows you to switch between different family of installed packages without uninstalling one. This feature is particularly useful when you need to switch between different family providing the same package.

<div>
    <video src="/videos/use.mp4" controls></video>
</div>

## Usage

To switch to a package from different family:
```sh
soar use <family>/<package>
```

Example: Switch to coreutils-glibc
```sh
soar use coreutils-glibc/cat
```

Example: Switch to busybox
```sh
soar use busybox/cat
```
