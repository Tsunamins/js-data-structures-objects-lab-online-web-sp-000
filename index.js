// Write your solution in this file!
let driver = {};


function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, {[key]: value });

}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromDriverByKey(obj, key, value) {
    const newObj = Object.assign({}, obj);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key, value) {
    delete obj[key];
    return obj;
}