import App from "next/app";
import { useContext } from "react";
import { RootContext, RootProvider } from "../context/Provider";

const MyApp = ({ Component, pageProps }) => {
  const context = useContext(RootContext);

  return (
    <RootProvider>
      <Component {...pageProps} context={context} />
    </RootProvider>
  );
};

export default MyApp;
