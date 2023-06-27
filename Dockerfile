FROM serversideup/php:8.2-fpm-apache

COPY . /var/www/html/

RUN composer install

ENTRYPOINT ["/init"]