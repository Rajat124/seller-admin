import RenderList from "../UI/RenderList";
import "../FormInputs/Input.css";

const ListFilter = (props) => {
  let electronicsList = [];
  let FoodList = [];
  let SkincareList = [];

  props.items.map((item) => {
    localStorage.setItem(item.key, JSON.stringify(item));
    if (item.category === "Electronics") {
      electronicsList.push(item);
    } else if (item.category === "Food") {
      FoodList.push(item);
    } else {
      SkincareList.push(item);
    }
  });

  return (
    <ul>
      <h2>Products</h2>
      <h3>Electronics Items</h3>
      {electronicsList.map((item) => {
        return (
          <RenderList
            key={item.key} // Just to avoid key error
            itemkey={item.key}
            id={item.id}
            price={item.price}
            name={item.name}
            category={item.category}
            onDelete={props.onDeleteItem}
          />
        );
      })}
      <h3>Food Items</h3>
      {FoodList.map((item) => {
        return (
          <RenderList
            key={item.key}
            itemkey={item.key}
            id={item.id}
            price={item.price}
            name={item.name}
            category={item.category}
            onDelete={props.onDeleteItem}
          />
        );
      })}
      <h3>SkinCare Items</h3>
      {SkincareList.map((item) => {
        return (
          <RenderList
            key={item.key}
            itemkey={item.key}
            id={item.id}
            price={item.price}
            name={item.name}
            category={item.category}
            onDelete={props.onDeleteItem}
          />
        );
      })}
    </ul>
  );
};

export default ListFilter;
