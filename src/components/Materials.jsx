import { getData } from "@/requests";
import MaterialCard from "./MaterialCard";

export default async function Materials() {
  const data = await getData("/materials");
  return (
    <ul className="base-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-10">
      {data.map((info, index) => {
        return (
          <li key={index}>
            <MaterialCard info={info} />
          </li>
        );
      })}
    </ul>
  );
}
