FROM openjdk:21

WORKDIR /app

RUN mvn clean install

COPY target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]
