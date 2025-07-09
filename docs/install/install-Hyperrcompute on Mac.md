---
id: Hyperrcompute on Mac
title: Hyperrcompute on Mac
sidebar_label: Hyperrcompute on Mac
sidebar_position: 3
---

# Hyperrcompute on Mac

Get started with the decentralized GPU marketplace on macOS. Whether you want to earn by sharing your Mac's GPU power or access distributed computing resources for your projects, follow these simple steps.

## Mac GPU Marketplace Overview

**For Mac Users:**
- **M1/M2/M3 Mac Owners**: Share your Apple Silicon GPU power and earn 
- **Intel Mac Users**: Access powerful distributed GPUs for AI training and computation
- **Developers**: Seamlessly integrate GPU marketplace into your workflow

### Step 1: Update System Packages

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 2: Install Docker Engine

Install required packages:
```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

Add Docker's official GPG key:
```bash
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Set up the repository:
```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install Docker Engine:
```bash
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Step 3: Add User to Docker Group

```bash
sudo usermod -aG docker $USER
```

**Important:** Log out and back in, or run:
```bash
newgrp docker
```

### Step 4: Verify Docker Works Without Sudo

```bash
docker info
```

### Step 5: Install Node.js (Recommended: v18+)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

### Step 6: Install Hyperrcompute

```bash
npm i hyperrcompute@0.0.12 -g
```

### Step 7: Get Command From Website

Go to command section and fill the configuration in form. You will get a command from it run that on your terminal

![Install from Website](/img/form.png)


### Step 8: Start Hyperrcompute in Live Mode

```bash
hyperrcompute --image <DOCKER_IMAGE> --hours <HOURS> --minutes <MINUTES> --force --live --connector <PRIVATE_CONNECTION_STRING> --userId <USER_ID>
```

### Step 9: Access Docker Management Server

Open browser to: `http://localhost:3000/containers` or use Postman for API testing

### Optional: Make Docker Socket More Accessible (Not for production)

```bash
sudo chmod 666 /var/run/docker.sock
```

### Optional: Enable Docker to Start on Boot

```bash
sudo systemctl enable docker
```

### Verification Checklist

- [ ] `docker info` works without sudo
- [ ] `npm install` completes without error
- [ ] `hyperrcompute --live ...` runs successfully
- [ ] Access container routes via `http://localhost:3000/containers`