#! /bin/Bash

backup() {
  # echo "$(pwd)"
  date=$(date +%Y-%M-%d)
  zip -r "../backups/backup-"${date}"" .
  return
}

echo "Making Backup"
backup
echo "Backup Complete"

