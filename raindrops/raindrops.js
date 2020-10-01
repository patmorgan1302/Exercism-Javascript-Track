//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = rain  => {
  if(rain < 3) return rain.toString();
  let noise = "";
    if(rain % 3 == 0 ) noise += 'Pling'
    if(rain % 5 == 0 ) noise += "Plang"
    if(rain % 7 == 0 ) noise += "Plong"
    if(rain % 3 !== 0 && rain % 5 !== 0 & rain % 7 !== 0) return rain.toString();
  return noise.toString();
    
};

// console.log(convert(23))