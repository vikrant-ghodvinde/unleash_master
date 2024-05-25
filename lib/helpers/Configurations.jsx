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
