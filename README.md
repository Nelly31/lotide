# lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nelly31/lotide`

**Require it:**

`const _ = require('@nelly31/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

  * function head(): returns the first element of an array
  function tail(): returns everything except the first element of an array
  * function middle(): returns the middle element of an array or the middle 2 elements if the array length is even
  * function assertArraysEqual(): checks that 2 arrays are equal and console logs an assertion
  * function assertEqual(): checks that 2 strings are equal and console logs an assertion
  * function assertObjectsEqual(): checks that 2 objects are equal and console logs an assertion
  * function countLetters(): counts the letters in a string
  function countOnly(): counts the number of times a given element appears in an array
  * function eqArrays(): checks the length of 2 arrays are equal
  function eqObject(): checks 2 objects are the same and returns true or false
  * function findKey(): given a key and an object returns the associated value
  * function findKeyByValue(): given a value and an object returns the key
  * function flatten(): given a number of arrays returns all the elements in just 1 array
  * function letterPositions(): returns an object with each letter and it's corresponding index
  * function map(): given an array and a function returns a new array amended based on the callback function
  * function takeUntil(): given an array and a function returns everything in the array up until the function condition
  * function without(): given a primary array and a test array removes items from the primary array if they match the test array and then returns a new array with only the unique items from the primary array.