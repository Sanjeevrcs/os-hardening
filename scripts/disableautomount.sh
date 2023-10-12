#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Check if systemctl is available
if ! command -v systemctl &> /dev/null; then
    echo "systemctl command not found. Please make sure you are on a systemd-based system."
    exit 1
fi

# Disable the udisks2 service
systemctl stop udisks2.service
systemctl disable udisks2.service

# Mask the udisks2 service to prevent it from being started
systemctl mask udisks2.service

echo "Automounting has been disabled."
