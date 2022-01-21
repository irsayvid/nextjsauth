import { Sawo } from 'sawo'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function login() {
  const router = useRouter()
  useEffect(() => {
    var config = {
      // should be same as the id of the container created
      containerID: 'sawo-container',
      // can be one of 'email' or 'phone_number_sms'
      identifierType: 'email',
      // Add the API key
      apiKey: 'ede9466f-697c-41c5-afb7-c054807f5974',
      // Add a callback here to handle the payload sent by sdk
      onSuccess: (payload) => {
        // you can use this payload for your purpose
        router.push('/')
      },
    }
    let sawo = new Sawo(config)
    sawo.showForm()
  }, [])

  return (
    <div>
      <h1>Login Page</h1>
      <div
        id="sawo-container"
        style={{ height: '400px', width: '400px' }}
      ></div>
    </div>
  )
}
