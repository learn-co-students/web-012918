```js

add3 = (a) => {
  return a + 3
}

add4 = (a) => {
  return a + 4
}

logAdd3 = (a) => {
  console.log(`add 3 to ${a}`)
  return add3(a)
}

logAdd4 = (a) => {
  console.log(`add 4 to ${a}`)
  return add4(a)
}

logFn = (wrappedFn) => {
  return a => {
    console.log(`Calling a fn on ${a}`)
    return wrappedFn(a)
  }
}

// factorial 4 = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1
factorial = (a) => {
  i = a
  result = 1
  while (i > 0) {
    result *= i
    i--
  }

  return result
}

logAdd3Hof = logFn(add3)
logAdd4Hof = logFn(add4)


logFactorial = logFn(factorial)


myMap = (arr, fn) => {
  var ret = []

  for(let i = 0; i < arr.length; i++) {
    ret.push(fn(arr[i]))
  }


  return ret
}

myFilter = (arr, fn) => {
  var ret = []

  for(let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      ret.push(arr[i])
    }
  }

  return ret
}

arr = [1,2,3,4,5]


```
