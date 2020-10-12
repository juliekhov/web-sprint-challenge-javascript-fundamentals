/* ===== Prototype Practice ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to 
//        cubes but do not have the same side lengths. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

// constructor function with attrs parameter
function CuboidMaker(attrs) {
    // implicit binding for cuboid properties
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
}

/* == Step 2: Volume Method ==
Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height

Formula for cuboid volume: length * width * height
*/

// must use prototype to create a function for parent constructor function
CuboidMaker.prototype.volume = function(this.length, this.width, this.height) {
    // just return the volume
    return this.length * this.width * this.height;
};

/* == Step 3: Surface Area Method ==
Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker.prototype.surfaceArea = function(this.length, this.width, this.height) {
    // just return the surfaceArea
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
};

/* == Step 4: Create a new object that uses CuboidMaker ==
Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// new binding to make anotha cuboid with measures of my choosing
const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130