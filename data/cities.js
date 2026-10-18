import { legacyCities } from "./legacy-cities.js";
import { loadProviderCities } from "../lib/provider-data.js";
import { createCityContent } from "../lib/city-content.js";

// Original route registrations stay first, preserving established canonical destinations.
export const cities = loadProviderCities(legacyCities).map(createCityContent);
