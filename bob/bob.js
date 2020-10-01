export const hey = input => {
  // set expression equal to the regex of the alphabet upper and lowercase
  let regex = /[a-zA-Z]/g;
  // if last index of input equals '?' and our regex expression tests a positive match on our string, return Calm Down
  if (input.slice(-1) == "?" && (input === input.toUpperCase()) && (regex.test(input))) 
    return 'Calm down, I know what I\'m doing!';
  // if the input equals all caps and our regex expression matches our input
  if (input === input.toUpperCase() && (regex.test(input))) 
    return 'Whoa, chill out!';
  // if input ends with a question mark, return Sur
  if (input.trim().slice(-1) == "?") 
    return 'Sure.';
  // if there is no input string will return Whatever
  if(input.trim().length === 0) 
    return "Fine. Be that way!";

  return 'Whatever.';
};

