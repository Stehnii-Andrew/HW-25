const test = () => {
    const ingridients = [
      { id: 'e88', name: 'картошка', alergen: false, kkal: 100 },
      { id: '08a', name: 'лук', alergen: true, kkal: 200 },
      { id: 'a0b', name: 'шкварки', alergen: false, kkal: 300 },
      { id: '0dd', name: 'бульйон', alergen: true, kkal: 400 },
      { id: 'd12', name: 'морковка', alergen: false, kkal: 500 },
      { id: '8a1', name: 'оливковая олия', alergen: false, kkal: 600 }
    ];
  
    const result = {
      status: 'ok',
      ingridients, // ingridients: ingridients,
      payload: {
        error: 'test_fail',
        message: 'тест не пройден'
      }
    }
  
    return result;
}

const test3 = test();

let value = 0;

const test2 = test3.ingridients.filter((val) => {
    if (val.alergen === true) {
        value = value + val.kkal;
    }
});

// console.log(test().ingridients);
// console.log(test);
console.log(value);