#!/bin/bash

# Update and install dependencies
sudo apt-get update -y

# Install NGINX
sudo apt-get install -y nginx

# Install Java and Tomcat
sudo apt-get install -y default-jdk
sudo apt-get install -y tomcat9

# Install RabbitMQ
sudo apt-get install -y rabbitmq-server

# Install Memcached
sudo apt-get install -y memcached

# Install NoSQL (MongoDB)
sudo apt-get install -y mongodb

# Start services
sudo systemctl start nginx
sudo systemctl start tomcat9
sudo systemctl start rabbitmq-server
sudo systemctl start memcached
sudo systemctl start mongodb

# Enable services to start on boot
sudo systemctl enable nginx
sudo systemctl enable tomcat9
sudo systemctl enable rabbitmq-server
sudo systemctl enable memcached
sudo systemctl enable mongodb
