# Use Package From Different Family

Soar allows you to switch between different family of installed packages without uninstalling one. This feature is particularly useful when you need to switch between different family providing the same package.

## Usage

To list out installed `cat` packages and switch:
```sh
soar use cat
```

It'll list out all the `cat` packages installed from different `pkg_id`, `version` or `repositories` and let you choose one to use.
The one you choose will be linked to `bin` path alongside its `provides`.
