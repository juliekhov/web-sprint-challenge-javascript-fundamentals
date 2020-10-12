// 1. Copy and paste your prototype in here and refactor into class syntax.

// convert psuedo-instantiated class to class syntax
// cuboidMaker, l,w,h properties, volume and surfaceArea methods
class CuboidMaker {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(this.length, this.width, this.height) {
        return this.length * this.width * this.height;
    }
    surfaceArea(this.length, this.width, this.height) {
        return 2 * (this.length * this.width + this.height * this.length + this.width * this.height);
    }
}

// new binding to make another cuboid with measurements of my choosing
const cuboid = new CuboidMaker({ length: 4, width: 5, height: 5 });

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods 
// using the dimension properties from CuboidMaker.  Test your work by logging
// out your volume and surface area.

class CubeMaker extends CuboidMaker {
    // child constructor here
    constructor(babyAttrs) {
            super(babyAttrs);
        }
        // 6 side lengths are equal
    volume(this.length) {
        return this.length * this.length * this.length;
    }
    surfaceArea(this.length) {
        return 2 * (this.length * this.length + this.length * this.length + this.length * this.length);
    }
}