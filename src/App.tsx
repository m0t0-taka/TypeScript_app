import axios from "axios";
import "./styles.css";

export default function App() {
  const getFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    });
  };
  return (
    <div className="App">
      <button onClick={getFetchData}>データ取得</button>
    </div>
  );
}
