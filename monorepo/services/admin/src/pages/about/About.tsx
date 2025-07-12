import styles from "./styles.module.scss";

interface IGift {
  name: string;
  desc: string;
}

const giftsList: IGift[] = [
  {
    name: "Шоколадный набор",
    desc: "Роскошный набор из бельгийского шоколада с разными вкусами",
  },
  {
    name: "Фруктовая корзина",
    desc: "Свежие экзотические фрукты, красиво упакованные в плетеную корзину",
  },
  {
    name: "Кофейный набор",
    desc: "Набор элитных сортов кофе со всего мира с дегустационными заметками",
  },
  {
    name: "Чайная коллекция",
    desc: "Коллекция ароматных чаев в красивых жестяных банках",
  },
  {
    name: "Гурмет сыры",
    desc: "Набор отборных сыров с орехами и медом",
  },
  {
    name: "Оливковое масло премиум",
    desc: "Бутылка оливкового масла холодного отжима из Италии",
  },
  {
    name: "Набор специй",
    desc: "Эксклюзивные специи со всего мира в деревянной подарочной коробке",
  },
  {
    name: "Медовый ассорти",
    desc: "Набор разных сортов натурального меда с дегустационными ложками",
  },
  {
    name: "Подарочный алкоголь",
    desc: "Элитный виски в подарочной упаковке с бокалами",
  },
  {
    name: "Веганский набор",
    desc: "Набор органических веганских продуктов и сладостей",
  },
];

const About = () => {
  return (
    <section>
      <h1 className={styles.header}>О нашем магазине</h1>
      <div>Мы продаём разные товары. Купите что нибудь у нас</div>
      <ul className={styles.giftList}>
        {giftsList.map((item: IGift) => {
          return (
            <li className={styles.giftItem}>
              <div className={styles.itemTitle}>{item.name}</div>
              <div className={styles.itemDesc}>{item.desc}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default About;
