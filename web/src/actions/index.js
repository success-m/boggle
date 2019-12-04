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

export const letters = (data) => {
  return {
    type : 'Letters',
    payload: data
  }
}