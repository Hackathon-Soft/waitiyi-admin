# waitiyi

waitiyi.surge.sh

## Quick start

1. Make sure you have Node locally installed.
2. Download Gulp Command Line Interface to be able to use gulp in your Terminal.

```
npm install gulp-cli -g
```

5. After installing Gulp, run npm install in the main `pixel/` folder to download all the project dependencies. You'll find them in the `node_modules/` folder.

```
npm install
```

6. Run gulp in the `pixel/` folder to serve the project files using BrowserSync. Running gulp will compile the theme and open `/index.html` in your main browser.

```
gulp
```

While the gulp command is running, files in the `assets/scss/`, `assets/js/` and `components/` folders will be monitored for changes. Files from the `assets/scss/` folder will generate injected CSS.

Hit `CTRL+C` to terminate the gulp command. This will stop the local server from running.

## Theme without Sass, Gulp or Npm

If you'd like to get a version of our theme without Sass, Gulp or Npm, we've got you covered. Run the following command:

```
gulp build:dev
```

This will generate a folder `html&css` which will have unminified CSS, Html and Javascript.

![waitiyi](https://github.com/Hackathon-Soft/waitiyi-admin/assets/99708427/8e296a92-5694-4e15-b0fa-4dc713c7d1a2)




```
gulp build:dist
```

This will generate a folder `dist` which will have minified CSS, Html and Javascript.
