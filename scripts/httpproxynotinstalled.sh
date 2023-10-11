#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure HTTP proxy server is not installed
ensure_no_http_proxy() {
    # Check if an HTTP proxy server is installed
    if command -v squid &> /dev/null || command -v varnishd &> /dev/null; then
        # Remove HTTP proxy server packages (adjust package manager commands as needed)
        if command -v apt-get &> /dev/null; then
            apt-get remove --purge squid varnish
        elif command -v yum &> /dev/null; then
            yum remove squid varnish
        elif command -v zypper &> /dev/null; then
            zypper remove squid varnish
        else
            echo "Unsupported package manager. Please remove the HTTP proxy server manually."
            exit 1
        fi

        echo "HTTP proxy server has been removed."
    else
        echo "No HTTP proxy server is installed."
    fi
}

# Execute the function
ensure_no_http_proxy
