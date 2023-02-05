import React, { useState, useEffect, useRef } from "react";
import Articles from "./Articles";

function App() {

  const [resourceType, setResourceType] = useState('viewed')
  const [timeSpan, setTimeSpan] = useState(1)
  const [items, setItems] = useState([])

  const refSelect = useRef()

  useEffect(() => {

    fetch(`https://api.nytimes.com/svc/mostpopular/v2/${resourceType}/${timeSpan}.json?api-key=SfFLAFDgBL2SU4ZiBx79rOu7hGYzguDm`)

      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [resourceType, timeSpan])

  function handleSelectChange() {
    setTimeSpan(refSelect.current.value)
  }
  
  return (
    <>
      <button onClick={() => setResourceType('emailed')}>e-Mail</button>
      <button onClick={() => setResourceType('shared')}>Facebook</button>
      <button onClick={() => setResourceType('viewed')}>Viewed</button>

      <select ref={refSelect} onChange={handleSelectChange}>
        <option value={1}>a day</option>
        <option value={7}>a week</option>
        <option value={30}>a month</option>
      </select>

      <h1>Most {resourceType} articles of the last {timeSpan} days:</h1>

      <Articles items={items} />
    </>
  );
}

export default App;
