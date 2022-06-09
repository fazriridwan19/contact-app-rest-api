# Contact App API

## How to run :
1. Install docker
2. Make sure you're in the directory that contains all of these file
3. Run `sudo docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build` for development
4. Run `sudo docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build` for production
5. After the containers is running, you need to setup mysqldb and mysqldb-quotes containers using `contacts.sql` and `quotes.sql`
6. Done
