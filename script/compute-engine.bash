#!/bin/bash

# create the instances
gcloud compute instances create web-server \
--zone=asia-southeast2-a \
--machine-type=e2-micro \
--boot-disk-size=10GB \
--boot-disk-type=pd-balanced \
--tags=web-server \
--restart-on-failure
