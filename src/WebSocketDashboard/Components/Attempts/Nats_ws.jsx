import { connect, NatsConnection, nkeyAuthenticator } from "nats.ws";

import { useEffect, useState } from "react";

const NkeyApp = () => {
  const [nats, setNats] = useState();

  useEffect(() => {
    (async () => {
      const seed = new TextEncoder().encode(
        "SUAEL6GG2L2HIF7DUGZJGMRUFKXELGGYFMHF76UO2AYBG3K4YLWR3FKC2Q"
      );
      const nc = await connect({
        servers: ["wss://demo.nats.io:8443"],
        authenticator: nkeyAuthenticator(seed),
      });
      setNats(nc);
      console.log("connected to NATS");
    })();

    return () => {
      nats?.drain();
      console.log("closed NATS connection");
    };
  }, []);

  return (
    <>
      {nats ? (
        <h1>Connected to {nats?.getServer()}</h1>
      ) : (
        <h1>Connecting to NATS...</h1>
      )}
    </>
  );
};

export default NkeyApp;
