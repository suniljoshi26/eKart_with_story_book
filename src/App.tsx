import { useState } from "react";
import Button from "./Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Button>Save</Button>
    </div>
  );
}

export default App;
