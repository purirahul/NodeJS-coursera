var rect = require('./rectangle.js')

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l,b, (err, rectangle) => {
      if(err){
        console.log("ERROR :" + err.message);
      }

      else{
        console.log("The Area of rectangle is :" + rectangle.area());
        console.log("The Perimeter of rectangle is :" + rectangle.perimeter());
      }
    });

    console.log("This is after rect() call");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);
