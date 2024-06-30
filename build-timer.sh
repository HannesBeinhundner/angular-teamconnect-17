#!/bin/bash

for i in {1..15}
do
  echo "Starting build iteration $i..."

  # Record the start time
  start_time=$(date +%s)

  # Run the Angular build commands
  ng build

  # Record the end time
  end_time=$(date +%s)

  # Calculate the build time
  build_time=$((end_time - start_time))

  # Print and log the build time
  echo "Build completed in $build_time seconds."
  echo "$(date):Build completed in $build_time seconds." >> build-times.log
done

echo "All builds completed. Build times are logged in build-times.log"
