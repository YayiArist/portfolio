import { createContext, useState } from "react";
const LanguageContext = createContext();

const ModalContext = ({ children }) => {


    return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>;

}
export { ModalProvider };
export default ModalContext;