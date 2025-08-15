#! /bin/bash

echo "adding cron job"

#       minute  hour  dayOfMonth  month   dayOfWeek   command
crontab 0 * * * * mcvcli start --detached
