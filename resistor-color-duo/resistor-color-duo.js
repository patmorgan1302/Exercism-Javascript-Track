//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white']

export const decodedValue = ([val1, val2]) => {
    const val1Index = COLORS.indexOf(val1) * 10;
    const val2Index = COLORS.indexOf(val2);
    console.log(val1Index + val2Index)
        return val1Index + val2Index 
};