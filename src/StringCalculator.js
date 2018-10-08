function add()
{
    var sum = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] == "")
        {
            continue;
        }
        else if(arguments[i].includes(","))
        {
            var numberArray = arguments[i].split(",");
            sum += sumOfArray(numberArray);
        }
        else
        {
            sum += parseInt(arguments[i]);
        }
    }
    return sum;
    
}

function sumOfArray(numberArray)
{
    var total = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
        total += parseInt(numberArray[i]);
    }
    return total;
}


module.exports = add;