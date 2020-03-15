// ES6 JavaScript
// ARRAY HELPER

 <!-- forEach HELPER -->

 var colors=[ 'red', 'blue', 'green'];

//  for Loops
 for(var i= 0; i<colors.length; i++) {
     console.log(colors[i]);
 }


//forEach helper
 /*steps we created the array of strength and assigned it
 to array colors.
 colors.forEach- forEach is an array helper method.
 When we call the forEach helper, we are passing to functions. */

colors.forEach(function(color) {
    console.log(color);
});

answer= red, blue and green



// Array of numbers

var numbers =[1,2,3,4,5];

// Create a variable to hold the sum
var sum = 0;

or 

function adder(numer){
    sum += number;
}

// Loop over the Array, incrementing the sum variable
 
numbers.forEach(function(number) {
    sum +=number;

});

// print the sum variable

sum;
answer=15

// EXERCISES

function handlePosts() {
    var posts =[
        { id: 23, title:'Daily JS News'},
        { id: 52, title: 'Code Refactor City'},
        { id: 105, title: 'The Brightest Ruby'}
    ];

    posts.forEach(function(post) {
        savePost(post);
    });
}

//to see the areas of the images
var images = [
    { height:10, width: 30},
    { height:20, width: 90},
    { height:54, width:32}

];

var areas[];
images.forEach(function(image){
    areas.push(image.height*image.width);
});



<-- MAP HELPER -->

/*same process with forEach but there's a return keyword 
the musn't forget. Whatever the function return, is placed
to new array.After each element has been processed, the
new array has returned.
Map is used to modified records and some list of data
 Map is commonly used by front end development */

var numbers = [1,2,3];
var doubledNumbers = [];

for (var i= 0; i<numbers.length; i++) {
    doubledNumbers.push(number[i] *2);
}

//Map

var doubled = numbers.map(function(number){
    return number * 2;
});

doubledNumbers;
doubled;
answer= [2,4,6]

//This exercise is to see the car's price
var cars =[
    {model:'buick', price: 'cheap'},
    { model: 'camaro', price: 'expensive'}
];

var prices = cars.map(function(car){
    return car.price;
});

prices;
answer= [cheap, expensive]


//EXERCISES
 //to see images height
var images =[
    {height: '34px', width:'39px'},
    { height: '54px', width: '19px'},
    { height: '83px', width: '75px'}
];

var heights = images.map(function(image){
    return image.height;
});




// to calculate the distance/time of each trip
var trips =[
    {distance:34, time:10},
    {distance:90, time:50},
    {distance:59, time:25}
];

var speeds = trips.map(function(trip){
    return distance/time.speed;
});

/* implement a 'pluck function'. array and string representing
a property name. */

var paints = [
    { color: 'red'},
    {color:'blue'},
    {color: 'yellow'}

];

function pluck (array,property) {
    var colors = array.map(function(element){
      return element[property];  
    });
    return colors;
}


       <-- FILTER HELPER -->
//filter is used to filter the elements that you want to see only

var products = [
  { nme: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fuit' },
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'}
];

//for Loop

var filteredProducts =[];

for (var i = 0; i < products.length; i++) {
   if (products[i].type === 'fruit') {
       fileteredProducts.push(products[i]);

   }
}

//FILTER
products.filter(function(product){
    return product.type === 'fruit'
});


filteredProducts;


var products = [
    {name: 'cucumber', type: 'vegetable', quanityt: 0, price: 1},
    {name: 'banana', type: 'fruit', quantity: 10 price: 15},
    {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
    {name: 'orange', type: 'fruit', quantity: 3, price:5}
    ];

// type is vegetable, quantity is greater than 0, price is less than 10

products.filter(filter(product){
    return product.type === 'vegetable'
     && product.quantity > 0 
     && product.price < 10 
});


var post = { id: 4, title: 'New Post'};
var comments  [
    { postId: 4, content: 'awesome post'},
    { postId: 3, cntent: 'it was ok'},
    { postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment){
        return comment.postId === post.id;
    });
}

commentsForPost(post,comments)

//EXERCISES
//filter number greater than 50
var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
});

// filter users that have admin access
var users =[ 
    {id: 1, admin:true},
    {id:2, admin:false},
    {id:3, admin: false},
    {id: 4, admin: false},
    {id: 5, admin:true}
];

var filteredUsers = users.filter(function(user){
    return user.admin === true;
});

//create function called reject

var numbers = [10, 20, 30];

function reject(numbers, iteratorfunction) {
    return numbers.filter(function(number){
     return !iteratorFunction(number)
    });
}

            <-- FIND HELPER -->
/* Find helper purpose is to search through an array and look 
for a particular element in the array */

// find the name Alex
var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'}
];

var user;

//for loop

for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break; // is used to stop looking for the other array
    }
}

user;


//Find helper

 users.find(function(user) {
     return user.name === 'alex';
 });

 
 
 //collection of car objects. and find a car with particular criteria

// find focus car in particular
 function Car(model) {
     this.model = model;
 }

 var cars = [
     new Car ('Buick'),
     new Car ('Camaro'),
     new Car ('Focus')
 ];

cars.find(function(car){
    return car.model === 'Focus';
});

//another difficult example 
var posts = [
    {id:1, title:'New Post'},
    {id: 2, title: 'Old Post'}
];

var comment = {postId: 1, content: 'Great Post'};

/*the purpose of this function is take the big list of posts,
a single comment, and given the comment postId, it should
find the post with a particular ID */

function postForComment(posts,comment) {
    return post.find(function(post){
        return post.id === comment.postId;
    });
}

postForComment(post, comment);



//EXERCISES

//find the user who has admin access
var users =[
    {id:1, admin: false},
    {id:2, admin:false},
    {id:3, admin: true}
];

//using for loop
for ( var i = 0; i < users.length; i++){
    if(user[i].admin === true) {
        user = users[i];
    }
}

//using find helper
var admin = users.find(function(user){
    return user.admin === true;
});


//Find the account with balance of 12

var accounts = [
    {balance: -10},
    {balance: 12},
    {balance: 0 }
];

//using for loop

for (var i = 0; < accounts.length; i++){
    if(accounts[i].balance === 12){
        accounts = accounts[i];
    }
}

var account = accounts.find(function(account){
    return accounts.balance === 12;
});


//find a ladder with 20 feet

findwhere(ladders, { height: '20 feet'});

function findWhere(array, criteria) {
    return array.find(funtion(arr){
        return arr.height === criteria.height;
    });
}

//for loop

for ( var i = 0; i < ladders.length; i++) {
    if (ladders[i].height === criteria.height) {
        ladder = ladders[i];
    }
}




    












