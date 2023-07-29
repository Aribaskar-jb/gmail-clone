import { useState } from "react";

function Maillist(props) {
  const [selectall, setSelectall] = useState(false);
  const [rowdata, setRowdata] = useState(0);
  const [up, setup] = useState(true);
  const [update, setUpdate] = useState([]);
  // const [mailopen, setMailopen] = useState(true);
  return (
    <table>
      <thead>
        <tr>
          <th>
            <img
              src={
                selectall
                  ? "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_baseline_nv700_20dp.png"
                  : rowdata == 0
                  ? "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/check_box_outline_blank_baseline_nv700_20dp.png"
                  : "https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/indeterminate_check_box_baseline_nv700_20dp.png"
              }
              onClick={() => {
                setSelectall(!selectall);
                if (!selectall) {
                  props.maillist.map((data) => {
                    data["check-box"] = true;
                  });
                } else {
                  props.maillist.map((data) => {
                    data["check-box"] = false;
                  });
                }

                console.log(props.maillist);
              }}
            />
          </th>
          <th>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/refresh_baseline_nv700_20dp.png" />
          </th>
          <th>
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/more_vert_baseline_nv700_20dp.png" />
          </th>
          {rowdata > 0 && (
            <th>
              <img
                src="https://ssl.gstatic.com/ui/v1/icons/mail/gm3/1x/delete_baseline_nv700_20dp.png"
                onClick={() => {
                  props.Delete(update, setUpdate);
                }}
              />
            </th>
          )}
        </tr>
      </thead>
      <tbody>
        {props.maillist.map((data, index) => {
          function rowClick(name, index) {
            if (!data[name] && name === "check-box") {
              update.push(index);
              setUpdate(update);
            } else if (
              data[name] &&
              name === "check-box" &&
              update.indexOf(index) >= 0
            ) {
              update.splice(update.indexOf(index), 1);
              setUpdate(update);
            }
            console.log(update);
            data[name] = !data[name];
            if (name === "check-box") {
              if (data[name]) {
                setRowdata(rowdata + 1);
              } else {
                setRowdata(rowdata - 1);
              }
            } else {
              setup(!up);
            }
          }
          // if (mailopen) {
          return (
            <tr
              key={index}
              id={index}
              style={
                data["check-box"]
                  ? { backgroundColor: "#c2dbff", baxShadows: "#c2dbff" }
                  : {}
              }
              onClick={(e) => {
                console.log(e.target.parentNode.parentNode);
                rowClick(
                  e.target.parentNode.className,
                  e.target.parentNode.parentNode.id
                );
              }}
            >
              <td className="check-box">
                <img
                  src={
                    data["check-box"]
                      ? data["check-img"] + "_baseline_nv700_20dp.png"
                      : data["check-img"] +
                        "_outline_blank_baseline_nv700_20dp.png"
                  }
                />
              </td>
              <td className="star-box">
                <img
                  src={
                    data["star-box"]
                      ? data["star-img"] + "_fill_googyellow500_20dp.png"
                      : data["star-img"] + "_baseline_nv700_20dp.png"
                  }
                />
              </td>
              <td className="important">
                <img
                  src={
                    data["important"]
                      ? data["important-img"] + "_fill_googyellow500_20dp.png"
                      : data["important-img"] + "_baseline_nv700_20dp.png"
                  }
                />
              </td>
              <td>
                <h5>{data["user-name"]}</h5>
              </td>
              <td>
                <h5 style={{ margin: "auto" }}>
                  {data["subject"]}-
                  <span style={{ color: "grey" }}>{data["body"]}</span>
                </h5>
              </td>
              <td>
                <h5>{data["time"]}</h5>
              </td>
            </tr>
          );
          // } else {
          //   // <h5>{data["user-name"]}</h5>;
          //   return (
          //     <tr>
          //       <td>
          //         <h5>{data["user-name"]}</h5>
          //       </td>
          //       <td>
          //         <h5>{data["user-name"]}</h5>
          //       </td>
          //       <td>
          //         <h5>{data["user-name"]}</h5>
          //       </td>
          //     </tr>
          //   );
          // }
        })}
      </tbody>
    </table>
  );
}
export default Maillist;
