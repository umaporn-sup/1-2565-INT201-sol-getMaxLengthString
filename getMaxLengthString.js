const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
  if (arrayOfString === null || arrayOfString === undefined) return undefined

  //Sol.1
  // let maxLength = arrayOfString[0].length
  // const maxString = []
  // arrayOfString.forEach((eachString) => {
  //   if (eachString.length > maxLength) maxLength = eachString.length
  // })
  // arrayOfString.forEach((eachString) => {
  //   if (eachString.length === maxLength) maxString.push(eachString)
  // })

  // return maxString

  //Sol.2
  arrayOfString.sort((a, b) => a.length - b.length)
  const maxLength = arrayOfString[arrayOfString.length - 1].length
  return arrayOfString.filter((str) => str.length === maxLength)
}

module.exports = getMaxLengthString
