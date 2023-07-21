import { useState, useEffect } from "react";
import ListFilter from "./components/Filter/ListFilter";
import NewInput from "./components/FormInputs/NewInput";

function App() {
  const [itemlist, setitemlist] = useState([]);

  useEffect(() => {
    const localStorageObj = localStorage;
    const localStorageObjkeys = Object.keys(localStorageObj);

    const objArray = localStorageObjkeys.map((el) => {
      const userDetails = localStorageObj[el];
      const userObj = JSON.parse(userDetails);
      return userObj;
    });
    setitemlist(objArray);
  }, []);

  const dataHandler = (list) => {
    setitemlist((prevlist) => {
      return [...prevlist, list];
    });
  };

  const deleteItemHandler = (itemkey) => {
    localStorage.removeItem(itemkey);
    setitemlist((prevlist) => prevlist.filter((item) => item.key !== itemkey));
  };

  return (
    <div>
      <NewInput onData={dataHandler} />
      <ListFilter items={itemlist} onDeleteItem={deleteItemHandler} />
    </div>
  );
}

export default App;
