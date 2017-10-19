let recipes = {};
function updateObjectWithKeyAndValue(object, key, value){
let copy = Object.assign({}, object);
copy.key = value;
return obj;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
object.key = 'value';
return object;
}
function deleteFromObjectbyKey(object, key){
let obj = Object.assign({}, object);
delete obj[key];
return obj;
}
function destructivelyDeleteFromObjectByKey(object, key){
delete object[key];
return object;
}
