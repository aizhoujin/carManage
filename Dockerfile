FROM nginx:1.22.0
COPY dist /html
COPY nginx.conf /etc/nginx/conf.d/default.conf
