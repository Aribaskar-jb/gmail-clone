import MenuIcon from "@mui/icons-material/MenuTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import Avatar from "@mui/material/Avatar";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
const Navbar = () => {
  return (
      <nav>
        <div className="navbar">
          <MenuIcon sx={{ color: "#5E6268" }} />
          <img
            src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
            width="109px"
            height="40px"
            style={{ marginLeft: "20px" }}
          />
          <div className="search-bar">
            <SearchIcon />
            <input placeholder="Search mail" id="Search" className="Search" />
            <TuneIcon id="search-options" />
          </div>
          <div className="Navbar-right">
            <HelpOutlineIcon sx={{ fontSize: "25px", color: "#5E6268" }} />
            <SettingsOutlinedIcon sx={{ fontSize: "25px", color: "#5E6268" }} />
            <AppsSharpIcon sx={{ fontSize: "25px", color: "#5E6268" }} />
            <Avatar
              src="https://lh3.googleusercontent.com/ogw/AGvuzYbbgZASNwuXLrDEpWFmsVoYpy1txs7YozJXufPsvA=s32-c-mo"
              alt="Profile Image"
              sx={{width:'30.5px' ,height:"30.5px"}}
            />
          </div>
        </div>
      </nav>
  );
};
export default Navbar;
