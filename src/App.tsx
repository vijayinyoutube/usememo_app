import React, { useEffect, useMemo, useState } from "react";

const App = () => {
  const [number, setNumber] = useState(1);
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    console.log('Inside useEffect...')
    slowFunction(1);
  }, []);

  const slowFunction = (num: number) => {
    console.log("Running slow function....");
    for (var i = 0; i < 1000000000; i++) {}
    console.log("slow function completed.");
    setTheme(!theme);
    console.log("calling again...",{theme});
    return num * 2;
  };

  // var memoCall = useMemo(() => {
  //   return slowFunction(number);
  // }, []);

  return (
    <div>
      <button
        onClick={() => {
          const double = slowFunction(number);
          setNumber(double);
        }}
      >
        Slow Function
      </button>
      <p>{number}</p>
      <p>{theme.toString()}</p>
    </div>
  );
};

export default App;
