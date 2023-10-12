#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Check if iptables is installed
if ! command -v iptables &> /dev/null; then
    echo "iptables command not found. Please install iptables."
    exit 1
fi

# Check if a port number is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <port_number>"
    exit 1
fi

# Port number provided as an argument
PORT="$1"

# Allow incoming traffic on the specified port
iptables -A INPUT -p tcp --dport "$PORT" -j ACCEPT

echo "Port $PORT has been enabled."
