import { getAllCityAgencies, toDirectoryCard } from "@/lib/agencies";
export const dynamic = "force-static";
export function GET() {
  return Response.json(getAllCityAgencies().map(toDirectoryCard));
}
