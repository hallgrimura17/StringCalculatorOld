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
            for(var j = 0; j < numberArray.length; j++)
            {
                sum += parseInt(numberArray[j]);
            }
        }
        else
        {
            sum += parseInt(arguments[i]);
        }
    }
    return sum;
    
}

module.exports = add;