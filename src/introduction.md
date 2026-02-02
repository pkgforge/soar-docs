<div class="landing-hero">
<h1 class="landing-title">Soar</h1>
<p class="landing-tagline">Fast, modern, bloat-free package manager for Linux</p>
<p class="landing-subtitle">Install static binaries, AppImages, and portable packages across any distro — no root required.</p>
</div>

<div class="landing-install">

```sh
curl -fsSL https://soar.qaidvoid.dev/install.sh | sh
```

Then add to your PATH and install your first package:

```sh
echo 'export PATH="$HOME/.local/share/soar/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
soar install neovim
```

</div>

---

## Why Soar?

<div class="landing-features">
<div class="feature-card">
<h3>Universal Packages</h3>
<p>Static binaries, AppImages, FlatImages — one tool handles them all. Packages come from <a href="https://github.com/pkgforge/bincache">bincache</a> and <a href="https://github.com/pkgforge/pkgcache">pkgcache</a> repositories.</p>
</div>
<div class="feature-card">
<h3>Fast & Efficient</h3>
<p>Written in Rust. Pre-built binary cache means no local compilation. Parallel downloads and installs keep things moving.</p>
</div>
<div class="feature-card">
<h3>Distro-Independent</h3>
<p>Works the same on Debian, Arch, Fedora, Alpine, or anything else running Linux. No system dependencies.</p>
</div>
<div class="feature-card">
<h3>Secure by Design</h3>
<p>Packages built on remote CI servers with auditable build logs. Verified with BLAKE3 checksums and minisign signatures.</p>
</div>
<div class="feature-card">
<h3>Desktop Integration</h3>
<p>Follows <a href="https://specifications.freedesktop.org/">freedesktop.org</a> specs — automatic desktop entries, icon scaling, and menu integration.</p>
</div>
<div class="feature-card">
<h3>No Root Needed</h3>
<p>Everything installs to your home directory by default. No <code>sudo</code>, no system-level changes, fully portable.</p>
</div>
</div>

---

## Quick Navigation

<div class="landing-nav">
<div class="nav-card">
<h4>Getting Started</h4>
<ul>
<li><a href="./quick-start.html">Quick Start Guide</a></li>
<li><a href="./installation.html">Installation</a></li>
<li><a href="./configuration.html">Configuration</a></li>
</ul>
</div>
<div class="nav-card">
<h4>Package Management</h4>
<ul>
<li><a href="./install.html">Install Packages</a></li>
<li><a href="./search.html">Search & Discover</a></li>
<li><a href="./update.html">Update Packages</a></li>
<li><a href="./remove.html">Remove Packages</a></li>
</ul>
</div>
<div class="nav-card">
<h4>Advanced</h4>
<ul>
<li><a href="./profiles.html">Profiles</a></li>
<li><a href="./declarative.html">Declarative Packages</a></li>
<li><a href="./cli-reference.html">CLI Reference</a></li>
</ul>
</div>
<div class="nav-card">
<h4>Maintenance</h4>
<ul>
<li><a href="./health.html">Health & Diagnostics</a></li>
<li><a href="./maintenance.html">System Maintenance</a></li>
<li><a href="./releases.html">Release Notes</a></li>
</ul>
</div>
</div>
