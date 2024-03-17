FROM openjdk:21

WORKDIR /app

RUN apt-get update && apt-get install -y maven

RUN mvn clean install

COPY target/*.jar app.jar

CMD ["java", "-jar", "app.jar"]
