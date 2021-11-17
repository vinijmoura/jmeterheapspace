FROM alpine:3.13 AS baseimage

RUN apk --no-cache add ca-certificates musl-dev wget bash curl
RUN apk add ca-certificates && update-ca-certificates
RUN apk add --update nodejs npm
RUN apk add --update tzdata
ENV TZ=America/Sao_Paulo

RUN mkdir /web
COPY . /web
WORKDIR /web
RUN npm install

EXPOSE 80

CMD [ "node","index.js" ]