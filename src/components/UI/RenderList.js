import Button from "./Button";
// import "./RenderList.css";

const RenderList = (props) => {
  const KeyDetector = () => {
    props.onDelete(props.itemkey);
  };
  // console.log(props.key);

  return (
    <div className="container">
      <ul className="list-group">
        <li className="list-group-item">
          <span className="d-flex justify-content-between">
            {props.id}: {props.price} - {props.name} - {props.category}
            <Button onClick={KeyDetector}>Delete</Button>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RenderList;
