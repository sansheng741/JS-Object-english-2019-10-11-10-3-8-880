/**
 * 1. Program and observe the following requirements:  
  - Create a null object and set its variable name as user; 
  - Add a name attribute and set its value as John; 
  - Add a surname attribute and set its value as Mike; 
  - Modify the value of name attribute as Peter; 
  - Delete name attribute of user. 
 */

var user = {
	name: 'John',
	surname: 'Mike'
}

user.name = 'Peter';

delete user.name;

/**
 * 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
 */
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};

var count = 0 ;
for(var key in fruit){
	count += fruit[key];
}
