# React Upskill Backend

## Description

Backend for the React Upskill Mentoring Program (Basic and Advanced). The main goal for this project was to provide fully working app which can be started with minimal effort.

## Prerequisites

All you have to do is just to install [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) on your machine.

## Build & Run  :construction_worker:

  1. create `.env` file with with three required values: `DB_USER`, `DB_PASSWORD` and `DB_NAME` ([.env.example](./.env.example) might be helpful)
  2. run `docker-compose up -d`

## Troubleshooting :warning:

In case when you're getting errors `No metadata for <Entity> was found` just stop containers by typing: `docker-compose down` and restart them with `docker-compose up -d`.

## Swagger

There are autogenerated Swagger docs which might be helpful to quickly investigate which endpoints are available and what data do we need to pass there. To check it out just navigate to `localhost:4000/api` (here is an assumption that your docker containers are running under port 4000 :trollface:).
