export const dynamic = 'force-dynamic'

import { getCryptoCurrencies } from "@/utils/crypto";

export async function GET(request: Request) {
  const data = await getCryptoCurrencies();
  return Response.json(data);
}
