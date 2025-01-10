#! /bin/Bash

echo "Use this to call the API to lookup the location of the ip address"
# https://ipgeolocation.io/ip-location-api.html#documentation-overview


if [ $# -ne 1 ]; then
	echo "Error: Invalid number of arguments"
    exit 1
fi

ip=$1

ipValid () {
    local ipv4Exp="([0-9]{3}[.]){3}[0-9]{3}"

    numIps=$(echo "$1" | grep -E "$ipv4Exp" -c)

    if [ $numIps = 1 ];then
        result="ip valid"
        return
    else
        result="ip not valid"
        return
    fi
}

ipValid $ip

echo "asdas $result"

. ./secrets.sh
apiKey=$DRAGON_API_KEY
. ./unsetSecrets.sh

call="https://api.ipgeolocation.io/ipgeo?apiKey=$apiKey&ip=$ip"

# curl $call