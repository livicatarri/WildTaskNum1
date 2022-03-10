let arr= [
  {
    "dt": "01-01-2021",
    "quantity": 100,
    "age": null,
    "temp": {
      "temperature": "100 degrees",
      "city": "Norway"
    }
  },
  {"dt": "02-01-2021",
    "quantity": 150,
    "age": 23,
    "temp": {
      "temperature": "103 degrees",
      "city": "Egypt"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
      "temperature": "98 degrees",
      "city": "Kypris"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
      "temperature": "98 degrees",
      "city": "Holland"
    }
  },
  {"dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
      "temperature": "50 degrees",
      "city": "Kursk",
      "optional": true
    }
  },
  {"dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
      "temperature": "50 degrees",
      "city": "Kursk",
      "optional": true
    }
  }
  ]

let FoundData=[];/*получить Сет уникальных дат на выходе*/
for (let i=0; i<arr.length; i++){
FoundData.push(arr[i]["dt"])
}
let uniqData = new Set(FoundData)
console.log(FoundData);
console.log(uniqData)

let dataMap = new Map();/*тут мне помогли(второй пункт), но я  вроде разобралась(мапа значений для даты, где ключ это дата, а значение это массив данных за это число)*/
for (item of arr) {
    const temp = Object.assign({}, item);
    delete temp.dt; 
    dataMap.get(item.dt)? dataMap.get(item.dt).push(temp) : dataMap.set(item.dt, [temp]);
}

console.log(dataMap);

interface DescrData {/*попытки придумать что-то нормальное(Написать интерфейс данного запроса, используя обязательные и не обязательные поля, могут быть вложенные в интерфейсы  - интерфейсы)*/
  dt: string;
  quantity: number;
  age: number;
  field: tempMap

}
 interface tempMap{
    temperature: string;
    city: string;
    optional?: boolean | null;
  }
//const str: string = ""
 const arrDescrDataFirst : tempMap [] = [
      {
    temperature: "50 degrees",
      city: "Kursk",
      optional: true
      }
    ]  
const arrDescrData : DescrData [] = [
      {
          dt: "03-01-2021",
    quantity: 700,
    age: 27,
    field: arrDescrDataFirst}]
    
    console.log(arrDescrData)
    console.log(arrDescrDataFirst)
 
/*interface DescrDataMap {/*интерфейс выходного map? какой был бы удобный*/
  /*dt: string;
  field:DescrDataMapItem;
}*/

/*interface DescrDataMapItem{
    quantity: number;
    age: number;
    temp:{
    temperature: string;
    city: string;
    optional?: boolean | null;
  }
  
}*/

