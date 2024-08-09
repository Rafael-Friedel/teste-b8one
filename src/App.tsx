import CardProduct from "./components/CardProduct"
import { products } from "./mocks/data"

function App() {
  return (
    <div className='App flex flex-col lg:flex-row w-full h-full py-10 justify-center items-center [&_*]:font-inter bg-slate-100 gap-10'>
      {products.map((product, index) => (
        <CardProduct {...product} key={product.id + index} />
      ))}
    </div>
  )
}

export default App
