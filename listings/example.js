"use strict"

// this is one way to do it
var Calculator1 = function() {
  this.result = 0;
  this.add   = function(n) { this.result += n; return this.result; };
  this.mult  = function(n) { this.result *= n; return this.result; };
  this.reset = function()  { this.result = 0;  return this.result; };
};

/*
  but this also works
 */
var Calculator2 = function() {
  var result = 0;
  return {
    add:   function(n) { result += n; return result; },
    mult:  function(n) { result *= n; return result; },
    reset: function()  { result = 0;  return result; }
  }
};

var test4 = function() {
  var c1 = new Calculator1();
  console.log("c1.add(2)  = " + c1.add(2));
  console.log("c1.mult(3) = " + c1.mult(3));
  console.log("c1.result  = " + c1.result);
  console.log("c1.reset() = " + c1.reset());
  console.log("c1.result  = " + c1.result);

  console.log("----------");

  var c2 = new Calculator2();
  console.log("c2.add(2)  = " + c2.add(2));
  console.log("c2.mult(3) = " + c2.mult(3));
  console.log("c2.result  = " + c2.result);
  console.log("c2.reset() = " + c2.reset());
  console.log("c2.result  = " + c2.result);
};