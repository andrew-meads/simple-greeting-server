FROM node:20

# Set working dir
WORKDIR /app

# Install dependencies
COPY ./package*.json ./
RUN npm install

# Copy the rest of the frontend app
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Run the npm start script
CMD ["npm", "start"]
