export const parse = sentence => {
  // Split the inputted sentence into words using Regex A-Z One or More Letters;
  return sentence.split(/[^a-zA-Z']/)
  // Map the words out and determine indexof(0) for each
      .map((word) => word[0])
  // Join the first index of every word together and change them to uppercase()
      .join("").toUpperCase();
};