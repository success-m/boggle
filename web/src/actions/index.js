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

export const updateAlert = (data) => {
  return {
    type : 'UPDATEALERT',
    payload: data
  }
}

export const resetAlert = (data) => {
  return {
    type : 'RESETALERT',
    payload: data
  }
}

export const addWord = (data) => {
  return {
    type : 'ADDWORD',
    payload: data
  }
}

export const resetwords = (data) => {
  return {
    type : 'RESETWORDS'
  }
}

export const addTime = () => {
  return {
    type : 'ADDTIME'
  }
}

export const resetTime = () => {
  return {
    type : 'RESETTIME'
  }
}

export const showModal = (data) => {
  return {
    type : 'SHOWMODAL',
    payload: data
  }
}

export const resetModal = () => {
  return {
    type : 'RESETMODAL'
  }
}