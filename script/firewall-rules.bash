#!/bin/bash

# create the firewall
gcloud compute firewall-rules create app-server-firewall \ 
--description="Allow Custom TCP PORT 5555" \ 
--target-tags=web-server \
--source-ranges=0.0.0.0/0 \
--allow-tcp=tcp:5555