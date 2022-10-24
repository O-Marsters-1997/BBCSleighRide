import mongoose from "mongoose";
import logger from "../logger";

export const seedData = async (schema: any, items: any) => {
  try {
    await schema.deleteMany({});
    let done: number = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].save().then(() => {
        done++;
        if (done == items.length) {
          exit();
        }
      });
    }
  } catch (error) {
    console.log(error);
  }
};

function exit(): void {
  mongoose.disconnect();
  logger.info("disconnecting");
}
