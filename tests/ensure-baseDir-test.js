'use strict';

const fs = require('fs');
const path = require('path');
const DebugToolsPlugin = require('..');

describe('baseDir', function() {
  it('returns directory with package.json', function() {
    let baseDir = DebugToolsPlugin.baseDir();
    let pkg = require(baseDir + '/package');

    expect(pkg.name).toBe('babel-plugin-debug-macros');
  });
});
