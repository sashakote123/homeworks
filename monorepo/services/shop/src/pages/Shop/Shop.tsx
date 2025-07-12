import React from "react";
import styles from "./styles.module.scss";

interface IGift {
  name: string;
  desc: string;
  price: number;
  inStock: boolean;
}

const giftsList: IGift[] = [
  {
    name: "Шоколадный набор",
    desc: "Роскошный набор из бельгийского шоколада с разными вкусами",
    price: 2499,
    inStock: true,
  },
  {
    name: "Фруктовая корзина",
    desc: "Свежие экзотические фрукты, красиво упакованные в плетеную корзину",
    price: 3500,
    inStock: true,
  },
  {
    name: "Кофейный набор",
    desc: "Набор элитных сортов кофе со всего мира с дегустационными заметками",
    price: 4200,
    inStock: false,
  },
  {
    name: "Чайная коллекция",
    desc: "Коллекция ароматных чаев в красивых жестяных банках",
    price: 1800,
    inStock: true,
  },
  {
    name: "Гурмет сыры",
    desc: "Набор отборных сыров с орехами и медом",
    price: 2900,
    inStock: true,
  },
  {
    name: "Оливковое масло премиум",
    desc: "Бутылка оливкового масла холодного отжима из Италии",
    price: 3700,
    inStock: false,
  },
  {
    name: "Набор специй",
    desc: "Эксклюзивные специи со всего мира в деревянной подарочной коробке",
    price: 2200,
    inStock: true,
  },
  {
    name: "Медовый ассорти",
    desc: "Набор разных сортов натурального меда с дегустационными ложками",
    price: 1950,
    inStock: true,
  },
  {
    name: "Подарочный алкоголь",
    desc: "Элитный виски в подарочной упаковке с бокалами",
    price: 6500,
    inStock: true,
  },
  {
    name: "Веганский набор",
    desc: "Набор органических веганских продуктов и сладостей",
    price: 3100,
    inStock: false,
  },
];

const Shop = () => {
  return (
    <section className={styles.shop}>
      <h1 className={styles.shopTitle}>Наш магазин</h1>
      <div className={styles.shopSubtitle}>
        Можете ознакомиться с нашими товарами
      </div>
      <ul className={styles.giftsList}>
        {giftsList.map((item: IGift) => {
          return (
            <li className={styles.listItem}>
              <div className={styles.itemTop}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.itemDesc}>{item.desc}</div>
              </div>

              <div className={styles.itemBottom}>
                {item.inStock ? (
                  <div className={styles.inStock}>В наличии</div>
                ) : (
                  <div className={styles.inStock}>Нет в наличии</div>
                )}
                <div className={styles.itemPrice}>{item.price} руб</div>
                <button className={styles.button}>Добавить в корзину</button>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Shop;
