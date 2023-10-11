#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# GDM dconf database
gdm_dconf_db="/etc/gdm3/greeter.dconf-defaults"

# Set the necessary dconf settings for screen locking
echo "[org/gnome/desktop/session]" >> "$gdm_dconf_db"
echo "idle-delay=uint32 300" >> "$gdm_dconf_db"  # Set the idle time to 300 seconds (adjust as needed)

# Set the screen locking
echo "[org/gnome/desktop/screensaver]" >> "$gdm_dconf_db"
echo "lock-enabled=true" >> "$gdm_dconf_db"

echo "GDM screen locks when the user is idle."

# Restart GDM to apply changes
systemctl restart gdm
