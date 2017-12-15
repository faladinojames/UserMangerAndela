#!/bin/bash
echo "---- Starting UserManager ----"
docker-compose up -d
docker cp setup.js usermanagermongo:/setup.js
docker exec usermanagermongo mongo < setup.js
