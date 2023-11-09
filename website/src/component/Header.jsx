import React from "react";

// Emotion CSS
import { css } from "@emotion/react";
import { min, max } from "../mediaQueries";

// Emotion CSS
/** @jsxImportSource @emotion/react */
const headerCSS = css`

  // 1px〜479px
  ${min[0] + max[0]} {
    padding: 0 1rem;
  }
  // 480px〜767px
  ${min[1] + max[1]} {
    padding: 0 1rem;
  }
  // 768px〜989px
  ${min[2] + max[2]} {
    padding: 0 4rem;
  }
  // 990px〜1200px
  ${min[3] + max[3]} {
    padding: 0 4rem;
  }

  ul {
    margin-top: 1rem !important;
  }

  a {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    // 1px〜479px
    ${min[0] + max[0]} {
      font-size: 1.0rem;
      letter-spacing: 0;
    }
  }

  button {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;

    // 1px〜479px
    ${min[0] + max[0]} {
      font-size: 1.0rem;
      letter-spacing: 0;
    }
  }
`;

export const Header = () => {
  return (
    <>
      <div
        css={headerCSS}
        className="relative z-20 w-full flex justify-between items-center h-20 z-30 "
      >
        <a
          href="https://github.com/TechnoEmpire/react-easy-modal"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:text-2xl text-gray-100 leading-tight md:text-xl sm:text-sm"
        >
          React-Easy-Modal
        </a>

        <ul className="flex text-lg lowercase italic">
          <a
            href="https://github.com/TechnoEmpire/react-easy-modal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="ml-4">Feature</li>
          </a>
          <a
            href="https://github.com/TechnoEmpire/react-easy-modal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="ml-4">Docs</li>
          </a>
          <a
            href="https://github.com/TechnoEmpire/react-easy-modal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="ml-4">
              <button className="block mb-4 px-3 py-2 text-xs font-bold rounded no-underline hover:shadow bg-purple-600 text-white">
                GitHub
              </button>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
};
