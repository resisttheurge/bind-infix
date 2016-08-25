'use strict'

/**
 * Given a function that takes n parameters, returns a function that takes n - 1
 * parameters and can be called with an infix bind operator. The bound value
 * will be provided to the given function as its first parameter, followed by
 * any additional arguments to the returned function.
 *
 * @param  {function} f the function to make infix.
 * @return {function}   an equivalent function that can be called with an infix
 *                      bind operator
 */
const infix = f =>
  function (...args) {
    return f(this, ...args)
  }

module.exports = infix
