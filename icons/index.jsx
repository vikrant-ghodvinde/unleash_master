import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export const HomeIcon = (props) => {
  return <AntDesign name="home" {...props} />;
};

export const UserIcon = (props) => {
  return <AntDesign name="user" {...props} />;
};

export const SettingsIcon = (props) => {
  return <AntDesign name="setting" {...props} />;
};

export const AppOutlined = (props) => {
  return <Ionicons name="apps-outline" {...props} />;
};

export const ArrowLeft = (props) => {
  return <AntDesign name="arrowleft" {...props} />;
};

export const UploadIcon = (props) => {
  return <Feather name="upload-cloud" {...props} />;
};

export const HeartIcon = (props) => {
  return <Feather name="heart" {...props} />;
};

export const ShareIcon = (props) => {
  return <Feather name="send" {...props} />;
};

export const RepliesIcon = (props) => {
  return <Feather name="message-circle" {...props} />;
};
