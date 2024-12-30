#! /bin/bash

. ./secrets.sh
path=$DRAGON_PRIVATE_PATH
username=$DRAGON_USERNAME
ip=$DRAGON_IP
. ./unsetSecrets.sh

unset DRAGON_IP
unset DRAGON_USERNAME
unset DRAGON_PRIVATE_PATH

# # echo "Write the ip of the server you are connecting to"
# # read ip 

ssh -i "$path" "$username"@"$ip"