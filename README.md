# 🌐 Redesign-Website

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

## 📋 Prerequisites

Before cloning this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/): A platform for running JavaScript code on the server side.
- [npm](https://www.npmjs.com/) (Node Package Manager): A package manager for Node.js, used to install project dependencies.
- [Angular CLI](https://angular.io/cli): A command line interface for Angular that helps with creating, developing, and deploying Angular applications.
- [Git](https://git-scm.com/): A version control system for cloning the project and managing source code changes.

## 🚀 Introduction

This Angular project is a frontend application for redesigning the website of the La Porte du Hainaut community. In this README, we will explain how to clone the project, run it locally, and provide some important information about the project structure.

## 📥 Clone the Project

To clone this project to your local machine, ensure Git is installed. Then run the following command:

```bash
git clone git@github.com:paulpp78/Redesign-Website.git
```

Once the project is cloned, navigate to the project directory using the `cd` command:

```bash
cd Redesign-Website
```

## 📦 Install Dependencies

To install the necessary dependencies, run the following command at the root of the project:

```bash
npm install
```

## 🔧 Development Server

To start the development server, run:

```bash
ng serve -o
```

This will start a development server and the application will be accessible at `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## 🏗️ Project Structure

The Angular project follows a conventional structure as shown below:

```sh
Redesign-Website/
│
├── src/
│ ├── app/
│ │ ├── components/ # Application components
│ │ ├── services/ # Services to interact with the API
│ │ ├── models/ # Data models
│ │ ├── app-routing.module.ts # Route configuration
│ │ ├── app.module.ts # Main module configuration
│ │
│ ├── assets/ # Static files (images, fonts, etc.)
│
├── angular.json # Global project configuration
├── package.json # Dependencies and scripts list
├── README.md # This file
```

## 🔨 Code Generation

Angular CLI makes it easy to generate components, services, and other artifacts. Here’s how you can generate these elements:

- Generate a component:

  ```bash
  ng generate component component-name
  ```

- Generate a service:

  ```bash
  ng generate service service-name
  ```

## 🏗️ Build the Project

To build the project for production, run:

```bash
ng build
```

The build artifacts will be stored in the `server/dist/` directory.

### 🌐 Production Server

We have included a Node.js and Express.js server for production. To start the server, navigate to the server directory:

```bash
cd server
```

Then install the dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

This will start the server and the application will be accessible at `http://localhost:80/`.

## ✅ Running Unit Tests

To run the unit tests, use the following command:

```bash
ng test
```

This will execute the unit tests via Karma.

## 🌐 Running End-to-End Tests

To run end-to-end tests, use the following command:

```bash
ng e2e
```

You will need to add a package that implements end-to-end testing capabilities.

## 💡 Additional Help

If you need more help with using Angular CLI, you can run the following command:

```bash
ng help
```

You can also refer to the [Angular CLI Overview and Command Reference](https://angular.io/cli).
