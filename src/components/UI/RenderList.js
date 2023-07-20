import Button from "./Button";
import "./RenderList.css";

const RenderList = (props) => {
  const KeyDetector = () => {
    props.onDelete(props.itemkey);
  };
  // console.log(props.key);
  return (
    <div>
      <li className="render">
        <div className="list">
          {props.id}: {props.price} - {props.name} - {props.category}
        </div>
        <Button onClick={KeyDetector}>Delete</Button>
      </li>
    </div>
  );
};

export default RenderList;
