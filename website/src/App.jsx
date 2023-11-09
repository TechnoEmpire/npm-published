import React from 'react';
import Home from './Home';
import { Header } from './component/Header';

  // Emotion CSS
  import { css } from "@emotion/react";
  import { min, max } from "./mediaQueries";
  
  // Emotion CSS
  /** @jsxImportSource @emotion/react */
  const appCSS = css`
        // 1px〜479px
    ${min[0] + max[0]}{
      padding: 3rem 1rem;
    }
    // 480px〜767px
    ${min[1] + max[1]}{
      padding: 4rem 2rem;
    }
    // 768px〜989px
    ${min[2] + max[2]}{
      padding: 4rem 3rem;
    }
    // 990px〜1200px
    ${min[3] + max[3]}{
      padding: 4rem 4rem;
    }
  `;

function App() {
  return (
    <>
      <div css={appCSS} className='w-full h-screen relative p-16'>
        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
