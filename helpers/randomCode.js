const numbers = '1234567890'

const getRandomCode = () => {
  let code = ''
  for (let i = 0; i < 4; i++) {
    code += numbers[Math.floor(Math.random() * 9)]
  }
  return code
}

export const randomCode = getRandomCode()