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

# Unmask the udisks2 service to allow it to be started
systemctl unmask udisks2.service

# Enable and start the udisks2 service
systemctl enable udisks2.service
systemctl start udisks2.service

echo "Automounting has been enabled."
