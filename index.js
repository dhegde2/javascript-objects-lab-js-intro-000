let recipes = {}; 
function updateObjectWithKeyAndValue(object, key, value){ 
let object1 = {}; 
for(let key in object){ 
object1[key] = object[key]; 
object1.key = value; 
return object1; 
}
}
function 