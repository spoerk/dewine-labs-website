# Installation and Build Guide for the bootstrap website

Most information is taken from a youtube video here: https://youtu.be/0w0Q0y31qSg

## Install Node Js

Download and install Node 18.12.1 LTS from https://nodejs.org/en/

## Configurre node project

init the node project in the base folder (dewine_lab_website):
npm init -y

## Install Parcel in NPM

npm install --save-dev parcel

Note: I have changed the package.json to have the following script compile and run the bootstrap:
npm run dev


## Install Boostrap

npm install bootstrap

## Developing the website
To develop the website locally on your machine, use the following npm command:
 ```
 npm run start
 ```


## Publish a new version of the website
To publish a website version, use the following npm command:
```
npm run build
```

Commit and push the existing changes to the master of the repo.
Then, run the following npm command to publish the changes:
```
npm run deploy
```





TODO:
Split things in HTML partials with posthtml-include: https://aileenrae.co.uk/blog/lets-build-a-landing-page-with-parcel/
