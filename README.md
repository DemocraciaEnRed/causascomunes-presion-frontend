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

About the making of the Dockerfile 

https://denys.dev/2018-03-02/your-angular-apps-as-docker-containers/


```
docker build --tag=causas-comunes-frontend .
docker run -dit --name ccf -p 8080:80 causas-comunes-frontend
```
