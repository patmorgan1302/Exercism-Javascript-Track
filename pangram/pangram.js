export const isPangram = sentence => {
  // Reg Expression used to find all numbers in alphabet
  const regex = /[a-z]/
  // filtering through array to determine all elements are there
  const testSentence = Array.from(sentence.toLowerCase()).filter(n => regex.test(n));
  const res = new Set(testSentence)

  return res.size == 26
};