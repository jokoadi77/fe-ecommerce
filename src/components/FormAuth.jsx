import { Form, Link } from "react-router-dom"
import FormInput from "./Form/FormInput"


const FormAuth = ({isRegister}) => {
  return (
    <div className="h-screen grid place-items-center">
        <Form method="POST" className="card w-96 p-8 bg-white shadow-lg flex flex-col gap-y-4">
            <h4 className="text-center text-3xl font-bold">{isRegister ? "Register" : "Login"}</h4>
            {isRegister ?  <FormInput type="name" name="name" label="username"/>
            : null
        }
            <FormInput type="email" name="email" label="email"/>
            <FormInput type="password" name="password" label="password"/>
            <div type="submit">
                <button className="mt-6 btn btn-neutral btn-block">{isRegister ? "Register" : "Login"}</button>
            </div>
            {isRegister ? <p className="text-center mt-3">
                already have a account?
                <Link to='/login' className="ml-2 link link-hover link-primary capitalize">
                    Login
                </Link>
            </p>
            :    
            <p className="text-center mt-3">
            dont`t have a account?
            <Link to='/register' className="ml-2 link link-hover link-primary capitalize">
                register
            </Link>
        </p>
        }
            
        </Form> 
    </div>
  )
}

export default FormAuth
