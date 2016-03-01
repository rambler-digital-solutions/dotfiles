'use strict';

// Depends
var chai = require('chai');
var exporter = require('../index.js');

describe('eslint.index', function () {
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
});
