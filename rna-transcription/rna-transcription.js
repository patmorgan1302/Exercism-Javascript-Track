const letters = { G : 'C', C : 'G', T : 'A', A : 'U'};
const replaceLetters = /[GCTA]/g;

export const toRna = (rna) => {
  return rna.replace(replaceLetters, dna => letters[dna])
}