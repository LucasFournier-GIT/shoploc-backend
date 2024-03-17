FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

RUN apk add --no-cache ca-certificates maven

COPY pom.xml .

RUN mvn clean install

COPY target/*.jar app/

CMD ["java", "-jar", "app/app.jar"]
