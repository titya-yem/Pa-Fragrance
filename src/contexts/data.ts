import { dataType } from "@/types";
import twoSets from "../../public/2 sets.jpg";
import threeSets from "../../public/3 sets.jpg";
import paFragrance from "../../public/pa fragrance.jpg";
import premiumFragrance from "../../public/Pa perfume set.png";

const productSets: dataType[] = [
  {
    id: 1,
    img: paFragrance,
    name: "Pa Fragrance",
    price: 69, // Price in cents (e.g., $69.00)
    infoBrand: "Pa Fragrance",
    infoText:
      "A luxurious fragrance crafted to evoke cherished memories with loved ones through its timeless aroma.",
  },
  {
    id: 2,
    img: premiumFragrance,
    name: "Pa Premium",
    price: 99, // Price in cents (e.g., $99.00)
    infoBrand: "Pa Fragrance",
    infoText:
      "A premium collection, thoughtfully designed to capture the essence of cherished moments with loved ones through its sophisticated and lasting scent.",
  },
  {
    id: 3,
    img: twoSets,
    name: "Pa Fragrance (2 Sets)",
    price: 169, // Price in cents (e.g., $169.00)
    infoBrand: "Pa Fragrance",
    infoText:
      "Offers two premium sets, each crafted to celebrate cherished memories with loved ones, blending elegance and emotion into a timeless scent.",
  },
  {
    id: 4,
    img: threeSets,
    name: "Pa Fragrance (3 Sets)",
    price: 199, // Price in cents (e.g., $199.00)
    infoBrand: "Pa Fragrance",
    infoText:
      "Presents three premium sets, each uniquely crafted to honor cherished memories with loved ones, blending elegance and sentiment into timeless scents.",
  },
];

export default productSets;
