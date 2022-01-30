import { css } from "@linaria/core";
import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";
import Section from "../../components/section";
import items from "../../items.json";

const Home: FunctionalComponent = () => {
  return (
    <main>
      <Section title="All Items" subTitle="アイテム一覧">
        <div
          className={css`
            display: grid;
            margin: auto;
            gap: 40px;
            max-width: 1200px;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          `}
        >
          {items.map((item) => {
            return (
              <Link href={`/items/${item.id}`} key={item.name}>
                <img
                  className={css`
                    aspect-ratio: 1;
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    margin-bottom: 16px;
                  `}
                  width={300}
                  height={300}
                  loading="lazy"
                  src={item.thumnail}
                  alt={item.name}
                />
                <div
                  className={css`
                    letter-spacing: 3px;
                    font-weight: 600;
                  `}
                >
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Home;
