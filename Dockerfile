FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates maven

RUN mvn clean install

COPY pom.xml .
COPY target/*.jar app/

CMD ["java", "-jar", "app/app.jar"]
