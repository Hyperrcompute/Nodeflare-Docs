---
id: usage-connect
title: Connect
sidebar_label: User
sidebar_position: 6
---

# Connect to GPU Resources

Access powerful distributed computing resources instantly through Hypercompute's marketplace. No complex setup required - just purchase, connect, and start computing.

## How It Works

Hypercompute connects you to GPU providers worldwide through a simple 3-step process:

1. **Browse & Purchase** - Select GPU resources from the marketplace
2. **Receive Access Key** - Get your secure connection credentials
3. **Connect & Compute** - Enter your key and start working immediately

## Step 1: Browse the Marketplace

Visit [hypercompute.com](https://hypercompute.com) and explore available GPU resources:

### Available GPU Types
- **RTX 4090** - 24GB VRAM, perfect for AI training
- **RTX 3080** - 10GB VRAM, great for rendering and development
- **Tesla V100** - 32GB VRAM, enterprise-grade performance
- **Apple M2 Ultra** - 76-core GPU, optimized for macOS workflows

### Pricing Examples
| GPU Type | Price per Hour | Best For |
|----------|---------------|----------|
| RTX 4090 | 50 Sats/min | AI/ML Training, Research |
| RTX 3080 | 30 Sats/min | Game Development, 3D Rendering |
| Tesla V100 | 80 Sats/min | Enterprise Workloads |
| M2 Ultra | 45 Sats/min | Video Editing, Development |

### Selection Criteria
- **Performance Requirements** - Choose based on VRAM and compute needs
- **Duration** - Rent from 15 minutes to 11 days
- **Location** - Select providers near your location for lower latency
- **Reliability** - Check provider uptime and user ratings

## Step 2: Purchase & Payment

### Lightning Fast Payments
Hypercompute uses Bitcoin Lightning Network for instant, low-cost payments:

- **Instant Transactions** - Payment confirmed in seconds
- **Low Fees** - Minimal transaction costs
- **Global Access** - Works anywhere in the world
- **Privacy** - No personal information required

### Purchase Process
1. Select your desired GPU configuration
2. Choose rental duration (15 mins - 11 days)
3. Review total cost and provider details
4. Click **"Rent"** button
5. Complete Lightning payment
6. Receive your **Secret Access Key**

## Step 3: Connect to Your GPU

### Receive Your Secret Key

After successful payment, you'll see a modal with your unique access credentials:

```
┌──────────────────────────────────────────────────────────────┐
│                    🔐 Your Secret Key                        │
│                                                              │
│  Please store this key safely. You won't be able to see     │
│  it again!                                                   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ demo_key_89fd199803cd2aaf4b5cdba373a970a9e6a08f86   │ 📋 │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
│  This key grants access to your account's sensitive data.   │
│  If you lose this key, you'll need to generate a new one.   │
│                                                              │
│              [Save the Key]                                  │
└──────────────────────────────────────────────────────────────┘
```

### Access Your Terminal

1. **Save Your Key** - Copy and securely store your secret key
2. **Open Terminal Interface** - Navigate to the provided terminal URL
3. **Enter Access Key** - Paste your key in the connection field
4. **Start Computing** - Instant access to your rented GPU

### Terminal Access Flow

**Connection Interface:**
```
┌──────────────────────────────────────────────────────────────┐
│                Hypercompute GPU Terminal                     │
│                                                              │
│  Enter your access key to connect to your rented GPU:       │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │ [Paste your secret key here...]                       │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│                    [Connect to GPU] ➡️                      │
│                                                              │
│  🔒 Your connection is encrypted and secure                  │
└──────────────────────────────────────────────────────────────┘
```

**After Successful Connection:**
```
┌──────────────────────────────────────────────────────────────┐
│              ✅ Connected to GPU Provider                    │
│                                                              │
│  GPU: RTX 4090 (24GB VRAM)          Time Remaining: 2h 45m  │
│  Provider: gpu-provider-ny-01        Location: New York, US  │
│  Connection: Encrypted P2P           Latency: 23ms           │
│                                                              │
│  📊 Resource Usage:                  💰 Cost:               │
│  GPU: 0% | Memory: 0GB/24GB         Current: 0.85 sats      │
│  CPU: 2% | RAM: 1.2GB/32GB          Total: 45.2 sats        │
│                                                              │
│  🖥️  Terminal ready - Start your workload!                  │
└──────────────────────────────────────────────────────────────┘

user@hypercompute-gpu:~$ 
```

## What You Get

### Full Terminal Access
- **Root permissions** on your allocated container
- **Pre-installed tools** (Docker, Python, CUDA, etc.)
- **GPU drivers** ready for immediate use
- **Network access** for downloading datasets and models

### Real-time Monitoring
- **Resource usage** tracking (GPU, CPU, memory)
- **Cost monitoring** with real-time billing
- **Performance metrics** and optimization suggestions
- **Session time** remaining display

### File Management
- **Upload/download** files to your session
- **Persistent storage** during your rental period
- **Backup options** for important work
- **Share results** with team members

## Connection Security

### Peer-to-Peer Encryption
- **End-to-end encryption** between you and the provider
- **No middleman** - direct connection to GPU hardware
- **Zero-knowledge** - Hypercompute cannot see your work
- **Secure channels** using industry-standard protocols

### Access Control
- **Time-limited keys** - Automatic expiration after rental period
- **Single-use sessions** - Each key works for one connection only
- **Provider verification** - All providers are vetted and verified
- **Abuse protection** - Automatic monitoring for malicious activity

## Troubleshooting

### Connection Issues

**Invalid Key Error:**
- Verify you copied the complete key
- Check if your rental period has expired
- Ensure you're using the correct terminal URL

**Slow Connection:**
- Try connecting to a provider in a different region
- Check your internet connection speed
- Contact support if latency exceeds 100ms

**GPU Not Available:**
- Your provider may be temporarily offline
- You'll receive automatic refund for unusable time
- Alternative providers will be suggested

### Payment Issues

**Lightning Payment Failed:**
- Ensure your Lightning wallet has sufficient balance
- Check if your wallet supports the payment amount
- Try again with a different Lightning wallet

**Refund Requests:**
- Unused time is automatically refunded
- Provider downtime results in credit compensation
- Contact support for billing disputes

---

**🚀 Quick Start:** Most users are computing within 60 seconds of payment completion!

**💡 Pro Tip:** Save frequently used provider keys as bookmarks for faster reconnection to trusted hardware.