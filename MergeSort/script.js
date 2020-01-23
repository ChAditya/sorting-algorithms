var startingtime = performance.now();
//this function takes array as input and divides it into sub arrays of size 1 recursively
function mergeSort(arr){
    var len = arr.length;
    //if condition to prevent the infinite loop that might occur while dividing the array.
    if(len < 2){
        return arr;
    }
    var middle = Math.floor(len/2);
    //slice() method divides the array using the upper and lower limits.
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);
    //returns the given array as individual sub arrays untill the size of each sub array is 1
    return merge(mergeSort(left),mergeSort(right));
}
//this function takes sub arrays as input and sort them in ascending order.
function merge(left,right){
    var newArray = [];
    var leftArray_length = left.length;
    var rightArray_length = right.length;
    var i = 0;
    var j = 0;
    while(i<leftArray_length && j<rightArray_length){
        if(left[i]<right[j]){
            newArray.push(left[i]);//pushes the element into new array or appends at the ending of new array
            i++;
        }
        else{
            newArray.push(right[j]);
            j++;
        }   
    }
    //if the given array contains odd number of values, 
    //the last value(i.e, the biggest of all) is simply added at the end of new array
    return newArray.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([123,321,-134,0,12,34,45,45,-134,0,9,8,7,6,5,4,3,2,1,-1,-2,-3,34567,12345,678901,34512098,-67373,-137,432,10000,1000,100,10,1.432,1.732,0.345,100.45,-123.45,76,32,765,543,321,-0.456,-23.78,712,912,512,39,1,911,811,712,619,510,411,3134,2121,11567,92876543,8200000,72123,72345,621,521,422,325,-43,-53,-63,-3456.902345,-54,-45,76,-75,-65,-55,-45,-35,-25,-15,-5,731,759,312345,900000000,5932,6932,7932,1643,143.143,8374,3476,64537,2346,143143,73012,-2351,-7,1]));
var endingtime = performance.now();
console.log("total time= " + (endingtime-startingtime) + " milliseconds");