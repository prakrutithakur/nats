import { useEffect } from "react";
import {
  connect,
  StringCodec,
  nkeyAuthenticator,
} from "../../../../../node_modules/nats.ws/lib/src/mod";

const NatsComponentWorking = ({ setmessage }) => {
  useEffect(() => {
    async function connectToNATS() {
      try {
        const seed = new TextEncoder().encode(process.env.REACT_APP_NKSEED);
        const nc = await connect({
          servers: "wss://tmp-nats.dev.orahi.com:443",
          authenticator: nkeyAuthenticator(seed),
        });
        const sc = StringCodec();
        // const sub = nc.subscribe("eber.>");
        // const sub = nc.subscribe("eber.iw-G26.283049d75d529b40.gps-signal");
        const sub = nc.request("eber.iw-G26.%s.request.ping-pong");

        (async () => {
          for await (const msg of sub) {
            try {
              const decodedmessage = JSON.parse(sc.decode(msg.data));
              console.log("decodedmessage", decodedmessage);
              // setmessage(decodedmessage.dtc_list);
              // setmessage((pre) => [...pre, decodedmessage]);
            } catch (error) {
              console.log("error", error);
            }
          }
        })();
        // nc.publish("eber.iw-G26.>", sc.encode("Hello from React!"));
      } catch (error) {
        console.error("Error connecting to NATS:", error);
      }
    }
    connectToNATS();
  }, []);

  return null;
};

export default NatsComponentWorking;
