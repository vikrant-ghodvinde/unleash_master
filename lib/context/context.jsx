import { createContext, useContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
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
  
  return (
    <AppContext.Provider
      value={{
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
