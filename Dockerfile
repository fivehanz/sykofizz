FROM serversideup/php:8.2-fpm-apache

COPY . /var/www/html/
RUN composer install --no-dev && cd web/app/themes/sykofizz && composer install --no-dev



ENTRYPOINT ["/init"]