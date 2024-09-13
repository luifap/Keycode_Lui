import { useState } from "react";
import AddTask from "../components/AddTask";
import Header from "../components/Header/Header";
import SeeTask from "../components/SeeTask";

function Lui() {
  const [showCmponent, setShowComponent] = useState(true);

  const [listTask, setlistTask] = useState([]);

  return (
    <>
      <Header setShowComponent={setShowComponent} />

      {showCmponent ? (
        <AddTask listTask={listTask} setlistTask={setlistTask} />
      ) : (
        <SeeTask listTask={listTask} />
      )}
    </>
  );
}

export default Lui;
