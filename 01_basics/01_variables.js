const accountId = 14453
let accountEmail = "ankita@google.com"
var accountPassword = "12345"
/* 
Prefer not to use var due to the issue of
 block scope and functional scope
 */
accountCity = "Jaipur"

//accountId = 2 //Not allowed to change in const variable

accountEmail = "as@google.com"
accountPassword = "234653"
accountCity = "Delhi"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity]);

