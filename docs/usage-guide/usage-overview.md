---
id: usage-overview
title: Usage Overview
sidebar_label: Usage Overview
sidebar_position: 4
---

# Using Hyperrcompute

Hyperrcompute is a peer-to-peer remote compute execution platform that enables you to deploy lightweight, ephemeral Docker containers over a decentralized network. Whether you're providing compute resources or consuming them, Hyperrcompute makes distributed computing accessible and secure.

## 🚀 Key Capabilities

**For Compute Providers (Earn):**
- Share your device's computing power with the network
- Run secure, isolated Docker containers for clients
- Earn for providing resources
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

# Getting Started

## Installation

Install globally using npm:
```bash
npm i -g hyperrcompute@0.0.12
```

Ensure Docker is installed and running, and Node.js v18+ is in use.

## Basic Command Format

```bash
hyperrcompute [options]
```

## Available Options

- `--version` – Display the current version of Hyperrcompute
- `--help` – Show help instructions
- `--new` – Generate a new SERVER_KEY and save it to .env
- `--hours <number>` – Set duration in hours (default: 0)
- `--minutes <number>` – Set duration in minutes (default: 0)
- `--image <image_name>` – Docker image to run (required)
- `--live` – Run in live mode (required for starting server)
- `--connect <KEY_FROM_WEBSITE>` – Connect to an existing Hyperrcompute server
- `--force` – Force start even if warnings are present
- `--port <port_number>` – Set the port for connecting (default: 3000)

## Usage Examples

### Start a New Live GPU Server Instance

```bash
hyperrcompute --new --image ubuntu --hours 1 --minutes 0 --force --live --connector 89fd199803cd2aaf4b5cdba373a970a9e6a08f86547f26c24aae3efee062
```

Creates a container with 'ubuntu' image, runs for 1 hour using a connector key.

### Connect to an Existing GPU Server

```bash
hyperrcompute --connect "89fd199803cd2aaf4b5cdba373a970a9e6a08f86547fee062-SPLIT-12cd30614bffe9e86eefeb7753e3f5245b06bc4bd906b63af" --port 30001
```

It will return a url like `http://hyperrcompute.com/hyperrcompute/terminal?key=12cd30614bffe9e86eefeb7`

Open it in browser to access terminal, you are connected to an existing server on port 30001.

### Display Help

```bash
hyperrcompute --help
```

## Environment File (.env)

The `--new` flag generates a SERVER_KEY and stores it in a `.env` file.

## Reference

NPM Package: https://www.npmjs.com/package/hyperrcompute