# DtimTechprofile

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Some thoughts when this was ported from v7 to the current v12

    I ran 
        mkdir foo && cd foo
        ng new <project-name> --create-application=false
        cd <project-name>
        ng generate library <project-name>

        ...to create the new shell for this library

    Then, I copied the <project-name>/src/lib/_services directory from v7 to v12
    Then, I had to update the version in the package.json for v12
        also, set this --> "name": "@savvato-software/savvato-javascript-services",

    Then, public-api.ts. Find the original file, make sure the same services are exposed in the new package

    Then, 'ng build' to create the dist directory containing the npm dependency.

    Then, to deploy to npm,
        npm login
        npm publish ./dist/savvato-javascript-services/ --dry-run 

    ...and then I had a bunch more errors, and forgot to update this as I went, but it
        mainly had to do with dependencies, and exports and so forth. I just trial and errored
        it, copying files from the original repo until it worked.

## Code scaffolding

Run `ng generate component component-name --project dtim-techprofile` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project dtim-techprofile`.
> Note: Don't forget to add `--project dtim-techprofile` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build dtim-techprofile` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build dtim-techprofile`, go to the dist folder `cd dist/dtim-techprofile` and run `npm publish`.

## Running unit tests

Run `ng test dtim-techprofile` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
