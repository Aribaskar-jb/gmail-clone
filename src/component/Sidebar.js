import Sidebarlist from "./Sidebarlisty";
import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
// function reducer(state, action) {
//     // {action.type=="incremented_id" && id:state.id}
//     if (action.type === "increment_id") {
//       return {
//         id: state.id + 1
//       };
//     }
//     if (action.type === "chage_open") {
//       return {
//         open: !state.open,
//       };
//     }
//   }
function Sidebar() {
  const { Data, setData } = useContext(DataContext);
  // let [Data, setDataset] = useState(data);
  const [id, Setid] = useState(0);
  const [open, Setopen] = useState(true);
  // const Actice = (index) => {
  //   if (id == index) {
  //     data.active = true;
  //     temp = { ...data, active: true };
  //   } else {
  //     data.active = false;
  //     temp = { ...data, active: false };
  //   }
  // };
  let updatedata;
  const update = (id) => {
    updatedata = Data.map((data, index) => {
      if (id == index) {
        data.active = true;
        // console.log({...data,active: true})
        return { ...data, active: true };
      } else {
        data.active = false;
        return { ...data, active: false };
      }
    });
    Setid(id);
    setData(updatedata)
  };
  // console.log(updatedata);
  // setData(updatedata);
  // console.log(updatedata);
  // console.log(temp);
  //   const [state, dispatch] = useReducer(reducer, { id: 0, open: true });
  return (
    <div className="sidebar">
      <button className="Component-button">
        <ModeEditOutlinedIcon />
        <span> Component</span>
      </button>
      {Data.map((data, index) => {
        var imgsrc;
        if (data.active && index != 7) {
          imgsrc = data.img + "_fill_baseline_p900_20dp.png";
        } else if (index <= 4 || index > 5) {
          if (index != 7) {
            imgsrc = data.img + "_baseline_nv700_20dp.png";
          } else {
            imgsrc = data.img;
          }
        }
        if (index == 5 && open) {
          imgsrc = data.img + "_more_baseline_nv700_20dp.png";
          data.imgtext = "More";
          data.active = false;
        } else if (index == 5 && open == false) {
          imgsrc = data.img + "_less_baseline_nv700_20dp.png";
          data.imgtext = "Less";
        }
        return (
          <Sidebarlist
            key={index}
            id={index}
            imgsrc={imgsrc}
            count={data.count}
            imgtext={data.imgtext}
            active={data.active}
            open={open}
            setid={index != 5 ? update : Setopen}
          />
        );
      })}
    </div>
  );
}
export default Sidebar;
