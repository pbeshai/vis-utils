# vis-utils

[![npm version](https://badge.fury.io/js/vis-utils.svg)](https://badge.fury.io/js/vis-utils)
[![Build Status](https://travis-ci.org/pbeshai/vis-utils.svg?branch=master)](https://travis-ci.org/pbeshai/vis-utils)

A collection of utility functions for helping with data visualization.

## Development

Run tests

```
npm run test
```

Build the package

```
npm run build
```

## Installing

If you use NPM, `npm install vis-utils`. Otherwise, download the [latest release](https://github.com/pbeshai/vis-utils/releases/latest).

## API Reference

- [`extentLimited`](#extentLimited)
- [`extentMulti`](#extentMulti)
- [`filterInRect`](#filterInRect)
- [`filterInRectFromQuadtree`](#filterInRectFromQuadtree)
- [`findClosestSorted`](#findClosestSorted)
- [`findClosestUnsorted`](#findClosestUnsorted)
- [`findEqualSorted`](#findEqualSorted)
- [`findEqualUnsorted`](#findEqualUnsorted)
- [`rectContains`](#rectContains)
- [`rectIntersects`](#rectIntersects)
- [`rotate`](#rotate)


### <a href="#extentLimited" name="extentLimited">#</a> extentLimited(array, valueAccessor, minPercentile, maxPercentile)

Compute the extent (min and max) of an array, limiting the min and the max
by the specified percentiles. Percentiles are values between 0 and 1.

**Parameters**
- **array** *(Array)* The array to iterate over
- **[valueAccessor]** *(Function)*  How to read a value in the array *(defaults to identity)*
- **[minPercentile]** *(Number)*  If provided, limits the min to this percentile value (between 0 and 1).
  If provided, the data is sorted by taking the difference of the valueAccessor results.
- **[maxPercentile]** *(Number)*  If provided, limits the max to this percentile value (between 0 and 1).
  If provided, the data is sorted by taking the difference of the valueAccessor results.

**Returns**

*(Array)* The extent, limited by the min/max percentiles (`[min, max]`)



### <a href="#extentMulti" name="extentMulti">#</a> extentMulti(outerArray, valueAccessor, arrayAccessor, minPercentile, maxPercentile)

Compute the extent (min and max) across an array of arrays/objects

For example:

```js
extentMulti([[4, 3], [1, 2]], d => d);
> [1, 4]
```

```js
extentMulti([{ results: [{ x: 4 }, { x: 3 }] }, { results: [{ x: 1 }, { x: 2 }] }],
  d => d.x, array => array.results);
> [1, 4]
```

**Parameters**
- **outerArray** *(Array)* An array of arrays or objects
- **[valueAccessor]** *(Function)* How to read a value in the array *(defaults to identity)*
- **[arrayAccessor]** *(Function)* How to read an inner array *(defaults to identity)*
- **[minPercentile]** *(Number)* If provided, limits the min to this percentile value (between 0 and 1).
  If provided, the data is sorted by taking the difference of the valueAccessor results.
- **[maxPercentile]** *(Number)* If provided, limits the max to this percentile value (between 0 and 1).
  If provided, the data is sorted by taking the difference of the valueAccessor results.

**Returns**

*(Array)* The min and max across the arrays (`[min, max]`)


### <a href="#filterInRect" name="filterInRect">#</a> filterInRect(array, rect, x, y)

Filters the elements in the passed in array to those that are contained within
the specified rectangle.

**Parameters**

- **array** *(Array)* The input array to filter
- **rect** *(Number[][])* The rectangle, a pair of two points [[x, y], [x, y]]
- **x** *(Function)* Function that maps a point in the array to its x value
  *(defaults to d => d[0])*
- **y** *(Function)* Function that maps a point in the array to its y value
  *(defaults to d => d[1])*

**Returns**

*(Array)* The subset of the input array that is contained within the rectangle


### <a href="#filterInRectFromQuadtree" name="filterInRectFromQuadtree">#</a> filterInRectFromQuadtree(array, rect, x, y)

Filters the elements in the passed in quadtree to those that are contained within
the specified rectangle.

**Parameters**

- **quadtree** *(Object)* The input data as a d3-quadtree to filter
- **rect** *(Number)* The rectangle, a pair of two points [[x, y], [x, y]]
- **x** *(Function)* Function that maps a point in the array to its x value
 *(defaults to d => d[0])*
- **y** *(Function)* Function that maps a point in the array to its y value
 *(defaults to d => d[1])*

**Returns**

*(Array)* The subset of the input data that is contained within the
 rectangle



### <a href="#findClosestSorted" name="findClosestSorted">#</a> findClosestSorted(array, value, accessor)

Helper function to compute distance and find the closest item
Since it assumes the data is sorted, it does a binary search O(log n)

**Parameters**

- **array** *(Array)* the input array to search
- **value** *(Number)* the value to match against (typically pixels)
- **[accessor]** *(Function)* applied to each item in the array to get equivalent
  value to compare against *(defaults to identity)*

**Returns**

*(Any)* The item in the array that is closest to `value`


### <a href="#findClosestUnsorted" name="findClosestUnsorted">#</a> findClosestUnsorted(array, value, accessor)

Helper function to compute distance and find the closest item
Since it assumes the data is unsorted, it does a linear scan O(n).

**Parameters**

- **array** *(Array)* the input array to search
- **value** *(Number)* the value to match against (typically pixels)
- **[accessor]** *(Function)* applied to each item in the array to get equivalent
  value to compare against *(defaults to identity)*

**Returns**

*(Any)* The item in the array that is closest to `value`



### <a href="#findEqualSorted" name="findEqualSorted">#</a> findEqualSorted(array, value, accessor)

Helper function to find the item that matches this value.
Since it assumes the data is sorted, it does a binary search O(log n)

**Parameters**
- **array** *(Array)* the input array to search
- **value** *(Number)* the value to match against (typically pixels)
- **[accessor]** *(Function)* applied to each item in the array to get equivalent
  value to compare against *(defaults to identity)*

**Returns**

*(Any)* The item in the array that has this value or null if not found


### <a href="#findEqualUnsorted" name="findEqualUnsorted">#</a> findEqualUnsorted(array, value, accessor)

Helper function to find the item that matches this value.
Since it assumes the data is unsorted, it does a linear scan O(n).

**Parameters**
- **array** *(Array)* the input array to search
- **value** *(Number)* the value to match against (typically pixels)
- **[accessor]** *(Function)* applied to each item in the array to get equivalent
  value to compare against *(defaults to identity)*

**Returns**

*(Any)* The item in the array that has this value or null if not found

### <a href="#rectContains" name="rectContains">#</a> rectContains(rect, point)

Determines if a point is inside a rectangle. The rectangle is
defined by two points `[[rx1, ry1], [rx2, ry2]]`.
  - the upper left corner (rx1, ry1)
  - the bottom right corner (rx2, ry2)

Note that it is assumed that the top Y value is less than the bottom Y value.

**Parameters**

- **rect** *(Number[][])* The rectangle, a pair of two points
   [[x, y], [x, y]]
- **point** *(Number[])* The point ([x, y])

**Returns**

*(Boolean)* true if the point is inside the rectangle, false otherwise


### <a href="#rectIntersects" name="rectIntersects">#</a> rectIntersects(rect1, rect2)

Determines if two rectangles intersect. Here a rectangle is defined
by its upper left and lower right corners.

Note that it is assumed that the top Y value is less than the bottom Y value.

**Parameters**

- **rect1** *(Number[][])* The first rectangle, a pair of two points
   [[x, y], [x, y]]
- **rect2** *(Number[][])* The second rectangle, a pair of two points
   [[x, y], [x, y]]

**Returns**

*(Boolean)* true if the rectangles intersect, false otherwise

### <a href="#rotate" name="rotate">#</a> rotate(point, thetaRadians, origin)

Rotate a point ([x, y]) around an origin ([x, y]) by theta radians

**Parameters**

- **point** *(Number[])* The point to rotate [x, y]
- **thetaRadians** *(Number)* How many radians to rotate the point around origin
- **[origin]** *(Number[])* The origin to rotate around [x, y] *(defaults to [0, 0])*

**Returns**

*(Number[])* The rotated point [x, y]
