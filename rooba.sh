#/bin/bash!
git pull origin main
docker-compose stop rooba_front_end_admin
docker system prune -a -f
docker-compose up rooba_front_end_admin --detach --build