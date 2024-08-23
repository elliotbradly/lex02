import ScreenBit from "../fce/screen.bit";
import { ScreenModel } from "../screen.model";

export const writeAvatarName = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarName = bal.dat;
  return cpy;
};

export const writeAvatarNom = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarNom = bal.dat;
  return cpy;
};

export const writeAvatarColor = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarColor = bal.dat;
  return cpy;
};

export const writeAvatarBeeing = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarBeeing = bal.dat;
  return cpy;
};

export const writeAvatarShapes = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarShape = bal.dat;
  return cpy;
};

export const writeAvatarPattern = (cpy: ScreenModel, bal: ScreenBit) => {
  cpy.avatarPattern = bal.dat;
  return cpy;
};
