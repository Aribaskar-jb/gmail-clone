const Sidebarlisty = (props) => {
  return (
    <div
      className={
        props.active ? "sidebar-container active" : "sidebar-container "
      }
      id={props.id}
      onClick={(e) => {
        if (props.id != 5) {
          props.setid(e.target.id);
        } else {
          props.setid(!props.open);
        }
      }}
      style={props.open && props.id > 5 ? { display: "none" } : {}}
    >
      <img src={props.imgsrc} id={props.id} width={19} height={20} />
      <p id={props.id}>{props.imgtext}</p>
      <span className="count">{props.count}</span>
    </div>
  );
};
export default Sidebarlisty;
