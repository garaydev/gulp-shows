/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

// JavaScript source code
"use strict";

var gulp = require('gulp'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      maps = require('gulp-sourcemaps'),
	  jshint = require('gulp-jshint');

gulp.task("concatJS", function () {
    return gulp.src([
        'Scripts/main.js',
        'Scripts/double.js'
    ])
        .pipe(maps.init())
        .pipe(concat('app.js'))
        .pipe(maps.write('./'))
        .pipe(gulp.dest('Scripts'));
});

gulp.task("minifyJS", ['concatJS'], function () {
    return gulp.src("Scripts/app.js")
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('Scripts'));
});

gulp.task("jsHint", function () {
    return gulp.src('Scripts/main.js')
    .pipe(jshint())
	.pipe(jshint.reporter('jshint-stylish', { verbose: true }));
});

gulp.task("default", ["minifyJS"], function () {
});