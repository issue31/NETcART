NETcART/
├── NETcART.sln
├── src/
│   ├── NETcART.Web/
│   │   ├── Controllers/
│   │   ├── Models/
│   │   ├── Views/
│   │   ├── wwwroot/
│   │   ├── appsettings.json
│   │   └── Program.cs
│   ├── NETcART.Core/
│   │   ├── Entities/
│   │   ├── Interfaces/
│   │   └── Services/
│   └── NETcART.Infrastructure/
│       ├── Data/
│       ├── Repositories/
│       └── Migrations/
├── tests/
│   ├── NETcART.Tests/
│   │   ├── UnitTests/
│   │   └── IntegrationTests/
└── README.md

POM.XML:-

Documentation Breakdown:
Parent Configuration:

Links the project to the Spring Boot parent POM for dependency management and plugin configurations.
Dependencies:

Includes libraries for:
JPA and MySQL for database operations.
Web application development with Spring MVC.
DevTools for faster development cycles.
Lombok for cleaner code.
Testing with Spring Boot’s starter-test.

Plugins:

Configures the spring-boot-maven-plugin for running and packaging the application.
Excludes Lombok from being bundled into the final build.
