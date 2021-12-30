import FoodQuality from "./FoodQuality";
import GlycogenAndWaterWeight from "./GlycogenAndWaterWeight";
import MyTransformation from "./MyTransformation";

// TODO: is there a programmatic way of doing this?
export default {
  "food-quality": {
    gist: FoodQuality.gist,
    long: FoodQuality.long,
  },
  "glycogen-and-water-weight": {
    gist: GlycogenAndWaterWeight.gist,
    long: GlycogenAndWaterWeight.long,
  },
  "my-transformation": {
    gist: MyTransformation.gist,
    long: MyTransformation.long,
  },
};