function convertToRoman(num) {
	//Arrays
	const unitsRomans = 
    ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
	const unitsDecimal = 
    [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];

    // Array para guardar los numeros romanos que
    // formaran el numero decimal
    let arrFinal = [];

    //variable for know the number of digits
    let numberGreater = 0

    if(unitsDecimal.indexOf(num) !== -1)
    {
        return unitsRomans[unitsDecimal.indexOf(num)];
    }

    if(num < 10)
    {
        numberGreater = findGreater(unitsDecimal, num, 3)
        //Agregamos ese primer elemento al array final de romanos
        arrFinal.push(unitsRomans[unitsDecimal.indexOf(numberGreater)])

        computeNumber(unitsDecimal, unitsRomans, arrFinal, num, numberGreater);
       
    }
    else if(num >= 10 && num < 100)
    {
        numberGreater = findGreater(unitsDecimal, num, 8)
        
        //Agregamos ese primer elemento al array final de romanos
        arrFinal.push(unitsRomans[unitsDecimal.indexOf(numberGreater)])

        computeNumber(unitsDecimal, unitsRomans, arrFinal, num, numberGreater);
    }
    else if(num>= 100 && num < 1000)
    {
        numberGreater = findGreater(unitsDecimal, num, 11)
        
        //Agregamos ese primer elemento al array final de romanos
        arrFinal.push(unitsRomans[unitsDecimal.indexOf(numberGreater)])

        computeNumber(unitsDecimal, unitsRomans, arrFinal, num, numberGreater);
    }
    else{
        numberGreater = findGreater(unitsDecimal, num, unitsDecimal.length )
        
        //Agregamos ese primer elemento al array final de romanos
        arrFinal.push(unitsRomans[unitsDecimal.indexOf(numberGreater)])

        computeNumber(unitsDecimal, unitsRomans, arrFinal, num, numberGreater);
    }


    return arrFinal.join('');
}


// entontrar el numero menor al numero objetivo 
// y que sea mayor al resto de numeros en el array
let findGreater= (array, num, limit)=>{
    let greater = 0
    
    for(let i = 0; i < limit; i++)
    {
        if(array[i] > greater && array[i] < num)
        {
            greater = array[i];
        }
    }
    return greater
}


//con este metodo hacemos los calculos para obtener
//el resto de numero romanos

let computeNumber = (unitsDecimal, unitsRomans, arrFinal, num, numberGreater)=>
{ 
    let state;  //para controlar el segundo loop dentro del for
                    // esto permitira seguir sumando el mismo numero si siguie
                    //siendo menor que el numero objetivo
      for(let i = unitsDecimal.indexOf(numberGreater); i >= 0; i--)
        {
            state = true
            while(state)
            {
                if((numberGreater + unitsDecimal[i]) <= num)
                {
                    numberGreater += unitsDecimal[i]
                    arrFinal.push(unitsRomans[i])
                }else{
                    state = false
                }
            }
        }
}

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(1000) should return "M"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
