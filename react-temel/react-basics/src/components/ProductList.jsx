import { items } from '../data' 
import Product from "./Product"

export default function ProductList() {

  const items = [
    {
      "image": "1.jpg",
      "title": "Iphone 14",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 90000,
      "is_active": true
    },
    {
      "image": "2.jpg",
      "title": "Iphone 15",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 100000,
      "is_active": true
    },
    {
      "image": "3.jpg",
      "title": "Iphone 16",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 110000,
      "is_active": true
    },
    {
      "image": "4.jpg",
      "title": "Iphone 17",
      "description": "Lorem ipsum dolor sit amet.",
      "price": 120000,
      "is_active": true
    }
  ]

  return (
    <>
      {
        items.length > 0 ? (
          <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4" id="product-list">
            {
              items.map((item, index) => (
                <div className='col' key={index}>
                  <Product
                    productObj={item}
                  />
                </div>
              ))
            }
          </div>
        ) :
          (
            <p>Şu anda satışta ürün yok.</p>
          )
      }
    </>
  )
}
