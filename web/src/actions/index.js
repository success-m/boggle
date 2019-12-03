//Action
export const increment = (num) => {
  return {
    type : 'INCREMENT',
    payload: num
  }
}

export const descrement = () => {
  return {
    type : 'DECREMENT'
  }
}