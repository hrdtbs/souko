import { FunctionalComponent, h } from "preact";
import { Link } from "preact-router";
import { css } from "@linaria/core";

const Header: FunctionalComponent = () => {
  return (
    <header
      className={css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px 7vw;
      `}
    >
      <Link href="/">
        <h1
          className={css`
            font-weight: bold;
            text-align: center;
          `}
        >
          倉庫
          <span
            className={css`
              font-size: 12px;
            `}
          >
            {" "}
            by [NAME]
          </span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
