import Maillist from "./Maillist";
import mail from "./mail.json";
import DataContext from "../context/DataContext";
import { useContext, useState, useEffect } from "react";
function Mailbody() {
  const [update1, setUpdate] = useState(true);
  const [maillist, setMaillist] = useState(mail);
  const { Data, setData } = useContext(DataContext);
  // useEffect(() => {
  let data2 = [];
  Data.map((data) => {
    if (data["active"] && data["imgtext"] == "inbox") {
      data2 = [];
      // console.log(maillist);
      maillist.map((temp) => {
        if (temp["Trash"] != true) {
          data2.push(temp);
        }
      });
    }
    if (data["active"] && data["imgtext"] == "Starred") {
      data2 = [];
      maillist.map((temp) => {
        if (temp["star-box"] && temp["Trash"] != true) {
          data2.push(temp);
        }
      });
    }
    if (data["active"] && data["imgtext"] == "Important") {
      data2 = [];
      maillist.map((temp) => {
        if (temp["important"] && temp["Trash"] != true) {
          data2.push(temp);
        }
      });
    }
    if (data["active"] && data["imgtext"] == "Trash") {
      data2 = [];
      maillist.map((temp) => {
        if (temp["Trash"] && temp["Trash"]) {
          data2.push(temp);
        }
      });
    }
  });
  // }, [maillist, Data]);
  function Delete(update, data) {
    console.log("update");
    update.map((i) => {
      maillist[i]["Trash"] = true;
      maillist[i]["check-box"] = !maillist[i]["check-box"];
    });
    console.log(update);
    setMaillist(maillist);
    setUpdate(!update1);
    data([]);
  }
  return (
    <div className="Mailbody">
      <Maillist maillist={data2} Delete={Delete} />
    </div>
  );
}
export default Mailbody;
