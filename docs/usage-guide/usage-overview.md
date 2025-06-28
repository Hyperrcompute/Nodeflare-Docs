---
id: usage-overview
title: Usage Overview
sidebar_label: Usage Overview
sidebar_position: 4
---

# Using Hypercompute

Hypercompute is a peer-to-peer remote compute execution platform that enables you to deploy lightweight, ephemeral Docker containers over a decentralized network. Whether you're providing compute resources or consuming them, Hypercompute makes distributed computing accessible and secure.

## 🚀 Key Capabilities

**For Compute Providers (Earn Crypto):**
- Share your device's computing power with the network
- Run secure, isolated Docker containers for clients
- Earn cryptocurrency for providing resources
- Set custom pricing and availability schedules

**For Compute Consumers (Access Power):**
- Deploy ephemeral containers on distributed hardware
- Access powerful GPU and CPU resources on-demand
- Pay only for actual usage time
- Scale workloads across multiple providers

**Core Features:**
- 🔐 Secure private connection strings (like SSH keys)
- 🐳 Ephemeral Docker containers with configurable lifetimes
- 🌐 Web UI access over TCP tunnels via hyperdht
- ⏱️ Flexible container duration control (`--time`)
- 💥 Force container deployment (`--force`)
- 🧪 Live mode with real-time data streaming (`--live`)

## Getting Started

### 1. Start as a Compute Provider

Begin earning by sharing your compute resources:

```bash
hypercompute <PRIVATE_CONNECTION_STRING> --port <PORT>
```

**Example:**
```bash
hypercompute 89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3efee062 --port 3000
```

You'll see confirmation that your provider node is active:

```
[INFO] Server started
┌──────────────────────────────────────────────────────────────────────────────┐
│                        Hypercompute Provider Node Started ⛵️                  │
│                  Connection Mode: Private Connection String                  │
│                 Access dashboard on http://127.0.0.1:3000/                  │
│                              Connection string:                              │
│         89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3efee062         │
│   NOTE: TREAT PRIVATE CONNECTION STRINGS LIKE SSH KEYS - KEEP THEM SECURE   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2. Request Compute Resources

Deploy containers on the distributed network:

```bash
hypercompute --image <DOCKER_IMAGE> --time <SECONDS> --force --live --connector <PROVIDER_CONNECTION_STRING>
```

**Example - Ubuntu Container:**
```bash
hypercompute --image ubuntu --time 600 --force --live --connector 89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3efee062
```

**Example - GPU-Enabled Container:**
```bash
hypercompute --image tensorflow/tensorflow:latest-gpu --time 3600 --gpu --connector <CONNECTION_STRING>
```

## Core Operations

### Provider Management

**Start Provider Service:**
```bash
hypercompute provider --start --port 3000
```

**Check Provider Status:**
```bash
hypercompute provider --status
```

**Set Resource Limits:**
```bash
hypercompute provider --max-containers 5 --max-memory 8GB --max-gpu-memory 12GB
```

**Configure Pricing:**
```bash
hypercompute provider --price-cpu 0.01 --price-gpu 0.10 --currency HCC
```

### Consumer Operations

**Browse Available Providers:**
```bash
hypercompute marketplace --list --filter gpu
```

**Deploy Specific Workloads:**
```bash
# AI/ML Training
hypercompute --image pytorch/pytorch --gpu --time 7200 --connector <PROVIDER_KEY>

# Web Development
hypercompute --image node:18 --port 3000 --time 1800 --connector <PROVIDER_KEY>

# Data Processing
hypercompute --image python:3.9 --memory 4GB --time 3600 --connector <PROVIDER_KEY>
```

**Monitor Running Containers:**
```bash
hypercompute jobs --list
hypercompute jobs --logs <JOB_ID>
hypercompute jobs --stop <JOB_ID>
```

### Connection Management

**Generate Connection String:**
```bash
hypercompute keys --generate
```

**Share Connection (QR Code):**
```bash
hypercompute keys --qr <CONNECTION_STRING>
```

**Manage Multiple Connections:**
```bash
hypercompute connections --add <CONNECTION_STRING> --alias "gpu-provider-1"
hypercompute connections --list
hypercompute connections --connect gpu-provider-1
```

### File Management

**Upload Files to Container:**
```bash
hypercompute files --upload ./dataset.zip --job <JOB_ID> --path /workspace/
```

**Download Results:**
```bash
hypercompute files --download /workspace/results/ --job <JOB_ID> --local ./results/
```

**Real-time File Sync:**
```bash
hypercompute sync --local ./src/ --remote /workspace/src/ --job <JOB_ID>
```

## Security & Configuration

### Environment Configuration

The `.env` file automatically stores:
- `SERVER_KEY` - Authentication between peer nodes
- `WALLET_ADDRESS` - Your cryptocurrency wallet
- `PROVIDER_SETTINGS` - Resource limits and pricing

### Security Best Practices

🔐 **Connection Strings:**
- Treat private connection strings like SSH keys
- Never share them publicly or in repositories
- Rotate keys regularly in production
- Use separate keys for different environments

🛡️ **Container Security:**
- All containers run in isolated environments
- Network access is controlled and monitored
- Resource usage is strictly limited
- Containers are automatically destroyed after timeout

## Advanced Usage

### Background Operations
```bash
# Run provider in background
hypercompute provider --daemon --start

# Schedule compute jobs
hypercompute scheduler --add "0 2 * * *" --image data-processor --time 3600
```

### Live Monitoring
```bash
# Real-time provider stats
hypercompute monitor --provider --live

# Container performance
hypercompute monitor --job <JOB_ID> --metrics cpu,memory,gpu
```

### API Integration
```bash
# Get provider API endpoint
hypercompute api --endpoint --provider <CONNECTION_STRING>

# Container management via REST
curl -X POST http://127.0.0.1:3000/api/containers \
  -H "Authorization: Bearer <JWT_TOKEN>" \
  -d '{"image": "ubuntu", "time": 600}'
```

---

**💡 Pro Tip:** Use `hypercompute --help` to see all available commands and options for your specific use case.

<!-- **🔗 Next Steps:** Check out our [Provider Guide](./provider-setup) or [Consumer Walkthrough](./consumer-guide) for detailed tutorials! -->