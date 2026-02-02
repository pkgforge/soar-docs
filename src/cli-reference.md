# CLI Reference

Global CLI options available in Soar.

## Quick Reference

| Option | Short | Description |
|--------|-------|-------------|
| `--verbose` | `-v` | Increase output verbosity |
| `--quiet` | `-q` | Suppress all output except errors |
| `--json` | `-j` | Output results in JSON format |
| `--no-color` | - | Disable colored output |
| `--no-progress` | - | Disable progress bars |
| `--profile` | `-p` | Use a specific profile |
| `--config` | `-c` | Specify custom config file path |
| `--proxy` | `-P` | Set HTTP/HTTPS proxy server |
| `--header` | `-H` | Add custom HTTP headers |
| `--user-agent` | `-A` | Set custom User-Agent string |
| `--system` | `-S` | Operate in system-wide mode (requires root) |

---

## Verbosity Control

### `--verbose` / `-v`

Increase output verbosity. Can be used multiple times (`-vv`, `-vvv`).

```bash
soar -v install neovim
soar -vv sync
```

### `--quiet` / `-q`

Suppress all non-error output.

```bash
soar -q install nodejs
```

---

## Output Format

### `--json` / `-j`

Output results in JSON format for parsing.

```bash
soar --json query neovim
soar --json search python | jq '.[] | .name'
```

---

## Display Options

### `--no-color`

Disable colored output.

```bash
soar --no-color install ffmpeg
```

### `--no-progress`

Disable progress bars.

```bash
soar --no-progress sync > sync.log
```

---

## Configuration

### `--profile` / `-p`

Use a specific profile.

```bash
soar --profile work install vscode
```

Profiles defined in `~/.config/soar/config.toml`:

```toml
[profile.work]
root_path = "/opt/soar-work"
```

### `--config` / `-c`

Specify custom configuration file path.

```bash
soar --config /path/to/config.toml install neovim
```

---

## Network Options

### `--proxy` / `-P`

Set HTTP/HTTPS proxy server.

```bash
soar --proxy http://proxy.example.com:8080 install python
soar --proxy http://user:pass@proxy.example.com:8080 sync
```

### `--header` / `-H`

Add custom HTTP headers.

```bash
soar --header "Authorization: Bearer mytoken" sync
soar -H "X-Api-Key: secret123" install package
```

### `--user-agent` / `-A`

Set custom User-Agent string.

```bash
soar --user-agent "MyApp/1.0" install python
```

---

## System Mode

### `--system` / `-S`

Operate in system-wide mode (requires root).

```bash
sudo soar --system install docker
```

**System paths:**
- Config: `/etc/soar/config.toml`
- Root: `/opt/soar`
- Binaries: `/opt/soar/bin`

---

## Common Combinations

**Scripting:**
```bash
soar --json --quiet install python
```

**Debugging:**
```bash
soar -vv --no-progress install neovim
```

**CI/CD with Proxy:**
```bash
soar --json --proxy http://proxy.corp.com:8080 sync
```

**System Installation:**
```bash
sudo soar --system install docker
```

---

## Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `HTTP_PROXY` | Set HTTP/HTTPS proxy | `export HTTP_PROXY=http://proxy:8080` |
| `SOAR_CONFIG` | Custom config file path | `export SOAR_CONFIG=/path/to/config.toml` |
| `NO_COLOR` | Disable colored output | `export NO_COLOR=1` |
| `SOAR_ROOT` | Override root directory | `export SOAR_ROOT=/custom/soar` |
| `SOAR_BIN` | Override bin path | `export SOAR_BIN=/custom/bin` |
| `SOAR_DB` | Override database path | `export SOAR_DB=/custom/db` |
| `SOAR_CACHE` | Override cache path | `export SOAR_CACHE=/custom/cache` |
| `SOAR_PACKAGES` | Override packages path | `export SOAR_PACKAGES=/custom/packages` |
| `SOAR_REPOSITORIES` | Override repositories path | `export SOAR_REPOSITORIES=/custom/repos` |
| `SOAR_PORTABLE_DIRS` | Override portable dirs path | `export SOAR_PORTABLE_DIRS=/custom/portable` |
| `SOAR_STEALTH` | Use default config without reading file | `export SOAR_STEALTH=1` |
| `SOAR_NIGHTLY` | Force nightly update channel | `export SOAR_NIGHTLY=1` |

---

## See Also

- [Configuration](./configuration.md) - Configuration file reference
- [Profiles](./profiles.md) - Managing multiple installation profiles
- [Installation](./installation.md) - Installation guide
- [Health & Diagnostics](./health.md) - Health check and debugging
