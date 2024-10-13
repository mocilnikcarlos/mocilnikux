import NavigationHome from "@/components/nav/navigationhome";
import style from "./page.module.scss";
import Lore from "./lore";
import Footer from "@/components/footer/footer";

const Home = () => {
  return (
    <section className={style.contenthome}>
      <div className={style.meandnav}>
        <Lore />
        <NavigationHome />
      </div>
      <Footer />
    </section>
  );
};

export default Home;
