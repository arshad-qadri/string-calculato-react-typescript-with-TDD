const sum = (text: string): number => {
  if (text === "") {
    return 0;
  }
  let delimiter = ",";
  let numbersString = text;

  if (numbersString.includes("\n")) {
    numbersString = numbersString.replace(/\n/g, delimiter);
  }

  if (text.startsWith("//")) {
    const delimiterEnd = text.indexOf("\n");
    delimiter = text.substring(2, delimiterEnd);
    numbersString = text.substring(delimiterEnd + 1);
  }

  const numbersArray = numbersString.split(delimiter);
  const negativeNumbers: number[] = [];
  const result: number = numbersArray.reduce(
    (accumulator: number, currentValue: string) => {
      const num = parseInt(currentValue.trim(), 10);
      if (isNaN(num)) {
        return accumulator;
      } else if (num < 0) {
        negativeNumbers.push(num);
        return accumulator;
      } else {
        return accumulator + num;
      }
    },
    0
  );
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed ${negativeNumbers.join(",")}`
    );
  }
  return result;
};

export default sum;
