FROM serversideup/php:8.2-fpm-nginx

COPY . /var/www/html/public

ENTRYPOINT ["/init"]