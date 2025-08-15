#! bin/Bash

port=25565

# for this command, i want to be able to specify the port and the protocols to work with said port

# so i tell it ports to specify as the minecraft port, 


if [ true ]; then # 
    echo ""
fi


sudo firewall-cmd --permanent --zone=public --add-port=$port/tcp
sudo firewall-cmd --permanent --zone=public --add-port=$port/udp
sudo firewall-cmd --reload