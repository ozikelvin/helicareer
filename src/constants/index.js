/* eslint-disable prettier/prettier */
import { Dimensions } from 'react-native';

const getDimension = () => {
  return Dimensions.get('window');
};
export const DEVICE_HEIGHT = getDimension().height;
export const DEVICE_WIDTH = getDimension().width;
export const HEADER_HEIGHT = DEVICE_HEIGHT * 0.1;
export const HEADER_TITLE_SIZE = 20;

 const  makeId = (length) => {
    var result  = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
       charactersLength));
   }
   return result;
};

export const TRANSACTION_HISTORY = [
    {
        id: makeId(7),
        type:'withdrawal',
        status:'approved',
        date:new Date(2020 , 5 , 10),
        name:'david',
    },
    {
        id: makeId(7),
        type:'deposit',
        status:'declined',
        date:new Date(2018 , 2 , 7),
        name:'chim',
    },
    {
        id: makeId(7),
        type:'withdrawal',
        status:'declined',
        date:new Date(2020 , 5 , 10),
        name:'matt',
    },
    {
        id: makeId(7),
        type:'withdrawal',
        status:'approved',
        date:new Date(2020 , 5 , 10),
        name:'sam',
    },
    {
        id: makeId(7),
        type:'deposit',
        status:'approved',
        date:new Date(2018 , 2 , 7),
        name:'james',
    },
    {
        id: makeId(7),
        type:'deposit',
        status:'declined',
        date:new Date(2017 , 3 , 8),
        name:'james',
    },
    {
        id: makeId(7),
        type:'deposit',
        status:'declined',
        date:new Date(2018 , 2 , 7),
        name:'matina',
    },
    {
        id: makeId(7),
        type:'withdrawal',
        status:'approved',
        date:new Date(2017 , 3 , 8),
        name:'matina',
    },
];



// export const filterData = ( state = {} , propertyTofilter , value ) =>{
//    let result  ;
//     for (let i in state){
//        result += state[i].filter(item => item[propertyTofilter] === value)
//     }
//     return result ;
// }

export  const groupBy = (array, key) => {
    // Return the end result
    return array.reduce((result, currentValue) => {
      // If an array already present for key, push it to the array. Else create an array and push the object
      let data = (result[currentValue[key]] = result[currentValue[key]] || []);
      data.push(
        currentValue
      );
      //console.log(result)
      // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
      return result;
    }, {}); // empty object is the initial value for result object
  };

  export const getUniqueData = (arr) =>{
    let unique = [];
    let distinct = [];
    for ( let i = 0; i < arr.length; i++ ){
      if (!unique[arr[i].date.toISOString().slice(0,10)]){
        distinct.push(arr[i]);
        unique[arr[i].date.toISOString().slice(0,10)] = 1;
      }
    }
    return distinct;
  };

  export const filterData = (arr = [] , date) =>{

    let dataFiltered = arr.filter((item) => item.date.toISOString().slice(0,10) === date.toISOString().slice(0,10));
//  console.log(arr)
  return  dataFiltered;
  };
