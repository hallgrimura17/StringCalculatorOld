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
    for(var i = 0; i < numbers.length; i++)
    {
        sum += parseInt(numbers[i]);
    }
    return sum;
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