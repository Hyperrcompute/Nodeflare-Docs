---
id: terminology-connection-string
title: Hypercompute Terminology
sidebar_label: Terminologies
sidebar_position: 5
---

# Hypercompute Terminology

Understanding key terms will help you navigate the decentralized compute marketplace effectively. Here's your complete guide to Hypercompute terminology.

## Core Concepts

### Connection String
A **connection string** is a secure, unique identifier that enables peer-to-peer connections between devices in the Hypercompute network. It acts like a private SSH key.

**Example:** `89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3efee062`

**Key Points:**
- Treat it like a password - never share publicly
- Required for both providers and consumers
- Enables direct device-to-device communication
- Generated automatically by Hypercompute

### Provider Node
A **provider node** is a device that shares its computing resources (CPU, GPU, memory) with the Hypercompute network to earn cryptocurrency.

**Provider Benefits:**
- Earn HCC tokens for shared resources
- Set custom pricing and availability
- Control resource allocation limits
- Monitor earnings and usage statistics

### Consumer/Client
A **consumer** or **client** is a user who requests and pays for computing resources from provider nodes in the network.

**Consumer Benefits:**
- Access distributed computing power on-demand
- Pay only for actual usage time
- Choose from various hardware configurations
- Scale workloads across multiple providers

## Technical Terms

### Ephemeral Container
An **ephemeral container** is a temporary Docker container that automatically destroys itself after a specified time period or when the task completes.

**Characteristics:**
- Isolated execution environment
- Configurable lifetime (seconds to hours)
- Automatic cleanup after expiration
- Secure and sandboxed

### hyperdht
**hyperdht** is the underlying peer-to-peer networking protocol that enables decentralized communication between Hypercompute nodes without central servers.

**Features:**
- Distributed hash table for node discovery
- NAT traversal for direct connections
- Cryptographic security built-in
- Resilient to network failures

### TCP Tunnel
A **TCP tunnel** creates a secure communication channel between your local machine and a remote container, allowing you to access web interfaces and services.

**Use Cases:**
- Access Jupyter notebooks running on remote GPUs
- Connect to databases in distributed containers
- Forward ports for web applications
- Enable real-time debugging sessions

### Live Mode
**Live mode** (`--live`) provides real-time streaming of container output, logs, and metrics during execution.

**Benefits:**
- Monitor progress in real-time
- Debug issues immediately
- Stream training logs from ML models
- Get instant feedback from computations

## Marketplace Terms

### HCC Token
**HCC** (Hypercompute Coin) is the native cryptocurrency used for payments within the Hypercompute ecosystem.

**Usage:**
- Providers earn HCC for sharing resources
- Consumers pay HCC for compute time
- Staking HCC provides network governance rights
- Used for transaction fees and rewards

### Compute Credit
**Compute credits** are pre-purchased units that represent computing power, making it easier to budget and manage resource usage.

**Examples:**
- 1 CPU hour = 10 credits
- 1 GPU hour = 100 credits
- Storage per GB/day = 1 credit
- Network transfer per GB = 0.5 credits

### Resource Pricing
**Resource pricing** is the cost structure for different types of computing resources in the marketplace.

**Pricing Factors:**
- Hardware type (CPU, GPU model)
- Performance tier (compute power)
- Memory allocation
- Storage requirements
- Network bandwidth
- Geographic location

### Marketplace Tiers
**Marketplace tiers** categorize providers based on performance, reliability, and features.

**Tier Categories:**
- **Basic**: Standard CPU resources
- **Performance**: High-end CPUs with fast storage
- **GPU**: Graphics processing for AI/ML workloads
- **Enterprise**: Dedicated resources with SLA guarantees

## Container & Docker Terms

### Docker Image
A **Docker image** is a pre-built template containing an operating system, software, and dependencies needed to run specific applications.

**Popular Images:**
- `ubuntu` - Basic Linux environment
- `tensorflow/tensorflow:latest-gpu` - AI/ML with GPU support
- `node:18` - Node.js development environment
- `pytorch/pytorch` - PyTorch machine learning framework

### Container Lifetime
**Container lifetime** is the maximum duration a container can run before automatic termination, controlled by the `--time` parameter.

**Time Formats:**
- Seconds: `--time 600` (10 minutes)
- Minutes: `--time 30m`
- Hours: `--time 2h`
- Days: `--time 1d`

### Force Flag
The **force flag** (`--force`) allows starting a new container even if another container is already running on the provider.

**Use Cases:**
- Override existing containers
- Emergency container deployment
- Development testing scenarios
- Resource reallocation

## Security & Authentication

### SERVER_KEY
**SERVER_KEY** is an automatically generated authentication key stored in the `.env` file that enables secure communication between peer nodes.

**Characteristics:**
- Generated on first run
- Used for node authentication
- Required for provider/consumer handshake
- Rotatable for enhanced security

### JWT Token
**JWT (JSON Web Token)** is a session token generated during container execution that authenticates API requests and container management operations.

**Usage:**
- Container lifecycle management
- File upload/download operations
- Real-time monitoring access
- API endpoint authentication

### Private Network
A **private network** in Hypercompute refers to the encrypted, peer-to-peer connections between nodes that bypass traditional internet infrastructure.

**Benefits:**
- Enhanced privacy and security
- Reduced latency through direct connections
- Censorship resistance
- No central point of failure

## Network & Performance

### Holepunching
**Holepunching** is a NAT traversal technique that allows direct peer-to-peer connections even when devices are behind firewalls or routers.

**Technical Details:**
- Establishes direct UDP/TCP connections
- Bypasses NAT restrictions
- Enables true peer-to-peer communication
- Automatic fallback to relay servers if needed

### DHT (Distributed Hash Table)
**DHT** is a decentralized system for storing and retrieving provider information across the network without central servers.

**Functions:**
- Node discovery and announcement
- Provider capability advertisement
- Network health monitoring
- Routing optimization

### Resource Allocation
**Resource allocation** defines the computing resources (CPU cores, RAM, GPU memory) assigned to a specific container or job.

**Allocation Types:**
- Shared: Multiple containers share resources
- Dedicated: Exclusive resource access
- Burstable: Dynamic scaling based on demand
- Guaranteed: Fixed resource reservation

## Payment & Economics

### Pay-per-Use
**Pay-per-use** is the default billing model where consumers pay only for actual resource consumption time.

**Billing Metrics:**
- CPU time (core-hours)
- GPU time (device-hours)
- Memory usage (GB-hours)
- Storage utilization (GB-days)
- Network transfer (GB)

### Staking
**Staking** involves locking HCC tokens to participate in network governance, earn additional rewards, or access premium features.

**Staking Benefits:**
- Higher provider earnings multiplier
- Priority access to premium resources
- Voting rights on network upgrades
- Reduced transaction fees

### Yield Farming
**Yield farming** allows providers to earn additional rewards by contributing resources during high-demand periods.

**Reward Mechanisms:**
- Demand-based multipliers
- Long-term commitment bonuses
- Geographic diversity incentives
- Uptime consistency rewards

---

**💡 Quick Reference:** Bookmark this page for easy access to terminology while using Hypercompute!

<!-- **🔗 See Also:** Check out our [FAQ](./faq) for common questions or [Troubleshooting Guide](./troubleshooting) for technical issues. -->