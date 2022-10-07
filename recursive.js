const multiply=(arr,n)=>
{
   if(n<=0)
   {
    return 0;
   }
   else{
    return multiply(arr , n-1)+arr[n-1];
   }

}
let arr = [2,3,4];
let n = arr.length;
console.log(multiply(arr ,n));

//Create a function called randomRange that takes a range myMin and myMax and returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

