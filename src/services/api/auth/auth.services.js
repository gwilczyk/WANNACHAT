import axios from '@services/utils/axios'

class AuthServices {
  async forgotPassword(email) {
    const response = await axios.post('/forgot-password', { email })
    return response
  }

  async resetPassword(token, body) {
    const response = await axios.post(`/reset-password/${token}`, body)
    return response
  }

  async signin(body) {
    const response = await axios.post('/signin', body)
    return response
  }

  async signup(body) {
    const response = await axios.post('/signup', body)
    return response
  }
}

export const authServices = new AuthServices()
