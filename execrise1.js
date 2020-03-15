var users =[
    {id:1, admin: false},
    {id:2, admin:false},
    {id:3, admin: true}
];

let userAdmin = {};
//using for loop
for ( var i = 0; i < users.length; i++){
    // if(user[i].admin === true) {  WRONG
    if(users[i].admin === true) {
        // user = users[i];  WRONG
        userAdmin = users[i]
        break;
    }
}

console.log('userAdmin = ', userAdmin);


//using find helper
var admin = users.find(function(user){
    return user.admin === true;
});

console.log('admin = ', admin);
