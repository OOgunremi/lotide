# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @OOgunremi/lotide`

**Require it:**

`const _ = require('@OOgunremi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: returns the first item in an array.
* `tail()`: returns the tail of an array: everything except for the first item.(head) of the provided array.
* `middle()`: takes in an array and returns the middle-most element(s) of the given array.
* `eqArrays()`: takes in two arrays and returns true or false, based on a perfect match.
* `assertEqual()`: compare the two values it takes in and print out a message telling us if they match or not.
* `assertArraysEqual()`:  takes in two arrays and console.log an appropriate message to the console.
* `assertObjectsEqual()`: takes in two objects and console.log an appropriate message to the console.
* `countLetters()`: takes in a sentence (as a string) and returns a count of each of the letters in that sentence.
* `countOnly()`: takes in a collection of strings and return counts for a specific subset of those strings. In order to decide what to count, it is given an idea of which items and it will only count those, ignoring the others.
* `eqObjects()`: takes in two objects and returns true or false, based on a perfect match.
* `findKey()`: takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue()`: takes in an object and a value, scan the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `letterPositions()`: returns all the indices (zero-based positions) in the string where each character is found. For each letter, multiple numbers may be returned to represent all the places in the string that the letter shows up.
* `map()`: takes in two arguments - an array to map and a callback function. The map function returns a new array based on the results of the callback function.
* `takeUntil()`: takes in two parameters - an array and a callback function. collects items from the provided array until the callback provided returns a truthy value.
* `without()`: Implement without which will return a subset of a given array, removing unwanted elements.
