import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import CustomApi from "../api"
import Loading from "../components/Loading"
import FormSelect from "../components/Form/FormSelect"
import FormInput from "../components/Form/FormInput"
import FormTextArea from "../components/Form/FormTextArea"
import { toast } from "react-toastify"


const EditProductView = () => {
    const categories = ["pants", "shoes", "shirt", "t-shirt", "bag"]
    const navigate  = useNavigate()
    const [product, setProduct] = useState(null)
    const {id} = useParams()
    const getProductId =  async () => {
        const {data} = await CustomApi.get(`/product/${id}`)
        setProduct(data.data)
        
     
        
    } 

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.target
        const dataForm = new FormData(form)

        const data = Object.fromEntries(dataForm)
        try {

            await CustomApi.put(`/product/${id}`, {
                name: data.name,
                price: data.price,
                description: data.description,
                stock: data.stock,
                category: data.category,
            })

            toast.info("Add Edit successfully")
            navigate('/products')
            
        } catch (error) {
            const errorMessage = error?.response?.data?.message
            toast.error(errorMessage)
        }
    }
    useEffect(() => {
        getProductId()
       
        
    }, [])
  return (
    <>
    {product ? (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormSelect name="category" label="Select category" list={categories} defaultValue={product.category}/>
        <FormInput name="name" label="Product Name" type="text" defaultValue={product.name} />
        <FormInput name="price" label="Price" type="number"  defaultValue={product.price}/>
        <FormInput name="stock" label="Stock" type="number"  defaultValue={product.stock}/>
        <FormTextArea name="description" label="Description Product" defaultValue={product.description} />
        <input type="submit" value="Edit" className="btn btn-accent btn-block mt-5 btn-md" />
    </form>
    ) : (
        <Loading />
    )}
 </>
  )
}

export default EditProductView
