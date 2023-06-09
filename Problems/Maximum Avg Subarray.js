const solution = (array, k) => {
    
    let first = array[0];
    let second = array[1];
    
    if(array.length == 1)
    {
        const result = parseFloat(first).toFixed(5); // convert to float
        return result;
    }
    else if(k == 1)
    {
        for(let i = 1; i<array.length; i++)
        {
            first += array[i]
        }
        const result = parseFloat(first).toFixed(5);
        return result;       
    }
    else
    {
        for(let i = 1; i<array.length-2; i++)
        { 
            second += array[i+1];
        }

        let calc = second / k;
        let result = parseFloat(calc).toFixed(5);
        return result;       
    }
}

console.log(solution([1,2,3,4,5,6,7], 4));