#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Backup the existing USB driver configuration
cp /etc/modprobe.d/blacklist.conf /etc/modprobe.d/blacklist.conf.backup

# Add USB driver blacklist rules to disable USB ports
echo "blacklist usb_storage" >> /etc/modprobe.d/blacklist.conf

# Reload the USB driver
modprobe -r usb_storage
modprobe usb_storage

echo "USB ports locked. To unlock, run 'rm /etc/modprobe.d/blacklist.conf && modprobe -r usb_storage && modprobe usb_storage'"
