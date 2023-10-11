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

# Flush existing rules
iptables -F

# Set default policies
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Allow loopback traffic
iptables -A INPUT -i lo -j ACCEPT
iptables -A OUTPUT -o lo -j ACCEPT

# Allow established and related connections
iptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT

# Allow outgoing DNS requests (if you want to resolve domain names)
iptables -A OUTPUT -p udp --dport 53 -j ACCEPT

# Allow outgoing HTTP and HTTPS
iptables -A OUTPUT -p tcp --dport 80 -j ACCEPT
iptables -A OUTPUT -p tcp --dport 443 -j ACCEPT

echo "Firewall rules have been configured to allow basic web browsing."
