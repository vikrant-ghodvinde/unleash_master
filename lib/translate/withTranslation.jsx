import { useEffect } from "react";
import { getContext } from "../context/context";
import i18n from "./i18n";

const withTranslation = (Component) => (props) => {
  const { translation } = getContext();
  return <Component {...props} t={i18n.t} locale={translation} />;
};

export default withTranslation;
