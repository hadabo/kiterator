'use strict';

import gulp from 'gulp'
import file from 'gulp-file'

import generatorConfig, {techs as techData} from './generator.config.js'
import {depData, versionData, getDependencies} from './lib'

let dependencies = getDependencies(techData, depData, versionData)

gulp.task('default', ['generate:package.json'])


// Generate package.json
gulp.task('generate:package.json', () => {
  let npmObject = {}

  npmObject.name = generatorConfig.name
  npmObject.version = generatorConfig.version
  npmObject.description = generatorConfig.description
  npmObject.scripts = generatorConfig.scripts
  npmObject.repository = generatorConfig.repository
  npmObject.author = generatorConfig.author
  npmObject.license = generatorConfig.license
  npmObject.depData = dependencies.npm
  npmObject.devDependencies = dependencies.npmDev

  return file('package.json', JSON.stringify(npmObject, null, 2))
    .pipe(gulp.dest('./generated'));
})
