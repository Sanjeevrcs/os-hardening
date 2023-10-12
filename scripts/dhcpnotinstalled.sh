#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure DHCP server is not installed
ensure_no_dhcp_server() {
    # Check if a DHCP server is installed
    if command -v dhcpd &> /dev/null || command -v dnsmasq &> /dev/null; then
        # Remove DHCP server packages (adjust package manager commands as needed)
        if command -v apt-get &> /dev/null; then
            apt-get remove --purge isc-dhcp-server dnsmasq
        elif command -v yum &> /dev/null; then
            yum remove dhcp dnsmasq
        elif command -v zypper &> /dev/null; then
            zypper remove dhcp-server dnsmasq
        else
            echo "Unsupported package manager. Please remove the DHCP server manually."
            exit 1
        fi

        echo "DHCP server has been removed."
    else
        echo "No DHCP server is installed."
    fi
}

# Execute the function
ensure_no_dhcp_server
