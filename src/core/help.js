  
const calcClass = (obj, styleObj, extObj) => {
  const localClasses = Object.keys(obj)
    .filter((key) => !!obj[key])
    .map((name) => styleObj[name]).join(' ')

  const extClasses = extObj
    ? Object.keys(extObj).filter((key) => !!extObj[key]).join(' ')
    : ''

  return `${localClasses} ${extClasses}`
}

const castArray = (mbArray) => ((Array.isArray(mbArray)) ? mbArray : [])

export {
  calcClass, castArray,
}