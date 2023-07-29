import React, { useContext } from "react";
import DataContext from "../context/DataContext";

function Testing() {
  const { Data, setData } = useContext(DataContext);
  // function toggleActive() {
  //   const updatedSidebar = Data.map((dt) => {
  //     // Create a new object with the "active" property toggled
  //     return { ...dt, active: !dt.active };
  //   });

  //   // Update the global state with the modified data
  //   setData(updatedSidebar);
  // }
  function toggleActive() {
    console.log(Data);
  }

  return (
    <div>
      <button
        style={{ marginLeft: "50px", position: "fixed" }}
        onClick={toggleActive}
      >
        Toggle Active
      </button>
    </div>
  );
}

export default Testing;
