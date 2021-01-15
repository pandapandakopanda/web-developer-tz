  
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

const getDate = (date) => {
  const day = date.getDate()
  let month = date.getMonth()+1
  if(month.toString().length ===1) month = '0' + month
  const year = date.getYear()+1900
  const currentDate = `${day}.${month}.${year}`
  return currentDate
}

const getId = () =>  '_' + Math.random().toString(36).substr(2, 9)


export {
  calcClass, castArray, getDate, getId
}