function MaxNumbers(array, k) {
    let result = 0;
    let left = 0;
    let right = array.length - 1;
    
    while (left < right) 
    {
        let sum = array[left] + array[right];
        if(sum === k)
        {
            left++;
            right--;
            result++;
        }
        else if(sum <= k)
        {
            left++;
        }
        else
        {
            right--;
        }
    }
    return result;
}

console.log(MaxNumbers([1, 2, 3, 4, 5], 5));