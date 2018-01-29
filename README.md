# Framework7 Vue Browserify Template
Framework7 Vue with Browserify starter app template with hot-reload &amp; css extraction. Based on [Vue Browserify Boilerplate](https://github.com/vuejs-templates/browserify)

## Usage

### 1. Download this repository
```
git clone https://github.com/framework7io/framework7-template-vue-browserify my-app
```

Repository will be downloaded into `my-app/` folder

### 2. Instal dependencies

Go to the downloaded repository folder and run:
```
npm install
```

This will download latest version of Framework7, Framework7-Vue, Vue and required icon fonts (to `/www/fonts/`)

### 3. Run the app

```
npm run serve
```

App will be opened in browser at `http://localhost:8080/`

### 4. Build app for production

```
npm run build
```

The output will be at `www/` folder

## Use with cordova

Just put the contents of `www` folder in your cordova's project root `www` folder

## One command install

```
git clone https://github.com/framework7io/framework7-template-vue-browserify my-app &&
cd my-app &&
npm install &&
npm run dev
```

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
* `www/css` - app styles, put custom app CSS styles here as well
* `www/css/build.css` - Vue components styles will be extracted here on `npm run build`
