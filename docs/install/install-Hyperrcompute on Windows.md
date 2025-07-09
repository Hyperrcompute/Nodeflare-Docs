---
id: Hyperrcompute on Windows
title: Hyperrcompute on Windows
sidebar_label: Hyperrcompute on Windows
sidebar_position: 1
---

# Hyperrcompute on Windows

The easiest way to start using Hyperrcompute's decentralized GPU marketplace is by installing it through NPM (Node Package Manager). Get instant access to distributed computing power or start earning by sharing your GPU resources.

## What is Hyperrcompute?

Hyperrcompute is a decentralized GPU marketplace that connects:
- **GPU Providers**: Earn by sharing your unused GPU computing power
- **GPU Consumers**: Access affordable, distributed computing resources for AI training, mining, and more

### Step 1: Install WSL2 and Ubuntu

Open PowerShell as Administrator and run:
```powershell
wsl --install
```

- Restart your system if prompted
- Then open Microsoft Store and install Ubuntu (20.04 or later)

### Step 2: Update Ubuntu (inside WSL)

```bash
sudo apt update && sudo apt upgrade -y
```

### Step 3: Install Docker Desktop for Windows

- Download and install Docker Desktop: https://www.docker.com/products/docker-desktop
- Enable WSL2 integration in Docker Desktop settings
- Make sure your installed Ubuntu distro is selected

### Step 4: Add Your WSL User to Docker Group

```bash
sudo usermod -aG docker $USER
newgrp docker
```

### Step 5: Verify Docker Works in WSL

```bash
docker info
```

### Step 6: Install Node.js (Recommended: v18+) using nvm

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install 18
nvm use 18
```

### Step 7: Install Hyperrcompute

```bash
npm i hyperrcompute@0.0.12 -g
```

### Step 8: Get Command From Website

Go to command section and fill the configuration in form. You will get a command from it run that on your terminal

![Install from Website](/img/form.png)


### Step 9: Start Hyperrcompute in Live Mode

```bash
hyperrcompute --image <DOCKER_IMAGE> --hours <HOURS> --minutes <MINUTES> --force --live --connector <PRIVATE_CONNECTION_STRING> --userId <USER_ID>
```

### Step 10: Access Docker Management Server

Open browser to: `http://localhost:3000/containers` or use Postman for API testing

### Optional: Enable Docker to Start on Boot

Docker Desktop starts with Windows by default. You can change this in Docker Desktop settings.

### Verification Checklist

- [ ] Docker Desktop installed and WSL2 integration enabled
- [ ] `docker info` works inside Ubuntu WSL
- [ ] `hyperrcompute --live ...` runs successfully
- [ ] Access Docker endpoints via `http://localhost:3000/containers`