FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=wordle_frontend:latest /app/dist /app/dist
