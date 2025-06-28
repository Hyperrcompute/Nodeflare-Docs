---
id: Install-executablefile
title: Hypercompute Executable (Windows, Linux, Mac)
sidebar_label: Hypercompute Executable
sidebar_position: 2
---

# Hypercompute Executable Installation

Get instant access to the decentralized GPU marketplace without installing Node.js. The Hypercompute executable works natively on Windows, Mac, and Linux - perfect for quick setup and immediate access to distributed computing resources.

## Why Choose the Executable?

- **Zero Dependencies**: No Node.js installation required
- **Instant Setup**: Download and run immediately
- **Full Functionality**: Complete access to GPU marketplace features
- **Lightweight**: Optimized binaries for each platform
- **Offline Capable**: Works without internet for local operations

## Download

Visit the [latest release](https://github.com/hypercompute/releases) on GitHub and download the appropriate file for your operating system:

### Available Downloads:
- **Windows**: `hypercompute-win-x64.exe` (64-bit) / `hypercompute-win-arm64.exe` (ARM64)
- **macOS**: `hypercompute-macos-x64` (Intel) / `hypercompute-macos-arm64` (Apple Silicon)
- **Linux**: `hypercompute-linux-x64` (64-bit) / `hypercompute-linux-arm64` (ARM64)

**Choose the correct architecture** for optimal performance on your system.

## Installation Steps

### macOS & Linux

1. **Make the file executable:**
```bash 
chmod +x hypercompute*
```

2. **Run Hypercompute:**
```bash 
./hypercompute-linux-x64 --help
```
*Replace with your specific filename (e.g., `hypercompute-macos-arm64` for Apple Silicon Macs)*

3. **Optional - Add to PATH for global access:**
```bash
sudo mv hypercompute-linux-x64 /usr/local/bin/hypercompute
```

### Windows

1. **Open Command Prompt or PowerShell**
2. **Navigate to the download folder:**
```cmd
cd Downloads
```
3. **Run the executable:**
```cmd
hypercompute-win-x64.exe --help
```

## Verify Installation

If you see the help menu with commands like:
- `provide` - Start sharing GPU resources
- `request` - Access distributed computing power
- `marketplace` - Browse available GPUs
- `wallet` - Manage cryptocurrency payments

Your installation is successful! 🎉

## Quick Start Commands

### For GPU Providers (Earn Crypto):
```bash
./hypercompute provide --init
./hypercompute provide --start
```

### For GPU Consumers (Access Computing):
```bash
./hypercompute marketplace --list
./hypercompute request --gpu-type rtx4090 --duration 1h
```

### Wallet Management:
```bash
./hypercompute wallet --create
./hypercompute wallet --balance
```

## Platform-Specific Notes

### Windows
- **Windows Defender**: May flag the executable initially - add to exclusions if needed
- **PowerShell**: Use PowerShell for better terminal experience
- **Admin Rights**: Required for GPU provider mode

### macOS
- **Gatekeeper**: Right-click → "Open" for first run on unsigned builds
- **Rosetta**: Intel builds work on Apple Silicon via Rosetta 2
- **GPU Access**: Metal Performance Shaders supported for Apple Silicon

### Linux
- **GPU Drivers**: Ensure NVIDIA/AMD drivers are properly installed
- **CUDA**: Required for NVIDIA GPU providers
- **Permissions**: May need to add user to `video` group for GPU access

## Troubleshooting

**Permission Denied (Linux/Mac):**
```bash
chmod +x hypercompute*
```

**Windows Security Warning:**
- Right-click executable → Properties → Unblock
- Or add to Windows Defender exclusions

**GPU Not Detected:**
```bash
./hypercompute system --check-gpu
```

---

**🚀 Performance Tip:** The executable version typically uses 30% less memory than the NPM version and starts faster.

**🔐 Security:** All executables are signed and verified. Check SHA256 hashes on the releases page for additional security.