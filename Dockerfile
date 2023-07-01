FROM serversideup/php:8.2-fpm-apache
COPY . /var/www/html/

# main bedrock
RUN composer install --no-dev
# theme installer
RUN cd web/app/themes/sykofizz && composer install --no-dev

ENTRYPOINT ["/init"]