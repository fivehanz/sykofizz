FROM serversideup/php:8.2-fpm-apache
COPY . /var/www/html/

# Install PHP Imagemagick using regular Ubuntu commands
RUN apt-get update \
    && apt-get install -y --no-install-recommends php8.0-imagick \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*

# main bedrock
RUN composer install --no-dev

ENTRYPOINT ["/init"]