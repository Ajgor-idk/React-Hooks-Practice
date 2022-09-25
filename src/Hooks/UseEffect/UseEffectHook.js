import React, { useState, useEffect } from "react";

export function UseEffectHook() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)


    //! While adding a function to return the return in useEffectHook the functions does whatever you want on umount state. It's important to remeber about this, because we don't want any excessive code running decreasing app spped.
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div>{windowWidth}</div>
  )
}

/*

//* Basicly this code gets the info from the api and updates it when the resourceType changes. And on the btn click resourceType changes.

const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [resourceType]);

<>
  <div>
    <button onClick={() => setResourceType("posts")}> Posts </button>
    <button onClick={() => setResourceType("users")}> Users </button>
    <button onClick={() => setResourceType("comments")}> Comments </button>
  </div>
  <h1>{resourceType}</h1>
  {items.map(item => {
    return <pre key={item.id}>{JSON.stringify(item)}</pre>
  })}
</>
*/
