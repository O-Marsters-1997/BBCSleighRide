import mongoose from "mongoose";
import logger from "../logger";

export const seedData = async (schema: any, items: any) => {
  try {
    await schema.deleteMany({});
    let done: number = 0;
    for (let i = 0; i < items.length; i++) {
      items[i].save().then(async () => {
        done++;
        if (done == items.length) {
          await exit().catch((error) => logger.info(error));
        }
      });
    }
  } catch (error) {
    logger.info(error);
  }
};

async function exit(): Promise<void> {
  try {
    await mongoose.disconnect();
    logger.info("disconnecting");
  } catch (error) {
    logger.info(error);
  }
}
