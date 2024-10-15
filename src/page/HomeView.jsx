
import CardProduct from '../components/CardProduct';
import CustomApi from '../api';
import { useLoaderData } from 'react-router-dom';
import Hero from '../components/Hero'

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export const loader = async ({request}) => {
  const {data} = await CustomApi.get('product')

  const products = data.data
  return {products}
}


const HomeView = () => {

  const {products} = useLoaderData()

  return (
    <>
    <div>
      <Hero />
    </div>
    <div className='border-b border-primary pb-5 mt-5'>
        <h2 className='text-2xl font-bold capitalize '>
          recommendation
        </h2>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
      {products.slice(0,6).map((item) => (
           <CardProduct item={item} key={item._id}/>
      ))}
    </div>
     
    </>
  )
}

export default HomeView