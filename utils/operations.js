export function add(numbers) {
  let result = 0;
  for (const num of numbers) {
    result += num;
  }
  return result;
}

export function subtract(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
}

export function multiply(numbers) {
  let result = 1;
  for (const num of numbers) {
    result *= num;
  }
  return result;
}

export function divide(numbers) {
  let result = numbers[0];
  if (numbers.length === 0) return NaN;
  else 
    for (let i = 1; i < numbers.length; i++) {
      result /= numbers[i];
    }
    return result;
}

