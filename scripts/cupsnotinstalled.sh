#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure CUPS is not installed
ensure_no_cups() {
    # Check if CUPS is installed
    if command -v cupsd &> /dev/null; then
        # Remove CUPS packages (adjust package manager commands as needed)
        if command -v apt-get &> /dev/null; then
            apt-get remove --purge cups
        elif command -v yum &> /dev/null; then
            yum remove cups
        elif command -v zypper &> /dev/null; then
            zypper remove cups
        else
            echo "Unsupported package manager. Please remove CUPS manually."
            exit 1
        fi

        echo "CUPS has been removed."
    else
        echo "CUPS is not installed."
    fi
}

# Execute the function
ensure_no_cups
