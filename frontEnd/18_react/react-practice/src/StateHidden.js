import { useState } from "react";

function StateHidden() {
  const [showDisplay, setShowDisplay] = useState("inline");
  const [hiddenDisplay, setHiddenDisplay] = useState("none");
  const [textDisplay, setTextDisplay] = useState("none");

  function show() {
    setShowDisplay("none");
    setHiddenDisplay("inline");
    setTextDisplay("block");
  }
  function hidden() {
    setShowDisplay("inline");
    setHiddenDisplay("none");
    setTextDisplay("none");
  }
  return (
    <>
      <br />
      <br />
      <br />
      <button onClick={show} style={{ display: showDisplay }}>
        보여라
      </button>
      <button onClick={hidden} style={{ display: hiddenDisplay }}>
        사라져라
      </button>
      <h2 style={{ display: textDisplay }}>안녕하세요</h2>
    </>
  );
}

export default StateHidden;
