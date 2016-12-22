# Framework7 Vue Browserify Template
Framework7 + Vue + Browserify starter app template with hot-reload &amp; css extraction. Based on [Vue Browserify Boilerplate](https://github.com/vuejs-templates/browserify)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Project Structure

* `src/components` - folder with custom `.vue` components
* `src/pages` - app `.vue` pages
* `src/main.js` - main app file where you include/import all required libs and init app
* `src/routes.js` - app routes
* `src/app.vue` - main app structure/component
* `dist/css` - app styles, put custom app CSS styles here as well
* `dist/css/build.css` - Vue components styles will be extracted here on `npm run build`
