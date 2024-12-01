import { PropsWithChildren } from "react";
import { TanstackProvider } from "./tanstack-query";

const Providers = ({ children }: PropsWithChildren) => {
  return <TanstackProvider>{children}</TanstackProvider>;
};

export default Providers;
