import Input from "./Input";

const NewInput = (props) => {
  const saveDataHandler = (input) => {
    const inputData = {
      ...input,
      key: Math.random().toString(),
    };

    props.onData(inputData);
  };

  return (
    <div>
      <Input onSaveData={saveDataHandler} />
    </div>
  );
};

export default NewInput;
