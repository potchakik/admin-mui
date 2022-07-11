import logo from "./logo.svg";
import "./App.css";
import Topstories from "./components/list/Topstories";
import LatestArticle from "./components/list/LatestArticle";
import EditorsPicks from "./components/list/EditorsPick";
import ExtendedLatestArticle from "./components/extendedList/ExtendedLatestArticle";
import ExtendedEditorsPicks from "./components/extendedList/ExtendedEditorsPick";
import ExtendedTopstories from "./components/extendedList/ExtendedTopstories";

function App() {
  return (
    <div className="App">
      <ExtendedTopstories />
    </div>
  );
}

export default App;
