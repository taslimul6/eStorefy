import austin from "./austin.js";
import baltimore from "./baltimore.js";
import boston from "./boston.js";
import charlotte from "./charlotte.js";
import chicago from "./chicago.js";
import columbus from "./columbus.js";
import dallas from "./dallas.js";
import denver from "./denver.js";
import detroit from "./detroit.js";
import elPaso from "./elPaso.js";
import fortWorth from "./fortWorth.js";
import houston from "./houston.js";
import indianapolis from "./indianapolis.js";
import jacksonville from "./jacksonville.js";
import lasVegas from "./lasVegas.js";
import losAngeles from "./losAngeles.js";
import louisville from "./louisville.js";
import memphis from "./memphis.js";
import nashville from "./nashville.js";
import newYork from "./newYork.js";
import oklahomaCity from "./oklahomaCity.js";
import philadelphia from "./philadelphia.js";
import phoenix from "./phoenix.js";
import portland from "./portland.js";
import sanAntonio from "./sanAntonio.js";
import sanDiego from "./sanDiego.js";
import sanFrancisco from "./sanFrancisco.js";
import sanJose from "./sanJose.js";
import seattle from "./seattle.js";
import washingtonDc from "./washingtonDc.js";
import { createCityContent } from "../lib/city-content.js";

/** Register a city once; routes, metadata and navigation follow automatically. */
export const cities = [
  { id: "austin", route: "shopify-agency-in-austin", dataset: austin },
  { id: "baltimore", route: "shopify-agency-in-baltimore", dataset: baltimore },
  { id: "boston", route: "shopify-agency-in-boston", dataset: boston },
  { id: "charlotte", route: "shopify-agency-in-charlotte", dataset: charlotte },
  { id: "chicago", route: "shopify-agency-in-chicago", dataset: chicago },
  { id: "columbus", route: "shopify-agency-in-columbus", dataset: columbus },
  { id: "dallas", route: "shopify-agency-in-dallas", dataset: dallas },
  { id: "denver", route: "shopify-agency-in-denver", dataset: denver },
  { id: "detroit", route: "shopify-agency-in-detroit", dataset: detroit },
  { id: "el-paso", route: "shopify-agency-in-el-paso", dataset: elPaso },
  { id: "fort-worth", route: "shopify-agency-in-fort-worth", dataset: fortWorth },
  { id: "houston", route: "shopify-agency-in-houston", dataset: houston },
  { id: "indianapolis", route: "shopify-agency-in-indianapolis", dataset: indianapolis },
  { id: "jacksonville", route: "shopify-agency-in-jacksonville", dataset: jacksonville },
  { id: "las-vegas", route: "shopify-agency-in-las-vegas", dataset: lasVegas },
  { id: "los-angeles", route: "shopify-agency-in-los-angeles", dataset: losAngeles },
  { id: "louisville", route: "shopify-agency-in-louisville", dataset: louisville },
  { id: "memphis", route: "shopify-agency-in-memphis", dataset: memphis },
  { id: "nashville", route: "shopify-agency-in-nashville", dataset: nashville },
  { id: "new-york-city", route: "shopify-agency-in-newyork", dataset: newYork },
  {
    id: "oklahoma-city",
    route: "shopify-agency-in-oklahoma-city",
    dataset: oklahomaCity,
  },
  { id: "philadelphia", route: "shopify-agency-in-philadelphia", dataset: philadelphia },
  { id: "phoenix", route: "shopify-agency-in-phoenix", dataset: phoenix },
  { id: "portland", route: "shopify-agency-in-portland", dataset: portland },
  { id: "san-antonio", route: "shopify-agency-in-san-antonio", dataset: sanAntonio },
  { id: "san-diego", route: "shopify-agency-in-san-diego", dataset: sanDiego },
  {
    id: "san-francisco",
    route: "shopify-agency-in-san-francisco",
    dataset: sanFrancisco,
  },
  { id: "san-jose", route: "shopify-agency-in-san-jose", dataset: sanJose },
  { id: "seattle", route: "shopify-agency-in-seattle", dataset: seattle },
  {
    id: "washington-dc",
    route: "shopify-agency-in-washington-dc",
    dataset: washingtonDc,
  },
].map(createCityContent);
