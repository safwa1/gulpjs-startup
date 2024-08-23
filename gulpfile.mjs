import gulp from 'gulp';
import fileinclude from 'gulp-file-include';
import browserSync from 'browser-sync';
import {watch, series} from 'gulp';
import filter from 'gulp-filter';
import htmlBeautify from 'gulp-html-beautify';
import cleanCss from 'gulp-clean-css';
import * as dartSass from 'sass';
import autoprefixer from 'autoprefixer';
import gulp_sass from 'gulp-sass';
import terser from 'gulp-terser';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';

const sass = gulp_sass(dartSass);

const paths = {
    src: './src/',
    includes: './src/includes/**/*',
    dest: './build/',
    assets: {
        src: './src/assets/',
        dest: './build/assets/',
    },
    sass: {
        src: './src/sass/*.scss',
        dest: './build/assets/css/',
    },
    html: './src/*.html',
    js: './src/assets/js/**/*.js' // Path to your JS files
};

// Reload Server
function reload(done) {
    browserSync.reload();
    done();
}

// Sass compiler
function compileSass() {
    return gulp.src(paths.sass.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            autoprefixer({
                overrideBrowserslist: [
                    'last 4 versions'
                ],
                grid: true,
                cascade: false
            })
        ]))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.sass.dest))
        .pipe(browserSync.stream());
}

// Process JavaScript files (transpile, concatenate, and minify)
function processJs() {
    return gulp.src(paths.js)
        .pipe(concat('main.js')) // Concatenate all JS files into main.js
        .pipe(terser()) // Minify the concatenated JS file
        .pipe(gulp.dest(paths.assets.dest + 'js/')); // Output to JS folder
}

// Copy other assets
function copyAssets() {
    return gulp.src([`${paths.assets.src}**/*.{svg,png,jpg,css}`]) // Exclude JS from here
        .pipe(gulp.dest(paths.assets.dest));
}

// Include HTML and beautify
function includeHTML() {
    const f = filter(['**', '!src/includes/**'], {restore: true});
    return gulp.src(paths.html)
        .pipe(f)
        .pipe(fileinclude({
            prefix: '{{',          // Custom prefix
            suffix: '}}',          // Custom suffix
            basepath: '@file',     // Base path for includes
            context: {
                title: 'Gulp Startup Project',
                description: 'Just simple setup to use gulpjs',
                year: new Date().getFullYear(),
            }
        }))
        .pipe(htmlBeautify({indent_size: 2}))
        .pipe(gulp.dest(paths.dest));
}

// Build files and reload server
const buildAndReload = series(includeHTML, copyAssets, processJs, reload);

// Serve and watch files
function serve() {
    browserSync.init({server: {baseDir: paths.dest}});
    watch(paths.html, buildAndReload);
    watch([`${paths.assets.src}**/*`, paths.includes], buildAndReload);
    watch(paths.sass.src, series(compileSass, reload));
    watch(paths.js, series(processJs, reload));
}

// Exported tasks
export {includeHTML, compileSass, processJs};
export default series(buildAndReload, serve);
