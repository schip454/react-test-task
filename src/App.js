import { Route, Routes } from 'react-router-dom'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import Cart from './components/Cart/Cart'
import CartHeader from './components/Cart/CartHeader'

export default function App() {
  return (
    <div className="bg-[#282c34] min-h-[100vh] text-white  ">
      <div className="p-4 flex items-center justify-end  max-w-[1280px] mx-auto ">
        <CartHeader />
      </div>
      <div className=" flex justify-center min-h-[calc(100vh-60px)] items-center flex-col">
        <Routes>
          <Route index path='/' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  )
}
