import { Route, Routes } from 'react-router-dom'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'

export default function App() {
  return (
    <header className="App-header">
      <Routes>
        <Route index path='/' element={<Products />} />
        <Route index path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </header>
  )
}
