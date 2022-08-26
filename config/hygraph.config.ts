import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/cl6ag284ie73901t7en3denw4/master",
  {
    headers: {
      Authorization: process.env.NEXT_APP_HYGRAPH_TOKEN ?? "",
    },
  }
);
