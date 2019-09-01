# Causas Comunes - Frontend

## DEV

```
cd frontend
yarn
yarn start
```


## Deployment

```
cd frontend
yarn build
```


## Docker

```
docker build --tag=causas-comunes-frontend .
docker run -dit --name ccf -p 8080:80 causas-comunes-frontend
```
