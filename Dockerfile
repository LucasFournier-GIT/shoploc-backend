FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

RUN apk add --no-cache maven

RUN mvn clean install

COPY target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]
