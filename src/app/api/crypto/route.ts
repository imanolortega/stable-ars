import { getCryptoCurrencies } from "@/utils/crypto";

export async function GET(request: Request) {
  const data = await getCryptoCurrencies();
  console.log(data)
  return Response.json(data);
}