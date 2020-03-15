var accounts = [
    {balance: -10},
    {balance: 12},
    {balance: 0 },
    {balance: 12, accountName: 'mary' },
];

console.log('accounts = ', accounts)

//using for loop

let result = {}
// for (var i = 0; < accounts.length; i++){  WRONG
for (var i = 0; i < accounts.length; i++){
    console.log('i = ', i)
    if(accounts[i].balance === 12){
        // accounts = accounts[i];
        result = accounts[i];
        break
    }
}

// console.log('accounts = ', accounts)
console.log('result = ', result);

// find return the FIRST element match the condition
var account = accounts.find(function(account){
    // return accounts.balance === 12; WRONG
    return account.balance === 12;
});

console.log('account = ', account);
