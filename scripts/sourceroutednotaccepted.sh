#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure source-routed packets are not accepted
ensure_no_source_routed_packets() {
    # Disable source-routed packets for IPv4
    sysctl -w net.ipv4.conf.all.accept_source_route=0
    sysctl -w net.ipv4.conf.default.accept_source_route=0

    # Disable source-routed packets for IPv6
    sysctl -w net.ipv6.conf.all.accept_source_route=0
    sysctl -w net.ipv6.conf.default.accept_source_route=0

    # Save the changes to sysctl.conf for persistence across reboots
    echo "net.ipv4.conf.all.accept_source_route=0" >> /etc/sysctl.conf
    echo "net.ipv4.conf.default.accept_source_route=0" >> /etc/sysctl.conf
    echo "net.ipv6.conf.all.accept_source_route=0" >> /etc/sysctl.conf
    echo "net.ipv6.conf.default.accept_source_route=0" >> /etc/sysctl.conf

    # Apply the changes immediately
    sysctl -p

    echo "Source-routed packets are now not accepted."
}

# Execute the function
ensure_no_source_routed_packets
