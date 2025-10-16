import { useCallback, useMemo, useState } from "react";
import { ChildComponent } from "./ChildComponent";

function generateNumbers(size = 100000) {
  console.log("Generating Numbers...");
  const arr = Array.from({ length: size }, () => Math.random());
  return arr;
}

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function handleButton() {
    setCount((c) => c + 1);
  }

  const numbers = useMemo(() => generateNumbers(2000000), []);

  const handleClick = useCallback(() => {
    console.log("Child Clicked!!!");
  }, []);

  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={handleButton}>Count!</button>{" "}
      </div>
      <div>
        <input
          type="text"
          placeholder="Type something"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Text length: {text.length}</p>
        <p>Numbers generated: {numbers.length}</p>
      </div>
      <ChildComponent onClick={handleClick} label="Child Button (memoized)" />
    </div>
  );
}

export default App;
