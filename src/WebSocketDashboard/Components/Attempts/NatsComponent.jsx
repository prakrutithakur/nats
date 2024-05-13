import { useState, useEffect } from "react";
import { connect, StringCodec } from "nats.ws";

const so = StringCodec();
function App() {
  const [nc, setConnection] = useState(undefined);
  const [lastError, setError] = useState("");
  useEffect(() => {
    if (nc === undefined) {
      connect({
        servers: ["ws://tmp-nats.dev.orahi.com:443"],
        authenticator: {
          nonce: {
            nkey: "SUAHNJ6YIC5R4V6QTKFEUIBSMCOI36LCIPQCE7YMGTN4J6ULY222GJ5PSM",
          },
        },
      })
        .then((nc) => {
          nc.subscribe("*", (err, msg) => {
            if (err) {
              console.error("Subscription error:", err);
              return;
            }
            const data = StringCodec().decode(msg.data);
            console.log("data", data);
          });
          setConnection(nc);
        })
        .catch((err) => {
          // servers: c,
          setError("error connecting");
          console.error(err);
        });
    }
  });
  const state = nc ? "connected" : "not yet connected";
  return (
    <div className="container">
      <h1 className="header">{state}</h1>
      <h3>{lastError ? lastError : ""}</h3>
    </div>
  );
}
export default App;
