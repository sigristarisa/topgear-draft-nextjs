import type { NextApiRequest, NextApiResponse } from "next";
import { sendDataResponse, sendMessageResponse } from "../../helpers/responses";
import Carlistings from "../../helpers/models/carlisting";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const allCarlistings = await Carlistings.findAllCarlisting();
    console.log("allcarlistings", allCarlistings);
    if (!allCarlistings) {
      return sendDataResponse(res, 404, { id: "cars not found" });
    }
    return sendDataResponse(res, 200, allCarlistings);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to send carlisting");
  }
};

export default handler;
