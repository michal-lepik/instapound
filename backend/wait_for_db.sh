#!/usr/bin/env bash

until nc -z $DB_HOST $DB_PORT
do
 echo Waiting... $DB_HOST
 sleep 1
done

echo Connected with $DB_HOST.
