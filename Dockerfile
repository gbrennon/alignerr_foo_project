# Use OpenJDK 11 as the base image
FROM eclipse-temurin:11-jdk

# Install Maven
RUN apt-get update && apt-get install -y maven

# Set the working directory
WORKDIR /app

# Copy only the pom.xml first to leverage Docker cache for dependency building
COPY pom.xml ./

# Download or update dependencies
RUN mvn dependency:go-offline

# Copy the rest of the application
COPY src ./src

# Build the project
RUN mvn package

# Make the JAR executable
RUN chmod +x target/*.jar

# Command to run the application
CMD ["java", "-jar", "target/foo-alignerr-project-1.0-SNAPSHOT.jar"]
