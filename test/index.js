'use strict';

// Depends
var chai = require('chai');
var exporter = require('../index.js');
var CLIEngine = require('eslint').CLIEngine;

describe('eslint.index', function() {
  var expect = chai.expect;
  it('function should return object', function() {
    expect(exporter).to.be.an('object');
  });

  it('function should contain `parser` attribute', function() {
    expect(exporter).have.an.property('parser').is.equal('babel-eslint');
  });

  it('function should contain `ecmaFeatures` attribute', function() {
    expect(exporter).have.an.property('ecmaFeatures');
  });

  it('function should contain `rules` attribute', function() {
    expect(exporter).have.an.property('rules');
  });

  it('try to check case #1', function() {
    var cli = new CLIEngine({
      useEslintrc: false,
      configFile: '.eslintrc'
    });
    var report = cli.executeOnFiles([__dirname + '/cases/case-1.js']);

    expect(report).have.an.property('results');
    expect(report).have.an.property('errorCount');
    expect(report).have.an.property('warningCount');

    expect(report.results).to.be.an('array');
    expect(report.warningCount).to.equal(1);
    expect(report.errorCount).to.equal(1);
  });
});
