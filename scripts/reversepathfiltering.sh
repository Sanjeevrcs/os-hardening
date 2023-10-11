#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure Reverse Path Filtering is enabled
ensure_reverse_path_filtering() {
    # Enable Reverse Path Filtering for IPv4
    sysctl -w net.ipv4.conf.all.rp_filter=1
    sysctl -w net.ipv4.conf.default.rp_filter=1

    # Save the changes to sysctl.conf for persistence across reboots
    echo "net.ipv4.conf.all.rp_filter=1" >> /etc/sysctl.conf
    echo "net.ipv4.conf.default.rp_filter=1" >> /etc/sysctl.conf

    # Apply the changes immediately
    sysctl -p

    echo "Reverse Path Filtering is now enabled."
}

# Execute the function
ensure_reverse_path_filtering
