'use strict';

var a = function() {
  console.log(arguments);
};

a.prototype.test = function (param) {
  return param;
};

module.exports = a;
