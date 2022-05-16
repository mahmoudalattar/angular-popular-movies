
# AngularPopularMovies

Angular popular movies with search and movie details (based on moviedb.org https://developers.themoviedb.org/3)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Home Page

![HomePage](https://user-images.githubusercontent.com/30865587/168505556-9f861a33-f3d8-471f-8f7a-deb80b7cdc2a.png)

## Movie Details Modal

![MovieDetails](https://user-images.githubusercontent.com/30865587/168505536-32528a4a-ef5f-4bf1-b0f2-b3ed11ef2ce1.png)

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker build with NGINX

Run `docker build -t <user>/popular-movies-angular-app-image:latest`

## Docker run

Run `docker run -d -p 8080:80 <user>/popular-movies-angular-app-image:latest`
