export default function Product({ productObj }) {

  // aktif değilse ele
  if (!productObj.is_active) return null

  // aktifse ön yüze gönder
  return (
    <div className='card shadow-sm'>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={"/img/" + productObj.image} alt="" />
      <div className='card-body'>
        <h2 className='card-title'>{productObj.title}</h2>
        <p className='card-text'>{productObj.description}</p>
        <span className='badge bg-success'>{productObj.price} TL</span>
      </div>
    </div>
  );
}