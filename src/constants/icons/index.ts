import _ from "lodash";
import { componentsIcons, ComponentsIcons } from "./components";
import { othersIcons, OthersIcons } from "./others";

export const ALL_ICONS = _.assign(
  {},
  OthersIcons,
  ComponentsIcons,
);
export default _.assign(
  {},
  othersIcons,
  componentsIcons,
);
