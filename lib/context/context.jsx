import { createContext, useContext, useEffect, useState } from "react";
import i18n, { setLocale } from "../translate/i18n";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [postBackground, setPostBackground] = useState("background1");
  const [font, setFont] = useState("playfair-display");
  const [userImage, setUserImage] = useState("");
  const [profileName, setProfileName] = useState("Vikrant Ghodvinde");
  const [userName, setUserName] = useState("vicky027_");
  const [socialMedia, setSocialMedia] = useState(["twitter"]);
  const [postContent, setPostContent] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laborum dolores praesentium? Reiciendis voluptatibus eaque soluta omnis saepe deleniti hic non deserunt provident. Voluptate nulla quisquam sunt magnam quas! Dolore!"
  );
  const [postCounts, setPostCounts] = useState({
    enabled: false,
    likes: "0",
    shares: "0",
    replies: "0",
  });
  const [colorPallet, setColorPallet] = useState({
    background: "#070A10",
    color: "#7D7D8D",
    highlighter: "#7E7EFF",
  });
  const [textSettings, setTextSettings] = useState({
    fontSize: "small",
    textAlign: "left",
    fontFamily: "",
  });

  const [translation, setTranslation] = useState(i18n.locale);
  useEffect(() => {
    const loadLocale = async () => {
      const savedLocale = await AsyncStorage.getItem("appLocale");
      if (savedLocale) {
        setTranslation(savedLocale);
        i18n.locale = savedLocale;
      }
    };
    loadLocale();
  }, []);

  const changeLanguage = async (newLocale) => {
    setTranslation(newLocale);
    await setLocale(newLocale);
  };

  return (
    <AppContext.Provider
      value={{
        postBackground,
        setPostBackground,
        font,
        setFont,
        userImage,
        setUserImage,
        profileName,
        setProfileName,
        userName,
        setUserName,
        socialMedia,
        setSocialMedia,
        postContent,
        setPostContent,
        postCounts,
        setPostCounts,
        textSettings,
        setTextSettings,
        colorPallet,
        setColorPallet,
        translation,
        changeLanguage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const getContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within a ContextProvider.");
  }
  return context;
};
