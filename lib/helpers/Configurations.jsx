import { Facebook, Instagram, LinkedIn, Twitter } from "../constants/SocialMediaIcons";
import {
  Background1,
  Background2,
  Background3,
  Background4,
  Background5,
  Background6,
  Background7,
  Background8,
  Background9,
  Background10,
  Background11,
} from "../constants/postBackgrounds";

export const postBackgroundConfiguration = (background) => {
  switch (background) {
    case "background1":
      return Background1;

    case "background2":
      return Background2;

    case "background3":
      return Background3;

    case "background4":
      return Background4;

    case "background5":
      return Background5;

    case "background6":
      return Background6;

    case "background7":
      return Background7;

    case "background8":
      return Background8;

    case "background9":
      return Background9;

    case "background10":
      return Background10;

    case "background11":
      return Background11;

    default:
      return Background1;
  }
};

export const fontSizeConfiguration = (fontSize) => {
  switch (fontSize) {
    case "small":
      return 12;

    case "medium":
      return 14;

    case "large":
      return 18;

    case "extra-large":
      return 20;

    default:
      return;
  }
};

export const textAlignConfiguration = (fontSize) => {
  switch (fontSize) {
    case "left":
      return "left";

    case "center":
      return "center";

    case "right":
      return "right";

    case "justify":
      return "justify";

    default:
      return;
  }
};

export const socialMediaIcon = (icon) => {
  switch (icon) {
    case "twitter":
      return Twitter;

    case "linkedIn":
      return LinkedIn;

    case "instagram":
      return Instagram;

    case "facebook":
      return Facebook;

    default:
      return Twitter;
  }
};

export const postCountConfiguration = (counts) => {
  if (counts >= 1e6) {
    return (counts / 1e6).toFixed(1) + "M";
  } else if (counts >= 1e3) {
    return (counts / 1e3).toFixed(1) + "k";
  } else {
    return counts.toString();
  }
};
