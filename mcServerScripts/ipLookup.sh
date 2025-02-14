#! /bin/Bash

. ./secrets.sh
apiKey=$DRAGON_API_KEY
. ./unsetSecrets.sh



# check correct # of args
if [ $# -ne 1 ]; then
	echo "Error: Invalid number of arguments"
    return 1
fi

ip=$1

ipValid $ip
if [ $result -ne 1 ]; then
    echo "Error: Invalid IP: \"$ip\""
    return 1
fi



# call the api and get the country
call="https://api.ipgeolocation.io/ipgeo?apiKey=$apiKey&ip=$ip"
response=$(curl $call -s)
country=$(echo "$response" | jq .country_name)



# check if the response actually contained a country name
if [ "$(echo "$country")" = "null" ]; then
    country="No country returned"
fi

# display info
echo -e "ip: \t \"$ip\""
echo -e "country: $country"





ipValid () {
    local ip=$1

    local ipv4Exp="([0-9]{1,3}[.]){3}[0-9]{1,3}"

    numIps=$(echo "$ip" | grep -E "$ipv4Exp" -c)

    if [ $numIps = 1 ];then
        result=1
        return
    else
        result=0
        return
    fi
}
