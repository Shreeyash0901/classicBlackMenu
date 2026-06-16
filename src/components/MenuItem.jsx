import { styles } from "../styles/styles";

export default function MenuItem({ item, first }) {
  return (
    <div style={first ? styles.itemFirst : styles.item}>
      <div style={styles.itemLeft}>
        <div style={styles.itemName}>
          {item.name}{" "}
          {item.sub && <em style={styles.itemSub}>{item.sub}</em>}
        </div>
        {item.note && <div style={styles.itemNote}>{item.note}</div>}
      </div>
      <div style={styles.itemPrice}>₹{item.price}</div>
    </div>
  );
}