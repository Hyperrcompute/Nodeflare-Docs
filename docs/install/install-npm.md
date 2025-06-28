---
id: Install-npm
title: Install via NPM
sidebar_label: Install via NPM
sidebar_position: 1
---

# Install Hypercompute via NPM

The easiest way to start using Hypercompute's decentralized GPU marketplace is by installing it through NPM (Node Package Manager). Get instant access to distributed computing power or start earning by sharing your GPU resources.

## What is Hypercompute?

Hypercompute is a decentralized GPU marketplace that connects:
- **GPU Providers**: Earn cryptocurrency by sharing your unused GPU computing power
- **GPU Consumers**: Access affordable, distributed computing resources for AI training, rendering, mining, and more

## Step 1 - Install Node.js

Hypercompute requires Node.js version 16 or higher. Choose your installation method:

### Linux/Mac (Recommended)
Use NVM (Node Version Manager) for easy version management:

```bash 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Restart your terminal, then install Node.js:

```bash
nvm install 20
nvm use 20
```

### Windows
Download Node.js directly from the official website: [nodejs.org](https://nodejs.org/en/download)

## Step 2 - Install Hypercompute CLI

After installing Node.js, install the Hypercompute command-line interface:

```bash
npm install -g hypercompute
```

**Linux users:** Add `sudo` if you encounter permission issues:

```bash
sudo npm install -g hypercompute
```

**Windows users:** If you face permission issues, run Command Prompt as Administrator or execute:

```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Step 3 - Verify Installation

Confirm Hypercompute was installed correctly:

```bash
hypercompute --help
```

You should see available commands for:
- `hypercompute provide` - Start sharing your GPU resources
- `hypercompute request` - Request GPU computing power
- `hypercompute wallet` - Manage your cryptocurrency wallet
- `hypercompute marketplace` - Browse available GPU resources

If you see the command list, you're ready to go! 🎉

## Next Steps

**For GPU Providers:**
```bash
hypercompute provide --setup
```

**For GPU Consumers:**
```bash
hypercompute marketplace --browse
```

## System Requirements

### For GPU Providers:
- NVIDIA GPU with CUDA support (GTX 1060+ or RTX series recommended)
- Minimum 4GB GPU memory
- Stable internet connection (10+ Mbps upload)
- 50GB+ free disk space

### For GPU Consumers:
- Any system with Node.js support
- Cryptocurrency wallet for payments

---

**💡 Pro Tip:** Join our [Discord community](https://discord.gg/hypercompute) for real-time support and marketplace updates.

**🔒 Security Note:** Hypercompute uses blockchain technology to ensure secure, transparent transactions between GPU providers and consumers.