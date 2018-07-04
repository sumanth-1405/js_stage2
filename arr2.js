function array_Clone(input){
    return input.slice(0);

}
console.log(array_Clone([1, 2, 4, 0])); 
console.log(array_Clone([1, 2, [4, 0]]));
