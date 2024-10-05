import flagAz from "assets/images/header/flag_az.svg";
import flagEn from "assets/images/header/flag_en.png";
import flagRu from "assets/images/header/flag_ru.png";

export const defaultLabelColors = {
  color_e: "#181818",
  color_f: "#666666",
  color_g: "#eeeeee",
  color_h: "#f8f8f8",
};

export const dateRangeFilters = [
  { label: "All Time Records", value: "all_time" },
  { label: "This Year", value: "this_year" },
  { label: "This Quarter", value: "this_quarter" },
  { label: "This Month", value: "this_month" },
  { label: "This Week", value: "this_week" },
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "Previous Week", value: "previous_week" },
  { label: "Previous Month", value: "previous_month" },
];

export const utc_time_zone = '+04:00'
export const dateFormat = "DD.MMM.YYYY"
export const timeFormat = "HH:mm"
export const timeFormatWithSec = "HH:mm:ss"

export const languages = [
  {
    label: "ENG",
    lang: "en",
    flag: flagEn,
  },
  {
    label: "AZE",
    lang: "az",
    flag: flagAz,
  },
  {
    label: "RUS",
    lang: "ru",
    flag: flagRu,
  },
] as any;