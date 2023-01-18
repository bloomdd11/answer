const letterChange = (text) => {
  const textArray = text.split("");
  let i = textArray.length;
  let result = [];
  textArray.forEach(() => {
    result.push(textArray[i - 1]);
    i = i - 1;
  });
  return result.join("");
};

console.log(letterChange("iamsuperstar"));
