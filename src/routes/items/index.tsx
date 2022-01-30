import { FunctionalComponent, h } from "preact";
import items from "../../items.json";
import { useEffect } from "preact/hooks";
import { route } from "preact-router";
import Section from "../../components/section";
import { css } from "@linaria/core";

const Items: FunctionalComponent<{ id?: string }> = (props) => {
  const item = items.find((item) => item.id === props.id);

  useEffect(() => {
    if (item === undefined) {
      route("/404", true);
    }
  }, [item]);

  return item ? (
    <main>
      <Section title={item.name}>
        <img
          className={css`
            width: 100%;
            object-fit: cover;
          `}
          src={item.thumnail}
          alt={item.name}
        />
      </Section>
    </main>
  ) : null;
};

export default Items;
