import { styles } from "../styles/styles";

export default function Header() {
  return (
    <div style={styles.masthead}>
      <div style={styles.cafeName}>MIRA</div>
      <div style={styles.tagline}>Coffee & Kitchen</div>
      <div style={styles.info}>Tuesday – Sunday · 8am – 6pm</div>
    </div>
  );
}