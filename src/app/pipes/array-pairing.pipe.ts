import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayPairing',
  pure: false
})
export class ArrayPairingPipe implements PipeTransform {

  transform(arr: any): [] {

const paires = arr.reduce( (result, value, index, array) => {

      if ( index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);


    return paires;
  }

  //Mi solución sin reduce()

//    createPairedArray(arr){
//     let controlArray = [];
//     let newArray = [];
//     for(let i = 0; i<=arr.length; i++){
//       if(controlArray.length === 2){
//         newArray = [...newArray, controlArray]
//         console.log(newArray)
//         controlArray = [];
//       }
      
//       if(i === arr.length - 1 && arr.length%2 != 0){
//         newArray = [...newArray, [arr[i]]]
//       }
//       controlArray.push(array[i])
//     }
    
//     return newArray
//   }

}
