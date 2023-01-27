import { ItemStat } from "../../interfaces/pokemon";

interface Props {
  item: ItemStat;
}

export default function Stat({ item }: Props) {
  return (
    <li className="pokemon-stat">
      <span className="stat-name">
        <b>{item.stat.name}: </b>
      </span>
      <span>{item.base_stat}</span>
    </li>
  );
}
