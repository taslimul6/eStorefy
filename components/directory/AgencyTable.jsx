import Link from "next/link";
import CompareButton from "./CompareButton";
import { priceLabel } from "@/lib/format";
export default function AgencyTable({ agencies }) {
  return (
    <div className="table-wrap">
      <table>
        <caption className="sr-only">Matching agencies</caption>
        <thead>
          <tr>
            {["Name", "Location", "Services", "Published pricing", "Compare"].map(
              (name) => (
                <th key={name} scope="col">
                  {name}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {agencies.map((agency) => (
            <tr key={agency.recordKey}>
              <td>
                <Link href={agency.profilePath}>{agency.name}</Link>
              </td>
              <td>{agency.cityName}</td>
              <td>{agency.serviceGroups.join(", ")}</td>
              <td>{priceLabel(agency)}</td>
              <td>
                <CompareButton agency={agency} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
