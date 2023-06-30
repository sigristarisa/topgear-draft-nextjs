import { DriveTypeSeed } from "../../helpers/types";

const awd: DriveTypeSeed = {
  name: "allrad",
};

const fwd: DriveTypeSeed = {
  name: "vorderradantrieb",
};

const rwd: DriveTypeSeed = {
  name: "hinterradantrieb",
};

export const drive = {
  awd,
  fwd,
  rwd,
};

export const driveList = [awd, fwd, rwd];
