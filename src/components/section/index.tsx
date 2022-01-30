import { css } from "@linaria/core";
import { h, FunctionalComponent } from "preact";

const Section: FunctionalComponent<{
  title: string;
  subTitle?: string;
}> = ({ title, subTitle, children }) => {
  return (
    <section
      className={css`
        padding: 0px 7vw 180px;
      `}
    >
      <header
        className={css`
          text-align: center;
          margin-bottom: 56px;
        `}
      >
        <h2
          className={css`
            font-size: 72px;
            font-weight: 700;
            line-height: 1.2;
          `}
        >
          {title}
        </h2>
        {subTitle ? (
          <p
            className={css`
              display: block;
              font-size: 14px;
              letter-spacing: 7px;
            `}
          >
            {subTitle}
          </p>
        ) : null}
      </header>
      {children}
    </section>
  );
};

export default Section;
