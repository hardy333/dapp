import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;
