# Design Operations Pipeline

This is an experiment to automate basic aspects of the design workflow within the context of a software development project.

### Mission statement

Things change. In software development things change a lot, particularly if your design and development teams are working closely together, may that be in a sprint cycle or regular production maintenance.

##### What and How

Design tools today, while not perfect, are reaching a more mature state. Sketch has a vast plugin ecosystem somewhat due to the fact that it can export artifacts in ways that are machine readable.

If a machine can read and parse these artifacts, then the process of those being a part of an automated build becomes trivial.

In order to achieve this we leverage [brand.ai](https://brand.ai "Brand.ai") coupled with their [sketch plugin](https://brand.ai/sketch "Brand.ai Sketch Plugin").

This service does several things for us:

1. Automates a design library
2. Can edit (read/write) design library in browser
3. Can edit (read/write) design library in Sketch via plugin
4. Can use (drag/drop) any artifact from the design library directly in Sketch via plugin
5. Can integrate with Slack for automated messaging
6. Can export assets in a variety of formats, including CSS, SCSS, LESS, JSON, Android, iOS

###### Assets included in our automated build

* Color palette
* Logos & Images
* Icons
* Sizing
* Shadows & Radius
* Typography

## First Run

Node v8.6.0

Angular CLI v1.4.3

1. npm install

#### NPM Scripts

This project heavily utilizes npm scripts, please refer to `package.json`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
