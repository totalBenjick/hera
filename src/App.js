import React from "react";
import Store from "./components/Store";
import useDevice from "usedevice";

const breakpoints = [
  { name: "phone", min: 0, max: 766 },
  { name: "tablet", min: 767, max: 1080 },
  { name: "desktop", min: 1080, max: Infinity }
];

function App() {
  const device = useDevice({ breakpoints });
  return <Store device={device} />;
}

export default App;
