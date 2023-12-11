import { atom } from "recoil";

export const DisplayResolution = atom<"mobile" | "web">({
    key: "DisplayResolution",
    default: "web",
});
