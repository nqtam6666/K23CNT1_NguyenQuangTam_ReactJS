function Print(num1, num2, ...numorthers){
  console.log('Số 1', num1)
  console.log('Số 2', num2)
  // x = 0
  for (let x of numorthers){
    console.log(x)
  }
  console.log('Số còn lại', numorthers)
}
Print('1', '2', '3', '4','5')