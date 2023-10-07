import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const handleDecrementNum = () => {
    setNumber(number - 1);
  };
  const handleIncrementNum = () => {
    setNumber(number + 1);
  };
  const handleResetNum = () => {
    setNumber(0);
  };

  return (
    <>
      <div className="bg-slate-900 text-white w-full h-screen flex justify-center flex-col">
        <div className="mx-auto border rounded-lg my-5">
          <h1 className="text-center text-4xl font-bold my-5 mx-2">{number}</h1>
          <div className="border-t">
            <button
              className="py-2 max-w-xs px-6 border rounded-lg m-4 font-bold text-lg "
              onClick={handleDecrementNum}
            >
              -
            </button>
            <button
              className="py-2 px-5 border rounded-lg m-4 font-bold text-lg "
              onClick={handleIncrementNum}
            >
              +
            </button>
          </div>
        </div>
        <button
          className="mx-auto py-1 px-7 border rounded-lg  my-8 font-bold text-lg min-w-lg"
          onClick={handleResetNum}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
