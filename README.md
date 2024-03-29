# bind-infix
Portable, lightweight JavaScript method extensions, minus the monkeypatching.

## Installation
As a managed local dependency (do this): `npm install --save bind-infix`

As a managed local development dependency (or this): `npm install --save-dev bind-infix`

As an extraneous local dependency (preferably not this): `npm install bind-infix`

As a global dependency (and especially not this): `npm install -g bind-infix`

## Usage
```javascript
// 1. Import the infix function
import infix from 'bind-infix'

// 2. Define a prefix-call implementation of a generally useful method,
//    such as flatMap
const prefixflatMap = (array, mappingFunction) =>
  array.reduce(
    (partialResult, nextElement) =>
      [...partialResult, ...mappingFunction(nextElement)],
    []
  )

// 3. Create an infix-call implementation of the prefix-call function
//    using the infix function
const flatMap = infix(prefixflatMap)

// 4. Call your new function using the bind operator
const chars = ['Hello,', ' ', 'world!']::flatMap(string => [...string])
// chars =  ['H', 'e', 'l', 'l', 'o', ',', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```
## Prerequisites
This module has no transitive, peer, or development dependencies. Node and npm are the only practical requirements for use. This module can also be easily recreated in a couple of lines of code (even only one) in virtually any JavaScript environment.

It is highly recommended that code calling functions enhanced by the `infix` function be written for a native or transpiled JavaScript environment with support for the `::` (bind) operator. This module really only provides syntactic benefits, which rely entirely on the `::` operator to be effective. The `babel-preset-stage-0` module provides support for the `::` operator when using babel as a transpiler.
