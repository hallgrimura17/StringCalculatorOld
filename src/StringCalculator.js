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
            sum += parseInt(numberArray[0]) + parseInt(numberArray[1]);
        }
        else
        {
            sum += parseInt(arguments[i]);
        }
    }
    return sum;
    
}

module.exports = add;