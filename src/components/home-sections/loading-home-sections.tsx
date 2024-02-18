import styles from "./home-sections.module.scss";
import LoadingCards from "../loading-cards/loading-cards";

export default function LoadingHomeSections() {
  const homeSections = [
    {
      title: "Cotizaciones por exchange",
      classNameTitle: styles["selected-exchange-title"],
      component: <LoadingCards select />,
    },
    {
      title: "Promedio de cotizaciones",
      classNameTitle: "",
      component: <LoadingCards />,
    },
    {
      title: "Mejores cotizaciones",
      classNameTitle: "",
      component: <LoadingCards />,
    },
  ];

  return (
    <>
      {homeSections.map((section) => (
        <section key={section.title}>
          <div className={styles["section-header"]}>
            <h2 className={section.classNameTitle}>{section.title}</h2>
          </div>
          {section.component}
        </section>
      ))}
    </>
  );
}
