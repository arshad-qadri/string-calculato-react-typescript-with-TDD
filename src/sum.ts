const sum = (text: string): number => {
  if (text === "") {
    return 0;
  }
  let delimiter = ",";
  let numbersString = text;
  const numbersArray = numbersString.split(delimiter);
  const result: number = numbersArray.reduce(
    (accumulator: number, currentValue: string) => {
      const num = parseInt(currentValue.trim(), 10);
      if (isNaN(num)) {
        return accumulator;
      } else {
        return accumulator + num;
      }
    },
    0
  );
  return result;
};

export default sum;
