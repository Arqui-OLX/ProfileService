FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD 1234
ENV MYSQL_DATABASE profile-db
ADD script.sql /docker-entrypoint-initdb.d
EXPOSE 3306-3311