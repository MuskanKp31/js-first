/* 

const can't be changed
let  used to declare variables which can be changed
var work similar like let but var does't work with scope create issues scope:- (if else/ for)
***** now a days let is used.*****
when there is no value assigned to variable it print undefine value

*/
const accountId = 144553
let accountEmail = "test@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail = "test1@gmail.com"
accountPassword = "12345"
accountCity = "Delhi"


/* 
prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])