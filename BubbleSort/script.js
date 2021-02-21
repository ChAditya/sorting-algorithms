//var startingtime = performance.now();
function bubbleSort(arr)
{
len = arr.length;
for(var i=0;i<len;i++){
  for(var j=0;j<len-i-1;j++){ //len-i-1 because the last is sorted after the 1st iteration,and last but one after second and so on...
    if(arr[j] > arr[j+1]) {
      	[arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
  }
}
return arr;
}
console.log("Sorted array: " + bubbleSort([123,321,-134,0,12,34,45,45,-134,0,9,8,7,6,5,4,3,2,1,-1,-2,-3,34567,12345,678901,34512098,-67373,-137,432,10000,1000,100,10,1.432,1.732,0.345,100.45,-123.45,76,32,765,543,321,-0.456,-23.78,712,912,512,39,1,911,811,712,619,510,411,3134,2121,11567,92876543,8200000,72123,72345,621,521,422,325,-43,-53,-63,-3456.902345,-54,-45,76,-75,-65,-55,-45,-35,-25,-15,-5,731,759,312345,900000000,5932,6932,7932,1643,143.143,8374,3476,64537,2346,143143,73012,-2351,-7,1]));
//var endingtime = performance.now();
//console.log("total time= " + (endingtime-startingtime) + " milliseconds");
