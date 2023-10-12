#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure NFS is not installed
ensure_no_nfs() {
    # Check if NFS is installed
    if command -v nfsd &> /dev/null || command -v rpc.nfsd &> /dev/null; then
        # Remove NFS packages (adjust package manager commands as needed)
        if command -v apt-get &> /dev/null; then
            apt-get remove --purge nfs-kernel-server nfs-common
        elif command -v yum &> /dev/null; then
            yum remove nfs-utils
        elif command -v zypper &> /dev/null; then
            zypper remove nfs-kernel-server nfs-client
        else
            echo "Unsupported package manager. Please remove NFS manually."
            exit 1
        fi

        echo "NFS has been removed."
    else
        echo "No NFS is installed."
    fi
}

# Execute the function
ensure_no_nfs
