import { useState } from "react";
import Header from "./Header";
import { MakeType } from "../../helpers/types";
import { filterContext } from "../../helpers/createContext";

interface Children {
  children: JSX.Element | JSX.Element[];
}

const Layout = ({ children }: Children) => {
  const [make, setMake] = useState<MakeType>({});
  return (
    <filterContext.Provider value={{ make, setMake }}>
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </filterContext.Provider>
  );
};

export default Layout;
