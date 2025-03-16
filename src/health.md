# Health

Soar's health check command is designed to quickly identify potential issues
with your soar installation, missing binaries, broken packages, and broken
symlinks.

## Usage

To check for soar health, run:
```sh
soar health
```

### **Functionality**
When executed, this command:
- Checks if the Soar binary path is included in the `PATH` environment variable.
- Lists **broken packages** (incomplete package installations).
- Lists **broken symlinks** (dangling symlinks created by Soar that no longer point to valid files).

### **Output**
- If no issues are found, it reports a **healthy** system.
- If issues are detected, it provides detailed output, including:
  - A list of **broken packages** with their package names, and install paths.
  - A list of **broken symlinks**.
  - Suggested commands to **fix** these issues.

### **Fixing Issues**
- **Remove broken packages**  
  Run:  
  ```sh
  soar clean --broken
  ```
- **Remove broken symlinks**  
  Run:  
  ```sh
  soar clean --broken-symlinks
  ```

### **Example Usage**
```sh
$ soar health
```

#### **Example Output (No Issues)**
```
No broken packages found.
No broken symlinks found.
```

#### **Example Output (With Issues)**
```
[WARN] /home/user/.local/share/soar/bin is not in PATH. Please add it to PATH to use installed binaries.

Broken Packages (2):
cat#test: /home/user/.local/share/soar/packages/cat-test-q1235
ls#test: /home/user/.local/share/soar/packages/ls-test-q2345
Broken packages can be uninstalled using command: soar clean --broken

Broken Symlinks (1):
/home/user/.local/bin/ls
/home/user/.local/share/applications/hello-soar.desktop
Broken symlinks can be removed using command: soar clean --broken-symlinks
```
