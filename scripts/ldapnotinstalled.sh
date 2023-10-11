#!/bin/bash

# Check if the script is run as root
if [[ $EUID -ne 0 ]]; then
    echo "This script must be run as root."
    exit 1
fi

# Function to ensure LDAP server is not installed
ensure_no_ldap_server() {
    # Check if an LDAP server is installed
    if command -v slapd &> /dev/null || command -v 389-ds &> /dev/null; then
        # Remove LDAP server packages (adjust package manager commands as needed)
        if command -v apt-get &> /dev/null; then
            apt-get remove --purge slapd 389-ds-base
        elif command -v yum &> /dev/null; then
            yum remove openldap-servers 389-ds-base
        elif command -v zypper &> /dev/null; then
            zypper remove openldap2 389-ds
        else
            echo "Unsupported package manager. Please remove the LDAP server manually."
            exit 1
        fi

        echo "LDAP server has been removed."
    else
        echo "No LDAP server is installed."
    fi
}

# Execute the function
ensure_no_ldap_server
