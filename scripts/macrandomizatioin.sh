#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Check if macchanger is installed
if ! command -v macchanger &> /dev/null; then
    echo "macchanger command not found. Installing macchanger..."

    # Install macchanger (you may need to adjust this based on your package manager)
    if command -v apt-get &> /dev/null; then
        apt-get update
        apt-get install -y macchanger
    elif command -v yum &> /dev/null; then
        yum install -y macchanger
    elif command -v pacman &> /dev/null; then
        pacman -Syu --noconfirm macchanger
    else
        echo "Unsupported package manager. Please install macchanger manually."
        exit 1
    fi
fi

# Check if a network interface name is provided
if [ -z "$1" ]; then
    echo "Usage: $0 <interface_name>"
    exit 1
fi

# Network interface name provided as an argument
INTERFACE="$1"

# Change MAC address to a random address
macchanger -r "$INTERFACE"

# Check if the operation was successful
if [ $? -eq 0 ]; then
    echo "MAC address randomized for $INTERFACE."
else
    echo "Failed to randomize MAC address for $INTERFACE."
    exit 1
fi
