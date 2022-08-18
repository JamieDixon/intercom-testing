import "./styles.css";
import { IntercomProvider } from "react-use-intercom";
export default function App() {
  return (
    <IntercomProvider appId="oovtc8q8" autoBoot>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </IntercomProvider>
  );
}
