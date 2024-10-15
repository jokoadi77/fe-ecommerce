import { toast } from "react-toastify";
import FormAuth from "../../components/FormAuth"
import CustomApi from "../../api";
import { redirect } from "react-router-dom";
import {registerUser} from '../../features/userSlice'

export const action = (store) => async ({request}) => {
  console.log(store);
  const formInputData = await request.formData()
  const data = Object.fromEntries(formInputData)

  try {
    const response = await CustomApi.post('/auth/register', data)
    store.dispatch(registerUser(response.data))
    toast.success("Success create account")
    return redirect('/')
  } catch (error) {
    const errorMessage = error?.response?.data?.message
    toast.error(errorMessage)
    
    return null
    
  }
}
const RegisterView = () => {
    return (
      <main>
          <FormAuth isRegister={true}/>
      </main>
    )
  }
  
  export default RegisterView
  