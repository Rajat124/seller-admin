import { useState, useEffect } from "react";
import ListFilter from "./components/Filter/ListFilter";
import NewInput from "./components/FormInputs/NewInput";

function App() {
  const [itemlist, setitemlist] = useState([]);

  useEffect(() => {
    const localStorageObj = localStorage;
    const localStorageObjkeys = Object.keys(localStorageObj);

    let ObjArray = [];
    localStorageObjkeys.map((Ke) => {
      const userDetails = localStorageObj[Ke];
      const userObj = JSON.parse(userDetails);
      ObjArray.push(userObj);
      setitemlist(ObjArray);
    });
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
