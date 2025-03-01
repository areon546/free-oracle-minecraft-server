#! /bin/Bash


echo "Making Backup"
backup
echo "Backup Complete"

backup () {
    # echo "$(pwd)"
    date=$(date +%Y-%M-%d)
    zip -r "../backups/backup-"${date}"" .
    return
}