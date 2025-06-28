---
id: usage-set-port
title: Set Port
sidebar_label: Provider
sidebar_position: 5
---

# Become a Compute Provider

Transform your device into a revenue-generating compute provider in the Hypercompute marketplace. Share your CPU, GPU, and network resources with clients worldwide and earn cryptocurrency for every job you process.

## Provider Registration Process

### Step 1: Initial Provider Setup

Start your provider node and begin the registration process:

```bash
hypercompute provider --init --port 3000
```

This command will:
- Generate your unique provider connection string
- Create your provider identity
- Start the registration flow
- Display your provider dashboard URL

**Expected Output:**
```
[INFO] Initializing Hypercompute Provider...
[INFO] Generating provider keys...
[INFO] Provider node started on port 3000

┌──────────────────────────────────────────────────────────────────────────────┐
│                        🚀 Hypercompute Provider Started                      │
│                                                                              │
│  Provider ID: hp_89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3e    │
│  Dashboard: http://127.0.0.1:3000/provider/dashboard                        │
│  Registration: http://127.0.0.1:3000/provider/register                      │
│                                                                              │
│  🔗 Complete registration to start earning: CLICK LINK ABOVE                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Step 2: Complete Provider Registration

Click the registration link or visit it in your browser to complete the provider onboarding form:

**Provider Registration Form Fields:**

**Basic Information:**
- Provider Name (Display name for marketplace)
- Contact Email (For important notifications)
- Location/Region (For client proximity matching)
- Provider Description (What makes your setup unique)

**Hardware Specifications:**
- CPU Cores Available (e.g., 8 cores)
- RAM Available (e.g., 16GB)
- GPU Type (e.g., RTX 4090, M2 Pro, None)
- GPU Memory (e.g., 24GB VRAM)
- Storage Available (e.g., 500GB SSD)
- Network Speed (Upload/Download in Mbps)

**Availability & Pricing:**
- Operating Hours (24/7, Business Hours, Custom Schedule)
- CPU Rate (HCC tokens per hour)
- GPU Rate (HCC tokens per hour, if applicable)
- Memory Rate (HCC tokens per GB per hour)
- Storage Rate (HCC tokens per GB per hour)
- Minimum Job Duration (e.g., 15 minutes)
- Maximum Job Duration (e.g., 24 hours)

**Payment & Security:**
- Cryptocurrency Wallet Address (for payments)
- Preferred Payment Token (HCC, ETH, USDC)
- Auto-withdrawal Threshold (e.g., 100 HCC)
- Security Preferences (Container isolation level)

### Step 3: System Verification

After form submission, Hypercompute automatically verifies your system:

```bash
# Automatic verification runs these checks:
hypercompute provider --verify --system
```

**Verification Checklist:**
- ✅ Docker installation and functionality
- ✅ Available system resources
- ✅ Network connectivity and port accessibility
- ✅ GPU detection (if applicable)
- ✅ Security container isolation
- ✅ Wallet address validation

### Step 4: Provider Activation

Once verification is complete, activate your provider:

```bash
hypercompute provider --activate
```

**Provider Status Dashboard:**
```
┌──────────────────────────────────────────────────────────────────────────────┐
│                        ✅ Provider Successfully Activated                     │
│                                                                              │
│  Status: ACTIVE                    Earnings Today: 45.2 HCC                  │
│  Jobs Completed: 0                 Total Earnings: 0 HCC                     │
│  Active Jobs: 0/5                  Success Rate: N/A                         │
│  Uptime: 100%                      Last Job: Never                           │
│                                                                              │
│  💰 Ready to accept jobs and start earning!                                  │
└──────────────────────────────────────────────────────────────────────────────┘
```

## Provider Management Commands

### Start Provider Service
```bash
# Start with default settings
hypercompute provider --start --port 3000

# Start with custom resource limits
hypercompute provider --start --port 3000 --max-containers 3 --max-memory 8GB

# Start with GPU support
hypercompute provider --start --port 3000 --gpu --max-gpu-memory 12GB
```

### Monitor Provider Activity
```bash
# View real-time dashboard
hypercompute provider --dashboard --live

# Check earnings and statistics
hypercompute provider --stats

# View active and completed jobs
hypercompute provider --jobs --status active
hypercompute provider --jobs --history
```

### Configure Provider Settings
```bash
# Update pricing
hypercompute provider --config --cpu-rate 0.05 --gpu-rate 0.25

# Set availability schedule
hypercompute provider --schedule --hours "09:00-17:00" --timezone "UTC"

# Update resource limits
hypercompute provider --limits --max-containers 5 --max-cpu 80% --max-memory 12GB
```

### Financial Management
```bash
# Check current balance
hypercompute provider --wallet --balance

# View transaction history
hypercompute provider --wallet --transactions

# Withdraw earnings
hypercompute provider --wallet --withdraw --amount 100

# Set auto-withdrawal
hypercompute provider --wallet --auto-withdraw --threshold 50 --address 0x...
```

## Provider Performance Optimization

### Hardware Optimization
```bash
# System performance check
hypercompute provider --optimize --check

# Enable high-performance mode
hypercompute provider --optimize --performance-mode high

# Configure thermal management
hypercompute provider --optimize --thermal-limit 80C
```

### Network Configuration
```bash
# Test network connectivity
hypercompute provider --network --test

# Configure port forwarding (if behind NAT)
hypercompute provider --network --upnp-enable

# Set bandwidth limits
hypercompute provider --network --upload-limit 100Mbps --download-limit 500Mbps
```

## Security & Safety

### Container Security
```bash
# Enable strict container isolation
hypercompute provider --security --isolation strict

# Configure resource sandboxing
hypercompute provider --security --sandbox-mode enabled

# Set automatic job timeouts
hypercompute provider --security --max-job-time 4h
```

### Provider Protection
```bash
# Enable reputation filtering
hypercompute provider --filters --min-client-rating 4.0

# Set job approval requirements
hypercompute provider --filters --manual-approval enabled

# Configure blacklist management
hypercompute provider --blacklist --add <CLIENT_ID>
```

## Troubleshooting

### Common Issues

**Port Already in Use:**
```bash
hypercompute provider --port 3001  # Try different port
lsof -i :3000  # Check what's using port 3000
```

**Docker Not Running:**
```bash
# Start Docker service
sudo systemctl start docker  # Linux
open -a Docker  # macOS
```

**GPU Not Detected:**
```bash
# Check GPU status
hypercompute system --gpu-check
nvidia-smi  # For NVIDIA GPUs
```

**Registration Form Issues:**
If the registration link doesn't work:
```bash
hypercompute provider --register --manual
# This opens an alternative registration method
```

## Provider Economics

### Pricing Strategy
- **Research Market Rates**: Check competitor pricing in the marketplace
- **Consider Your Costs**: Electricity, hardware wear, internet costs
- **Start Competitive**: Lower initial rates to build reputation
- **Premium Features**: Charge more for GPU access, high memory, or guaranteed uptime

### Maximizing Earnings
- **High Uptime**: Maintain 99%+ availability for better rankings
- **Fast Response**: Quick job acceptance increases client satisfaction
- **Diverse Capabilities**: Support multiple container types and workloads
- **Geographic Advantage**: Serve clients in your timezone for lower latency

---

**🔥 Pro Tip:** Providers with GPUs typically earn 5-10x more than CPU-only providers. Consider upgrading your hardware for maximum profitability!

**📊 Analytics:** Access detailed earnings analytics and performance metrics at your provider dashboard after registration.