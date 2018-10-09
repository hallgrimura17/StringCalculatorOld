function add()
{
    var numbers = [];
    var negativeNumbers = [];
    var reg = new RegExp(',|\n');
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] == "")
        {
            continue;
        }
        else if(arguments[i].includes(",\n") || arguments[i].includes("\n,"))
        {
            return undefined;
        }
        else
        {
            numbers = addArrayToArray(numbers, arguments[i].split(reg));
        }
    }
    var sum = 0;
    var number;
    for(var i = 0; i < numbers.length; i++)
    {
        number = parseInt(numbers[i]);
        if(number < 0)
        {
            negativeNumbers.push(number);
        }
        else if(number > 1000)
        {
            continue;
        }
        else
        {
            sum += number;
        }
    }
    if(negativeNumbers.length == 0)
    {
        return sum;
    }
    else
    {
        var negativeString = "Negatives not allowed: " + negativeNumbers[0];
        for(var i = 1; i < negativeNumbers.length; i++)
        {
            negativeString += "," + negativeNumbers[i];
        }
        return negativeString;
    }
}
function addArrayToArray(array1, array2)
{
    for(var i = 0; i < array2.length; i++)
    {
        array1.push(array2[i]);
    }
    return array1;
}

module.exports = add;