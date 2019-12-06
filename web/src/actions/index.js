//Action
export const increment = (num) => {
  return {
    type : 'INCREMENT',
    payload: num
  }
}

export const resetScore = () => {
  return {
    type : 'RESETSCORE'
  }
}

export const letters = (data) => {
  return {
    type : 'LETTERS',
    payload: data
  }
}

export const addletter = (data) => {
  return {
    type : 'ADDLETTER',
    payload: data
  }
}

export const addKey = (data) => {
  return {
    type : 'ADDKEY',
    payload: data
  }
}

export const resetLetter = () => {
  return {
    type : 'RESETLETTER'
  }
}

export const resetKey = () => {
  return {
    type : 'RESETKEY'
  }
}