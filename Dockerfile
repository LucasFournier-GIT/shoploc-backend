FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates maven

COPY pom.xml .
COPY target/*.jar app/

RUN mvn clean install

CMD ["java", "-jar", "app/app.jar"]
