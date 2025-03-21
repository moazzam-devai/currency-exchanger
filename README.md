
# Technical Documentation

I'd like to provide a comprehensive explanation of our implementation process, detailing the steps taken and the technical aspects involved.

# 1 - Analysis of Sprint Features and Wireframes:  
Our initial step involved reviewing the sprint requirements, specifically Sprint 1 (FF1, FF2) and Sprint 2 (FF3, FF4), and closely examining the wireframes to understand the implementation requirements thoroughly. 

# 2 - Exploration of Fixer API:  
To integrate currency conversion functionality into our project, we explored the Fixer API. We discovered that while the API offers various endpoints, our free account comes with limitations, such as a maximum of 100 requests per month per account. We focused on leveraging the available free endpoints to fulfill our needs:

# Symbols Endpoint: http://data.fixer.io/api/symbols?access_key=xxx (Free)
# Latest Rates Endpoint: http://data.fixer.io/api/latest?access_key=xxx (Free)

It's important to note that the base currency for these endpoints is EUR by default. To accommodate all currencies, we devised a workaround by managing currency data in-memory within our application. 

# 3 - Technical Implementation Overview: 
Here's an overview of the technical implementation:

# Angular Version: 
We utilized Angular version 15 for our project.

# Feature-Based Architecture: 
We followed a feature-based architecture approach to organize our code effectively.
Modular Approach with Lazy Loading: To enhance performance and maintainability, we implemented lazy loading for modules. .

# Interceptor for API Calls: 
We incorporated an interceptor to handle application-level API calls, ensuring that the access key is added seamlessly to each request.

# Shared Components: 
We developed shared components to encapsulate common functionalities, such as dropdowns, promoting code reusability and maintainability.
While our implementation is robust, there's always room for improvement. We're open to further discussions on enhancing our codebase and addressing any concerns or suggestions for improvement.

Should you have any questions or require further clarification on any aspect of our implementation, please don't hesitate to reach out. I'm looking forward to our continued collaboration. 

# Here is github https://github.com/FazeelArif20/currency-exchanger


# CurrencyExchanger

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help
