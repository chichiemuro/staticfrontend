let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.setPublicPath('assets')
    .setResourceRoot('resources').options({
    processCssUrls: false
});
mix.sass('resources/assets/sass/app.scss', 'css/portfolio.css').js('resources/assets/js/app.js','js/portfolio.js');