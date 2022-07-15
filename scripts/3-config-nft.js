import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xeb251F0a5AfE5c807E667F304C08f25bCf4FA3F5");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "bunny",
        description: "This NFT will give you access to Solver Clusters!",
        image: readFileSync("scripts/assets/bunny.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();