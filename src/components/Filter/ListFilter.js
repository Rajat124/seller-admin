import RenderList from "../UI/RenderList";
import "../FormInputs/Input.css";

const ListFilter = (props) => {
  // console.log(props.items);
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
            // key={item.key} //Never use "key" keyword as propsname, it is reserved.
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
