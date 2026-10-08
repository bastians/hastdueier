FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html favicon.ico googleda79fa5bcd9c8939.html /usr/share/nginx/html/
COPY assets /usr/share/nginx/html/assets
