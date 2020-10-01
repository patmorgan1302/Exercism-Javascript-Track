const list = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX: 9,
    V : 5,
    IV : 4,
    I : 1
  };
  
export const toRoman = num => {
    // set accumulator to empty string to begin collecting value of key
    let accumulator = '';
    // using a for loop, set every variable in list to unique key
    for (const key in list){
      const numValue = list[key];
    // while the value of numvalue is list the num, use a subraction operator to 
    // loop through list of values and subract as long as value is less than num
      while (numValue <= num){
        num -= numValue;
        accumulator += key;
      }
    }
    // return accumulator variable with new string of roman numerals attached 
   return accumulator;
  }
  
  