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
let FoundData=[];
for (let i=0; i<arr.length; i++){
FoundData.push(arr[i]["dt"])
}
let uniqData = new Set(FoundData)
console.log(FoundData);
console.log(uniqData)

let dataMap = new Map();/*тут мне помогли(второй пункт), но я  вроде разобралась*/
for (item of arr) {
    const temp = Object.assign({}, item);
    delete temp.dt; 
    dataMap.get(item.dt)? dataMap.get(item.dt).push(temp) : dataMap.set(item.dt, [temp]);
}

console.log(dataMap);

interface DescrData {
  dt: string;
  quantity: number;
  age: number;
  temp:{
    temperature: string;
    city: string;
    optional?: boolean | null;
  }

}
