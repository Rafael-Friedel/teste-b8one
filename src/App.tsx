import CardProduct from "./components/CardProduct"
import { products } from "./mocks/data"

function App() {
  return (
    <div className='App flex w-full h-screen justify-center items-center [&_*]:font-inter bg-slate-100 gap-10'>
      {products.map((product, index) => (
        <CardProduct {...product} key={product.id + index} />
      ))}
    </div>
  )
}

export default App
