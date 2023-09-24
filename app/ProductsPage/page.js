import Meta from "../components/Meta";
import Card from "../components/Card/Index";
import { products } from "../utils/products";

const ProductsPage =()=> {
 
    return(
        <>
      <Meta />
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm ">
          <div className="md:flex md:flex-wrap lg:flex lg:flex-wrap -mx-2">
            {products.map((product) => (
              <div key={product.id} className="lg:w-1/4 md:w-1/2 px-2 mb-4">
                <Card product={product} />
              </div>
            ))}
          </div>
        </div>
    </>
    )
}

export default ProductsPage