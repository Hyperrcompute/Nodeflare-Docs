---
id: install-mac
title: Install Hypercompute on Mac
sidebar_label: Hypercompute on Mac
sidebar_position: 3
---

# Install Hypercompute on Mac

Get started with the decentralized GPU marketplace on macOS. Whether you want to earn cryptocurrency by sharing your Mac's GPU power or access distributed computing resources for your projects, follow these simple steps.

## Mac GPU Marketplace Overview

**For Mac Users:**
- **M1/M2/M3 Mac Owners**: Share your Apple Silicon GPU power and earn crypto
- **Intel Mac Users**: Access powerful distributed GPUs for AI training, rendering, and computation
- **Developers**: Seamlessly integrate GPU marketplace into your workflow

## Step 1: Download

Visit the [Hypercompute Releases](https://github.com/hypercompute/releases) page and download the appropriate macOS file:

- **Apple Silicon (M1/M2/M3)**: `hypercompute-macos-arm64`
- **Intel Mac**: `hypercompute-macos-x64`

💡 **Not sure which Mac you have?** Click Apple menu → About This Mac to check your processor type.

## Step 2: Make It Executable

Open Terminal in the folder where you downloaded the file (usually Downloads), then run:

```bash
chmod +x hypercompute-macos-*
```

## Step 3: First Run & Setup

Run Hypercompute to verify installation:

```bash
./hypercompute-macos-arm64 --help
```

*Replace with `hypercompute-macos-x64` if you downloaded the Intel version*

## Step 4: Choose Your Path

### 🖥️ GPU Provider (Earn Crypto)
Share your Mac's GPU power with the network:

```bash
./hypercompute-macos-arm64 provide --setup
```

**Requirements for Mac GPU Providers:**
- macOS 12.0+ (Monterey or newer)
- 8GB+ unified memory (16GB+ recommended)
- Stable internet (10+ Mbps upload)
- Active power source (providers should stay plugged in)

### 💻 GPU Consumer (Access Computing Power)
Request distributed GPU resources:

```bash
./hypercompute-macos-arm64 marketplace --browse
./hypercompute-macos-arm64 request --gpu-type a100 --duration 2h
```

## Step 5: Optional - Global Installation

For easier access from anywhere, install globally:

```bash
sudo mv hypercompute-macos-* /usr/local/bin/hypercompute
sudo chmod +x /usr/local/bin/hypercompute
```

Now you can run `hypercompute` from any directory!

## Mac-Specific Features

### Apple Silicon Advantages
- **Metal Performance Shaders**: Optimized GPU compute for M1/M2/M3 chips
- **Unified Memory**: Efficient memory sharing between CPU and GPU
- **Energy Efficient**: Lower power consumption while providing GPU services

### Wallet Integration
```bash
hypercompute wallet --create
hypercompute wallet --connect-metamask
```

### System Monitoring
```bash
hypercompute system --gpu-temp
hypercompute system --performance
```

## Troubleshooting

### Gatekeeper Security Warning
If macOS blocks the app:
1. Right-click the file → **Open**
2. Click **Open** in the security dialog
3. Or go to System Preferences → Security & Privacy → Allow

### Permission Issues
```bash
sudo chown $(whoami) hypercompute-macos-*
chmod +x hypercompute-macos-*
```

### GPU Not Detected (Apple Silicon)
```bash
hypercompute system --check-metal
```

### GPU Not Detected (Intel Mac)
Ensure you have discrete graphics:
```bash
system_profiler SPDisplaysDataType
```

## Performance Optimization

### For M1/M2/M3 Providers
```bash
# Enable high-performance mode
sudo pmset -c highperf 1

# Check thermal state
hypercompute system --thermal-status
```

### Memory Management
```bash
# Check available GPU memory
hypercompute system --gpu-memory
```

## macOS Integration

### Menu Bar Widget
```bash
hypercompute ui --menubar
```

### Background Service
```bash
hypercompute service --install
hypercompute service --start
```

### Notifications
Enable desktop notifications for marketplace updates:
```bash
hypercompute settings --notifications on
```

---

**🍎 Mac Pro Tip:** Apple Silicon Macs are particularly efficient for AI workloads - perfect for earning while your computer is idle.

**🔋 Battery Note:** GPU providing mode automatically pauses when on battery power to preserve your Mac's battery life.