import { redirect, useNavigate } from "react-router-dom"
import FormInput from "../components/Form/FormInput"
import FormSelect from "../components/Form/FormSelect"
import FormTextArea from "../components/Form/FormTextArea"
import { toast } from "react-toastify"
import CustomApi from "../api"

export const loader = (store) => async () => {
    const user = store.getState().userState.user
    if(!user) {
        toast.warning("Login user required")
        return redirect('/login')
    }
    if (user.role !== "owner") {
        toast.warn("Not Authorizer")
        return redirect('/')
    }
    return null
}

const CreateProductView = () => {
    const categories = ["pants", "shoes", "shirt", "t-shirt", "bag"]
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target
        const dataForm = new FormData(form)

        const data = Object.fromEntries(dataForm)
        try {
            const responseFileUpload = await CustomApi.post('/product/file-upload', {
                image: data.image
            }, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            }) 
            console.log('Response image', responseFileUpload.data.url);

            await CustomApi.post('/product', {
                name: data.name,
                price: data.price,
                description: data.description,
                stock: data.stock,
                category: data.category,
                image: responseFileUpload.data.url
            })

            toast.success("Add product successfully")
            navigate('/products')
            
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            toast.error(errorMessage)
        }
        
    }
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label className="form-control">
          <label className="label">
              <span className="label-text capitalize">
                   Image
              </span>
              
          </label>
        <input type="file" name="image" className="file-input file-input-bordered file-input-neutral w-full max-w-xs"/>
     </label>
        <FormSelect name="category" label="Select category" list={categories}/>
        <FormInput name="name" label="Product Name" type="text"  />
        <FormInput name="price" label="Price" type="number"  />
        <FormInput name="stock" label="Stock" type="number"  />
        <FormTextArea name="description" label="Description Product" />
        <input type="submit"  className="btn btn-accent btn-block mt-5 btn-md" />
    </form>
  )
}

export default CreateProductView
