import { Dimensions } from "react-native";

export const DEVICE_WIDTH = Dimensions.get("window").width;
export const DEVICE_HEIGHT = Dimensions.get("window").height;

// MAIN CARD SETTINGS
export const CARD_WIDTH = DEVICE_WIDTH <= 400 ? 334 : 388;
export const CARD_HEIGHT = DEVICE_WIDTH <= 400 ? 334 : 388;
