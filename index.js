"use strict";

/**
 * Module dependencies
 */

var crypto = require('crypto');

/**
 * 36 characters in the ascii range that can be used in URLs without special
 * encoding.
 */
var UIDCHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var LENGTH = 10;
/**
 * Make a Buffer into a string ready for use in URLs
 *
 * @param {String}
 * @returns {String}
 * @api private
 */
function tostr(bytes) {
  var chars, r, i;

  r = [];
  for (i = 0; i < bytes.length; i++) {
    r.push(UIDCHARS[bytes[i] % UIDCHARS.length]);
  }

  return r.join('');
}

/**
 * Generate an Unique Id
 *
 * @api public
 */

function uid(length) {
  if(!length){
    length = LENGTH;
  }
  return tostr(crypto.pseudoRandomBytes(length));
}

/**
 * Exports
 */
module.exports.id = uid;

