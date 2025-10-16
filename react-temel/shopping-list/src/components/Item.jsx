export default function Item({ item, onDeleteItem, onUpdateItem}){
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => onUpdateItem(item.id)} />
      <span style={item.completed ? {textDecorationLine:"line-through"}:{}}> {item.quantity} { item.title } </span>
      <button onClick={ () => onDeleteItem(item.id) }>X</button>
    </li>
  );
}
