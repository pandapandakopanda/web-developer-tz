const date = (date) => {
  const day = date.getDate()
  let month = date.getMonth()+1
  if(month.toString().length ===1) month = '0' + month
  const year = date.getYear()+1900
  const currentDate = `${day}.${month}.${year}`
  return currentDate
}
export default date
