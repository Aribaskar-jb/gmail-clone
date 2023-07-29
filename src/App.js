import "./App.css";
import Navbar from "./component/Navbar";
import Mailbody from "./component/Mailbody";
import Sidebar from "./component/Sidebar";
import { DataProvider } from "./context/DataContext";
import Testing from "./component/Testing";

function App() {
  console.log("fuhfejs");
  return (
    <>
      <Navbar />
      <DataProvider>
        <Sidebar />
        <Mailbody />
        {/* <Testing/> */}
      </DataProvider>
    </>
  );
}

export default App;
