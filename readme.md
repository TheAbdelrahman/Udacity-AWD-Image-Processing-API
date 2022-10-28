**Udacity Advanced Full-Stack Web Development Nanodegree Program**

**First Project**

# ****Image processing API****

A simple API to generate placeholders using sharp.

## **Table of contents**
- [`How to run the project`](#how-to-run-the-project)
- [`Technologies used`](#technologies-used)
- [Files names](#image-file-names)
- [Dependencies](#dependencies)
- [scripts](#scripts)

## **How to run the project :**

- This project runs on localhost:3000.
- Edit width & height in the url to get results.
- URL takes you to a router which leads to the middleware. 
- when goes as planned, it creates a new thumbnail without duplicating the same file. 
- when there is an error, a massage appears stating the problem. 
- errors will surely accure when :
  - wrong or missing file name in URL
  - Width/Height missing. or values are less than or equal to zero.
  


## **Technologies used :**

- All files were writen with [`VS Code`](https://code.visualstudio.com/)    using typescript then compiled to JS.
- node.js as a runtime.


## **image file names :**
- encenadaport
- fjord
- icelandwaterfall
- palmtunnel
- santamonica

## **Dependencies :**
- typescript
- express
- jasmine
- sharp
- supertest
- eslint
- prettier
- nodemon

## **Scripts :** 
- build: npx tsc 
- start : npm run build && node build/index.js 
- lint: eslint . --ext .ts 
- lint:fix: eslint --fix
- prettier: prettier --config .prettierrc 'src' --write
- jasmine: jasmine
- test: npm run build && jasmine"

## **Author :** 

Abdelrahman Abdullah 