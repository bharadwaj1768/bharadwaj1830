import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    // Call backend API
    fetch("http://localhost:5000/api")
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg("Backend not running"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{msg}</h1>
    </div>
  );
}

export default App;