const letterCount = (text) => {
  const textArray = text.split("");
  let result = {};

  textArray.forEach((i) => {
    i in result ? (result[i] = result[i] + 1) : (result[i] = 0);
  });
  return result;
};

console.log(letterCount("this is text."));
