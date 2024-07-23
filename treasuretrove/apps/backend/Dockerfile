# Start from the latest golang base image
FROM golang:latest

#install psql
RUN apt-get update && apt-get install -y postgresql-client

# Set the Current Working Directory inside the container
WORKDIR /app

# Copy go mod and sum files
COPY go.mod go.sum ./

# Download all dependencies. Dependencies will be cached if the go.mod and go.sum files are not changed
RUN go mod download

# Copy the source from the current directory to the Working Directory inside the container
COPY . .

# Because the main is in cmd
WORKDIR /app/cmd

# Build the Go app
RUN CGO_ENABLED=0 GOOS=linux go build -o treasure-trove

# Expose port 8080 to the outside world
EXPOSE 8080

# Copy the wait-for-postgres.sh script from your host to your docker image
COPY deployment/wait-for-postgres.sh /wait-for-postgres.sh

# Make the wait-for-postgres.sh script executable
RUN chmod +x /wait-for-postgres.sh

# Command to run the executable
CMD ["/wait-for-postgres.sh", "db", "./treasure-trove"]
