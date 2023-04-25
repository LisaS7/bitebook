import {
  faCircleCheck,
  faCircleXmark,
  faCircleQuestion,
  faChevronCircleDown,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

export const categorySymbols = {
  yes: [faCircleCheck, "green"],
  no: [faCircleXmark, "red"],
  maybe: [faCircleQuestion, "darkorange"],
  rarely: [faChevronCircleDown, "darkturquoise"],
  untested: [faMinus, "lightslategrey"],
};
