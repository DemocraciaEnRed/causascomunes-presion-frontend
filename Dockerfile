FROM trion/ng-cli:1.7.0 as angular-builder

LABEL angular-builder true

ARG http_proxy=

ENV http_proxy=${http_proxy}

# https://docs.docker.com/engine/userguide/eng-image/multistage-build/
# https://medium.com/@shakyShane/lets-talk-about-docker-artifacts-27454560384f

USER 0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

RUN yarn build --env=prod

# TODO ver como parametrizar el prod-build cuando salgamos a prod.

FROM httpd:2.4

COPY --from=angular-builder /app/dist /usr/local/apache2/htdocs/
