import FoodQuality from "./FoodQuality";
import GlycogenAndWaterWeight from "./GlycogenAndWaterWeight";

// TODO: is there a programmatic way of doing this?
export default {
  "food-quality": {
    gist: FoodQuality.gist,
    long: FoodQuality.long,
  },
  "glycogen-and-water-weight": {
    gist: GlycogenAndWaterWeight.gist,
    long: GlycogenAndWaterWeight.long,
  }
};