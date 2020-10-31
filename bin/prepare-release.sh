#!/bin/bash

# Copy build directory to release directory
cp -R "$PACKAGE_BUILD_DIRECTORY" "$RELEASE_DIRECTORY"

# Create release archive from release directory
zip -r "$RELEASE_FILE" "$RELEASE_DIRECTORY"
