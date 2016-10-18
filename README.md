# aspnetcore-angular2-starter

Visual Studio/Code project for ASP.NET Core, Angular 2, and TypeScript 2 using Webpack

* Visual Studio 2015 Update 3
* Visual Studio Code
* [ASP.NET Core 1.0.1](https://www.microsoft.com/net/core)
* Angular 2.1.0
* Angular Universal
* TypeScript 2
* Webpack
* Karma
* Protractor
* Bootstrap
* Swagger via [Swashbuckle (Ahoy)](https://github.com/domaindrivendev/Ahoy)

## command line

From the root folder, type the following commands:

```
cd src/webapp
npm install   -- or yarn
dotnet restore
npm run build:vendor
set ASPNETCORE_ENVIRONMENT=Development
npm start
```

Other commands:

```
npm run lint
npm run test
npm run e2e             (while running the app)
npm clean:dist          (cleanup dist directory)
```

## screenshots

![Home](https://raw.githubusercontent.com/sgbj/aspnetcore-angular2-starter/master/screenshots/home.png)

![About](https://raw.githubusercontent.com/sgbj/aspnetcore-angular2-starter/master/screenshots/about.png)
