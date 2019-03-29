var name = "Other Bruce"

const bruce = { 
    name: "Bruce", 
    bruceGreet: function() {
        console.log(name);
        this.name = "This Bruce";
        return `Hello ${this.name}`;
    }
};
//here, bruce is an object with two properties, name,
//and greet(an anonymous function)
// dot notation is how you access the member properties of the object

/* bruceCopy.name = "BigBruce";
 */

console.log(bruce.bruceGreet());
var bruceCopy = bruce;


//here we log the function greet that is a property of bruce

const madeline = { name: "Madeline" };

function greet() {
    return `Hello ${this.name}`;
}
//extensible functions are functions you can apply to an object
madeline.madelineGreet = greet;
console.log(madeline.madelineGreet());
console.log(greet());

// greet(bruce);