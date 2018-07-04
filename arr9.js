var str="The Quick Brown Fox";
var str1=[];
for (i=0;i<str.length;i++)
{
if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90)
{
str1[i]=(str[i].toLowerCase())
}
else
{
str1[i]=(str[i].toUpperCase());
}
}
console.log(str1.join(""));