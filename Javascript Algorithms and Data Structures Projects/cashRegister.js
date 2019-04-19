function checkCashRegister(price, cash, cid) {
  var change = cash - price;
  // Here is your change, ma'am.
  let changeReturned = 0
  let acumValueEachIndex = 0 //acumulador para ir agregado las unidades correspondientes de cada producto en el array retornado
  let arrReturned = []
  let startIndex = 0
  let unitSubstract = 0 //sera la unidad actual que va a restar al array
  let amountLoopUnit = 0

 let unitsArr = [ 0.01, 
								0.05,
                0.1,
                0.25,
                1,
                5,
                10,
                20,
                100
                ]

  if(change > totalValuesCid(cid))
  {
    return {
      "status":"INSUFFICIENT_FUNDS", 
      "change":[]
    }
  }
  else if(change === totalValuesCid(cid)){
    return {
            "status":"CLOSED", 
            "change":cid
          }
  }
  else{
    //Guardar el indice desde donde empezaremos a 
    //recorrer las unidades
    for(let i = unitsArr.length - 1;i >= 0; i--){
      if(change > unitsArr[i]){
        startIndex = i
        break;
      }
    }       
    
    //tendremos dos ciclos: uno para recorrer el array de productos 
    //y colocarnos en cada producto
    //el otro para operar deacuerdo a su cantidad un numero de veces
    //con ese mismo producto o indice

    for(let i = startIndex; i >= 0; i--){ 
      unitSubstract = unitsArr[i]
      amountLoopUnit = cid[i][1]/unitSubstract //con esto obtenemos el numero de veces que se ejecuta el segundo bucle for

      acumValueEachIndex = 0            

      for(let j = 0; j < amountLoopUnit; j++){              
        changeReturned += unitSubstract
        acumValueEachIndex += unitSubstract
        changeReturned = redondeo2decimales(changeReturned)      
        //si el el valor retornado es mayor que el cambio
        // se sale del ciclo y se pasa a otra unidad
        if(changeReturned > change){
          changeReturned -= unitSubstract
          acumValueEachIndex -= unitSubstract
          changeReturned = redondeo2decimales(changeReturned)  
          break;
        }
      
        if(changeReturned === change){
          //ingresar array de unidad a nuestro array
          // que sera devuelto con el cambio en unidades
          arrReturned.push(cid.slice(i,i+1)[0])
          arrReturned[arrReturned.length-1][1] = redondeo2decimales(acumValueEachIndex) 
          return {
             "status":"OPEN", 
            "change":arrReturned
          }
        }
      }
      //eliminar ultimo elemento del array si este no sumo 
      //ninguna unidad al cambio retornado
      if(acumValueEachIndex !== 0){
        arrReturned.push(cid.slice(i,i+1)[0])
        arrReturned[arrReturned.length-1][1] = redondeo2decimales(acumValueEachIndex) 
      }
      
    }
    return {
      "status":"INSUFFICIENT_FUNDS", 
      "change":[]
    }
  }
}

//Para redondear decimales                                             
function redondeo2decimales(numero)
{
	var flotante = parseFloat(numero);
	var resultado = Math.round(flotante*100)/100;
	return resultado;
}

//funcion para saber si la caja esta vacia o aun hay dinero 
let isCidEmpty = (cid) => {
    let state = cid.filter((x) =>{ 
    return x[1] > 0
    })
    if(state.length === 0){
        return true
    }
    return false
}

//funcion para saber el total en el cid
let totalValuesCid = (cid)=> {
    let total =cid.map((x) => {
    return x[1]
}).reduce((prev,curr)=>{
    return prev + curr
    })
return total
}
                                                 

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
