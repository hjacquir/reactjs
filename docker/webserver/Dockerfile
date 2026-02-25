FROM node:22.19.0 AS node
FROM php:8.4-apache

ARG DEBIAN_FRONTEND=noninteractive

# Update
RUN apt-get -y update --fix-missing && \
    apt-get upgrade -y && \
    apt-get --no-install-recommends install -y apt-utils && \
    apt-get clean

# Install node, npm
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /usr/local/bin/node /usr/local/bin/node
RUN ln -s /usr/local/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm

# Ajout des fichiers de configs
COPY conf.d/apache2/sites-available/ /etc/apache2/sites-available/
RUN a2ensite localhost.conf
RUN a2enmod rewrite headers
