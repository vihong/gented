import client from './client'

const endpoint = '/auth'
const endpoint2 = '/users'

const loginRequest = (email: string, password: string) => client.post(endpoint, { email, password })

type RegisterInfo = {
	email: string
	name: string
	password: string
}

const registerRequest = (registerInfo: RegisterInfo) => client.post(endpoint2, registerInfo)

export default {
	loginRequest,
	registerRequest
}
