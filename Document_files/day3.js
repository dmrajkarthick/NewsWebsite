// var x=2
// var y=3
// // console.log(x+y)
// function abc(x,y)
// {
//     return x+y;
// }
// console.log(abc(3,5))
// console.log(abc(3,6))

// function factorial(n, accumulator) {   /*recursive function*/
//     if (n == 0) {
//         return accumulator
//     }
//     return factorial(n - 1, n * accumulator)
// }
// console.log(factorial(5, 1))

// Object
//  var obj = {
//    fruit: "apple",
//      vehicle: "Honda",


//     myArry: [{
//         arrObj1: "arrObj1",
//         arrObj2: "arrObj1",
//         arrObj3: "arrObj1",
//         nestedArray: [2, 34, 5, {
//             arr: "value"
//         }]
//     },

//     {
//         arrObj1: "arrObj12",
//         arrObj2: "arrObj12",
//         arrObj3: "arrObj12",
//     },
//     {
//         arrObj1: "arrObj13",
//         arrObj2: "arrObj13",
//         arrObj3: "arrObj13",
//     }]
// }
// var arr = [1,2,3]
// console.log(obj.myArry[1])
// console.log(obj)

// var val = 1;  
// document.write("Value for a variable is : " + val + "<br/>");  

// if (val == true)  
//     document.write("== returns True <br/>")  
// else  
//     document.write("== returns False <br/>")  

// if (val === true)  
//     document.write("=== returns True <br/>")  
// else  
//     document.write("=== returns False <br/>")  
// if (val="2")
// document.write("value is:", val)
//  else 
//  document.write("g")
//  if(val==2)
// //  document.write("false")
// var foo = 0;
// switch (foo) {
//   case -1:
//   case 0:
//   default:
//     console.log('negative 1');



//   case 0: // foo is 0 so criteria met here so this block will run
//     console.log(0);
//     break;
//     // NOTE: the forgotten break would have been here
//   case 1: // no break statement in 'case 0:' so this case will run as well
//     console.log(1);
//     console.log('default');
//     break; // it encounters this break so will not continue into 'case 2:'
//   case 2:
//     console.log(2);
//     break;

// }
// var result = "";
// var i = 0;
// do {
//     i = i + 1; //Doubt/for...in loop / function*- generator
//     result = result + i;
// } while (i < 5);
// document.write(result);
// var obj = { a: 1, b: 2, c: 3 };
// for (var x in obj) {
//     console.log(obj[x]);
// }

// var obj = {
//     first: "1",
//     second: "2",
//     third: "3"
// }

// console.log(Object.keys(obj))

// var arrObj = Object.keys(obj)

// for (var i = 0; i < arrObj.length; i++) {
//     console.log(obj[arrObj[i]])
// }

// for (var xyz in obj) {
//     // console.log(xyz)
//     console.log(obj[xyz])

// }

// var arr = [1, 2, 3]

// function abc(array) {
//     var newArray = []
//     newArray = new Array(arr);
//     newArray[3] = 15
//     console.log(newArray)
// }
// abc(arr)

// function xyz(array) {
//     var newArray = []
//     newArray = new Array(arr);
//     newArray[4] = 10
//     console.log(newArray)
// }
// xyz(arr)

// console.log(arr)


// var random = "bipul"

// function abc(rand) {
//     var newRand = ""
//     newRand = rand;
//     newRand = "arka"
//     console.log(newRand)
// }
// abc(random)

// function xyz(rand) {
//     var newRand = ""
//     newRand = rand;
//     newRand = "sarkar"
//     console.log(newRand)
// }
// xyz(random)

// console.log(random)


// Math
// function mathExample(value){
//     console.log("Rounding up: "+Math.ceil(value))
//     console.log("Rounding down: "+Math.floor(value))
//     console.log("Random number 0<10<: "+Math.floor(Math.random()*10))
// }
// mathExample(3.6)


// var str = Boolean("null")
// var str = Boolean(NaN)

// var cond = 10/0

// if(cond){
//     console.log("Hi I'm bipul")
// }


