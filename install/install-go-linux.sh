#!/usr/bin/env bash
if [[ -n "$1" ]]
then
  DIR=$1
else
  DIR=$HOME
fi

echo "Installing Go in /usr/local"

# Clean in case somethign left over from old installation
rm -rf go
rm go1.10.3.linux-amd64.tar.gz;
wget https://dl.google.com/go/go1.10.3.linux-amd64.tar.gz;
tar -xf go1.10.3.linux-amd64.tar.gz;
echo "Deleting go in /usr/local"
sudo rm -rf /usr/local/go
sudo mv go /usr/local;
rm go1.10.3.linux-amd64.tar.gz;

./install/export-go-path-linux.sh $DIR