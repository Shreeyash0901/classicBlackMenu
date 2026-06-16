import { MENU } from "./data/menuData";
import Header from "./components/Header";
import MenuSection from "./components/MenuSection";
import { styles } from "./styles/styles";

function App() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <div style={styles.page}>
        <div style={styles.inner}>
          <Header />
          {MENU.map(({ section, items }) => (
            <MenuSection key={section} section={section} items={items} />
          ))}
          <div style={styles.footer}>
            <p>Prices in ₹ · inclusive of all taxes</p>
            <p>Please inform us of any allergies</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;