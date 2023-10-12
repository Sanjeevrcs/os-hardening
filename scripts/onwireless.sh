#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# List all wireless devices
wireless_devices=$(rfkill list wifi)

# Check if there are any wireless devices
if [[ -n "$wireless_devices" ]]; then
    echo "Wireless interfaces found. Enabling..."

    # Enable all wireless devices
    rfkill unblock wifi

    echo "Wireless interfaces have been enabled."
else
    echo "No wireless interfaces found."
fi

