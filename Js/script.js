console.log("hello console");

// dont forget semicolon is optional, if you write this code you can`t take results that you expect.
function x (){
    return  // in this line compiler ends function because ; is optional, end dont allow to go bottom
    {
        o : "function returns before come here.";
    }
}
x();

var a = "new variable";

// types
var d; // d is undefined not "not defined". Not defined means that it has not initiated yet.
var i = 1; // number
var married = true; // boolean
var name = "Ali GOCMEN"; // string
var Animal = new Object();
Animal.name = "Lion";
Animal.family = "Cats";
Animal.averageLife = 20;

var animals = new Object();
animals[2] = Animal;
console.log(Animal);
console.log(animals);

var kids = { // object (like collection)
    daughter : "Hulya",
    son : "Mehmet"
}
// if you get a console msg as "NaN", it means Not a number
// for example console.log("asd" * 3); => this will give as a result NaN.
console.log("asd" * 3);
console.log(a);

if(!(false || undefined || 0 || "" || null || NaN))
    console.log("This all false");

if(true && -1 && 1 && "false")
    console.log("This all true");

function b(t){

    console.log("function b logs variable:"+t);
}

var fA = function a(){

    b("function a invokes function b");
}

function loopTry(){
    for(var i = 0; i<10; i++){
        console.log("i :"+i);
    }
}
fA();
loopTry();

var ff = function multiplier(x){
return x*x;
}

var dd = ff(2);

console.log(ff(dd));
console.log(ff);

var fWithParamF = function (p, f){
return f(p);
}

var fWPF = fWithParamF(4,ff); // send 4 as a paramether to ff function, then in the fWithParamF function ff will be invoked with param 4
console.log(fWPF);

// IMPORTANT
// when you define an object as a value of another object, this means you gave a reference for another object
// so, as an example

var a = 4;
var b = a;
// b is not an object
// value of b is 4
// but

var a = {val : 4};
var b = a;
// this time value of b is just reference of a
// as an example if you change value of a or b this means you changed object that is value of a
b.val = 5;
// after this assignment
console.log(a);
console.log(b); // both of these give {val : 5};

// prototype of the functions
// like a property class -- POJO -- Model class -- anything else
var circle = function(r){
    this.r = r;
}
circle.prototype.getArea = 
function(){
return this.r * this.r * 3.14;
};

var myCircle = new circle(3);
console.log(myCircle);

// ARRAYS
var arr = new Array();
arr[0] = 1;
arr[1] = "Ali";
arr[2] = function(s){
    console.log("Hello "+s+"!");
}
arr[3] = ["xamarin", "xamarin.android", "Unity"];

console.log(arr);
arr[2]("Everyone");
console.log(arr[3][2]);

// FOREACH
// basic type for object or array
for(var item in kids){
console.log("My "+item +" "+kids[item]);
}

// query type for array and so: you can not loop an object like this
arr.forEach(element => {
console.log(element);    
});

// IIFE
(function(){console.log("I am IIFE")})();

// send value to global
var g = function(window){
    var innerVal = 3;    
    window.outerVal = innerVal;
};

g(window);
console.log(window.outerVal);