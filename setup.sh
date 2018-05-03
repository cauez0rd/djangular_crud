#!/bin/bash

case $1 in
  venv)
    python3 -m venv venv
    ;;
  install)
    pip install django djangorestframework django-cors-headers
    ;;
  django)
    python manage.py runserver
    ;;
  server)
    cd angularjs/
    python3 -m http.server 5500
    ;;
esac
  
