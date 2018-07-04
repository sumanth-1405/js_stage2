function sum(array1, array2) 
{
  var result = [];
  var i = 0;
  var x=0;

  if (array1.length === 0||array2.length === 0) 
   return "sum is not possible";   

 while (i < array1.length && i < array2.length) 
  {
    result.push(array1[i] + array2[i]);
    i++;
  }

 if (i === array1.length) 
 {
    for (x = i; x < array2.length; x++)   {
      result.push(array2[x]);
    }
  } 
  else
  {
  for (x = i; x < array1.length; x++) 
    {
      result.push(array1[x]);
    }
  }
  return result;
}

console.log(sum([1,0,2,3,4], [3,5,6,7,8,13]));