# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @aidanmiddleton/lotide`

**Require it:**

`const _ = require('@aidanmiddleton/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: removes the last item of an array 
* tail: removes the first item in an array
* middle: returns the middle point value of an array. if it has an even number, it returns the middle 2 values
* assertEqual: checks if pieces of data are equal, compares an expected to an actual
* assertObjectsEqual: checks if two objects are equal, compares an expected to an actual 
* countLetters: counts the letters in a string
* countOnly: counts all of a particular string in a list of strings 
* eqArrays: checks if two arrays are equivalent 
* eqObjects: checks if two objects are equivalent
* findKey: finds a paerticular key in an object
* findKeyByValue: finds the name of a key based on a given value
* flatten: removes all nested arrays, and brings contents into single array
* letterPositions: finds letter at a specified index 
* map: runs a given callback function on every item of the array
* takeUntil:
* assertArraysEqual: asserts that an expected array is equal to the actual
* without: returns a new array that is missing whatever values you specified to be removed. 
