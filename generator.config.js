const generatorConfig = {
  name: 'Starter Kit for React and Sass',
  slug: 'React-and-Sass-Starter-Kit',
  version: '1.0.0',
  description: 'Starter Kit for creating project using React and Sass',
  main: 'index.js',
  scripts: {
    test: 'echo \'Error: no test specified\' && exit 1'
  },
  repository: {
    type: 'git',
    url: 'git@bitbucket.org:baristnajobs/starterkitgenerator.git'
  },
  author: 'Baris Tuna <baristna@gmail.com>',
  license: 'ISC',
  paths: {
    base: './lib',
    assets: 'assets',
    generated: 'generated'
  },
  techs: {
    html: 'html',
    css: 'scss',
    js: 'reactjs',
    taskManager: 'gulp',
    bundler: 'webpack',
    test: ['mocha', 'jasmine']
  }
}

module.exports = generatorConfig
