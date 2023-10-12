#!/bin/bash

# Remove the blacklist.conf file
sudo rm /etc/modprobe.d/blacklist.conf

# Remove the usb_storage module
sudo modprobe -r usb_storage

# Load the usb_storage module again
sudo modprobe usb_storage
