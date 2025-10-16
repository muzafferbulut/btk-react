export default function Summary({items}){
  if (items.length === 0 ) {
    return (<footer className="summary">Listenizi hazırlamaya başlayabilirsiniz.</footer>);
  }
  
  const itemsCount = items.length
  const completedItemCount = items.filter(item => item.completed).length

  return (
    <footer className="summary">

      { itemsCount === completedItemCount ? <p>Alışveriş tamamlandı.</p>:
      <p>{ itemsCount } üründen { completedItemCount } tanesi alındı.</p>
      }
    </footer>
  );
}