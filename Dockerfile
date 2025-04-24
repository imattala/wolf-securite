# Use official Node.js image as a base
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the React app
RUN npm run build

# Serve the app using a lightweight HTTP server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy a default nginx config file (optional)
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"] 
