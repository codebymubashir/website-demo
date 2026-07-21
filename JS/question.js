// ===================   QUESTIONS  =====================

// question no 1
// //Create an array of student names and print each
// let arr2 = ["ahmed","ali","hmmad","akbar","ahsan","mubashir"];
// arr2.forEach((students)=>{
//     console.log(students)

// })  
// console.log(arr2)


// //question 2
// //Write code to add an item at the end of an array and remove the first item from it.
// let arr3 = [1,3,4,5,6,7,8];
// arr3.push(5)
// arr3.shift()
// console.log(arr3)



// QUESTION 3
// filter numbers greater than 5 

// let arr4 = [1,2,3,4,5,6,7,8,9,10]
// let newNums = arr4.filter((num)=>{
//     return num > 5
// })
// console.log(newNums)


// QUESTION 4
// fILTER even number from an array

// let arr5 = [1,2,3,4,5,6,7,8,9,10]
// let evenNums = arr5.filter((nums)=>{
//     return nums%2===0
// })
// console.log(evenNums)


// QUESTION 5
// Write a function using filter() that returns only the names (not full objects) of students who scored 60 or above.
// let students = [
//   { name: "Ali", marks: 85 },
//   { name: "Sara", marks: 42 },
//   { name: "Zain", marks: 67 },
//   { name: "Hina", marks: 90 },
//   { name: "Omar", marks: 55 }
// ];
// let studentNames = students.filter((student)=> {
//     return student.marks >= 60})
//     .map((student)=>student.name)

// console.log(studentNames)


// //QUESTION 6
// //Map prices to include GST (18%)
// let prices = [200,122,300,444,555];
// let pricesGst = prices.map((prices)=> prices+prices*0.18 );
// console.log(pricesGst)


// QUESTION 7
// reduce method

// let arr6 = [1,2,3,4]
// let myTotal = arr6.reduce((acc,cu)=>{
//     console.log(`acc${acc},cu${cu}`)
//     return acc + cu },3)
// console.log(myTotal)




// Question 8
// //reduce salaries to total payroll

// let arr7 = [
//   { name: "Ali", salary: 50000 },
//   { name: "Sara", salary: 65000 },
//   { name: "Zain", salary: 45000 },
//   { name: "Hina", salary: 80000 },
//   { name: "Omar", salary: 55000 }
// ];

// let totalPayroll = arr7.reduce((total,emp)=>{
//     return total + emp.salary
// },0)
// console.log(totalPayroll)


// QUESTION 9
// You have an array of orders, each with a status field ("delivered", "pending", "cancelled") and an amount. Write code to calculate the total revenue from only the delivered orders.

// let arr8 = [
//   { orders:"pending", amount: 500 },
//   { orders: "deliverd", amount: 650 },
//   { orders: "cancelled", amount: 450 },
//   { orders:"pending", amount: 600 },

// ];
// // let orderTotal = arr8.filter((items)=>{
// //     return items.orders ==="pending"
// // })
// let orderTotal = arr8.reduce((acc,items)=>{
//     return acc + items.amount
// },0)
// console.log(orderTotal)


// QUESTION 9
// SORT ARRAY OF AGES IN ACCESSNDING ORDER

// let arr9 = [12,9,33,6,55]
// let sort = arr9.sort((a,b)=>a-b)
// console.log(sort)


// QUESTION 10
// //WRITE A FUNCTION TO REVERSE AN ARRAY 
// let arr9 = [2,4,5,6,7,8]
// let rev = arr9.reverse()
// console.log(rev)

// QUESTIONS 11
// Create an array of employee names and print each one with "Welcome, " before it.
// let arr9 = ["ahmed","ali","ammar","zohaib"]
// arr9.forEach((students)=>{
//     console.log("welcome", students)
// })
// console.log(arr9)


// QUESTION 12
// Filter out all numbers greater than 50 from an array of exam scores.
// let arr9 = [22,55,33,66,77,99]
// let totalMarks = arr9.filter((marks)=>{
//     return marks >= 55

// })
// console.log(totalMarks)


// QUESTION 13
// Use filter() + map() together: from an array of student objects, get the names of only those students whose age is 18 or above.

// let arr9 =[
//     {names:"ali",age:33},
//     {names:"ahmed",age:12},
//     {names:"zain",age:18},
//     {names:"zohaib",age:55},
//     {names:"ammar",age:13},
// ]
// let totalAge = arr9.filter((ages)=>{
//     return ages.age>=18
// })
// console.log(totalAge)



// QUESTION 14
// From an array of numbers [10, 20, 30, 40, 50], extract the first 3 numbers into a new array without changing the original.

// let arr9 = [10,20,30,40,50]
// let newArr = arr9.slice(0, 3);
// console.log(arr9);
// console.log(newArr);

// QUESTION 15
// From an array of names, replace the element at index 1 with a new name using splice().

// let arr9 = ["ali","ahmed","hmmad","abdullah"]
// arr9.splice(1, 1, "Ahmed");
// console.log(arr9);



// Check if a number is even or odd

// Find the largest of three numbers
// Find the smallest of three numbers
// Check if a number is positive, negative, or zero
// Calculate the sum of digits of a number
// Reverse a number (e.g., 123 → 321)
// Check if a number is a palindrome (e.g., 121)
// Check if a number is prime
// Print all prime numbers up to N
// Find the factorial of a number 
// Generate the Fibonacci series up to N terms
// Check if a number is an Armstrong number (e.g., 153)
// Find the GCD (HCF) of two numbers
// Find the LCM of two numbers
// Swap two numbers without using a third variable










//========================FOR LOOP =================================//
// 1..print numbers from 1 to 10

// for(let i=1;i<=10;i++){
//     console.log(i)

// }

//print even numbers between 1 and 20
// for(let i =1; i<=20; i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//Print odd numbers between 1 and 20. 
// for(let i =1; i<=20; i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


// Print numbers from 10 down to 1
// for(let i=10; i>=1; i--){
//     console.log(i)
// }

// Print the multiplication table of 5. 

// let num = 5;
// for(let i=1; i<=10; i++){
//     console.log(`${num}x${i}=${num*i}`)
// }

// Print all numbers divisible by 3 from 1 to 30. 
// for(let i=1; i<=30;i++){
//     if(i%3==0){
//         console.log(i)
//     }
// }

