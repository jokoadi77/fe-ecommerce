import {createBrowserRouter, RouterProvider} from 'react-router-dom'


//Component
import AboutView from './page/aboutView.jsx'
import CartView from './page/cartView'
import HomeView from './page/HomeView'
import OrderView from './page/OrderView'
import ProductView from './page/ProductView'
import LoginView from './page/auth/Loginview'
import RegisterView from './page/auth/RegisterView'
import PublicLayout from './layouts/PublicLayout'
import DetailProduct from './page/DetailProduct'
import CreateProductView from './page/CreateProductView'
import EditProductView from './page/EditProductView'

//loader
import { loader as HomeLoader } from './page/HomeView'
import { loader as ProductLoader } from './page/ProductView'
import { loader as CheckoutLoader} from './page/CheckoutView'
import { loader as OrderLoader } from './page/OrderView'
import { loader as CreateProductLoader } from './page/CreateProductView'

//action
import { action as LoginAction } from './page/auth/Loginview'
import { action as RegisterAction} from './page/auth/RegisterView'

//storage
import { store } from './store'
import CheckoutView from './page/CheckoutView'

import ErrorView from './page/ErrorView'


const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement : <ErrorView />,
    children: [
      {
        index: true,
        element: <HomeView/>,
        loader: HomeLoader,
      },
      {
        path: 'products',
        element: <ProductView />,
        loader: ProductLoader,
      },
      {
        path: 'product/create',
        element: <CreateProductView />,
        loader: CreateProductLoader(store)
      },
      {
        path: 'product/:id/edit',
        element: <EditProductView />,
      },
      {
        path: 'product/:id',
        element: <DetailProduct />
      },
      {
        path: 'orders',
        element: <OrderView />,
        loader: OrderLoader(store)
      },
      {
        path: 'checkout',
        element: <CheckoutView />,
        loader: CheckoutLoader(store)
      },
      {
        path: 'cart',
        element: <CartView />
      },
      {
        path: 'about',
        element: <AboutView />
      },
    ]
  },
  {
    path: '/login',
    element: <LoginView />,
    action: LoginAction(store)
  },
  {
    path: '/register',
    element: <RegisterView />,
    action: RegisterAction(store)
  },
])

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
