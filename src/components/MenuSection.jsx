import MenuItem from "./MenuItem";
import { styles } from "../styles/styles";

export default function MenuSection({ section, items }) {
  return (
    <div style={styles.section}>
      <div style={styles.sectionTitle}>{section}</div>
      {items.map((item, i) => (
        <MenuItem key={item.name} item={item} first={i === 0} />
      ))}
    </div>
  );
}