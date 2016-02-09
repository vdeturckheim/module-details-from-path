'use strict'

var assert = require('assert')
var parse = require('./')

var paths = {
  '/path/to/node_modules/name/index.js': { name: 'name', basedir: '/path/to/node_modules/name', path: 'index.js' },
  '/path/to/node_modules/name/sub/index.js': { name: 'name', basedir: '/path/to/node_modules/name', path: 'sub/index.js' },
  '/path/to/node_modules/invalid/node_modules/name/index.js': { name: 'name', basedir: '/path/to/node_modules/invalid/node_modules/name', path: 'index.js' },
  '/path/to/node_modules': undefined,
  '/path/to/no/module': undefined,
  '': undefined
}

Object.keys(paths).forEach(function (path) {
  var result = paths[path]
  assert.deepStrictEqual(parse(path), result)
})
