// import { Dialog, Button, Flex } from "tsykpp";
import { Dialog, Button, Flex } from "react-handy-modal"
import logo from './assets/TSKYPP.png'

// Emotion CSS
import { css } from "@emotion/react";
import { min, max } from "./mediaQueries";

// Emotion CSS
/** @jsxImportSource @emotion/react */
const homeCSS = css`
  // 1px〜479px
  ${min[0] + max[0]} {
    display: block;
    padding: 0;
  }
  // 480px〜767px
  ${min[1] + max[1]} {
    display: block;
    padding: 0;
  }
  // 768px〜989px
  ${min[2] + max[2]} {
    display: block;
    padding: 0;
  }
  // 990px〜1200px
  ${min[3] + max[3]} {
    display: block;
    padding: 0;
  }

  .w-full {
    // 1px〜479px
    ${min[0] + max[0]} {
      width: 100%;
    }
    // 480px〜767px
    ${min[1] + max[1]} {
      width: 100%;
    }
    // 768px〜989px
    ${min[2] + max[2]} {
      width: 100%;
    }
    // 990px〜1200px
    ${min[3] + max[3]} {
      width: 100%;
    }
  }

  .descArea {
    // 1px〜479px
    ${min[0] + max[0]} {
      margin-top: 4rem;
      padding: 0;
    }
    // 480px〜767px
    ${min[1] + max[1]} {
      padding: 0;
      margin-top: 6rem;
    }
    // 768px〜989px
    ${min[2] + max[2]} {
      padding: 0;
      margin-top: 6rem;
    }
    // 990px〜1200px
    ${min[3] + max[3]} {
      padding: 0;
      margin-top: 6rem;
    }
  }

  .content {
    font-size: 1.3rem;
    letter-spacing: 0.1rem;

    // 1px〜479px
    ${min[0] + max[0]} {
      font-size: 1.2rem;
    }
  }


  // COMPONENT BUTTONS
  .sampleBtns {
    padding: 20px;
    display: flex;
  }
`;

function Home() {
  return (
    <>
      <div
        css={homeCSS}
        className="relative z-20 flex flex-wrap h-full -mt-20 pt-32"
      >
        <div className="w-full md:w-1/2 h-full">
          <img src={logo} className="w-full h-full " />
        </div>

        <div className="descArea w-full md:w-1/2 p-10 flex justify-center items-center">
          <div className="">
            <h1 className="text-6xl mb-4 leading-none">Welcome</h1>
            <p className="mb-8 text-sm leading-relaxed content">
              Here’s what you need to know before getting started with the
              navbar: The best way to consume React is via the npm package which
              you can install with npm (or yarn if you prefer). If you plan on
              customizing the Bootstrap Sass files, or dont want to use a CDN
              for the stylesheet, it may be helpful to install vanilla Bootstrap
              as well.
            </p>

            {/* BUTTONS */}
            <div className="sampleBtns">
              {/* solid button */}
              <div style={{ margin: "10px" }}>
                <Dialog.Root>
                  <Dialog.Trigger>
                    {/* you can control Button (variant = soft or solid) */}
                    <Button
                      variant="solid"
                      textColor="rgb(251, 251, 251)"
                      bgColor="rgb(47, 46, 46)"
                    >
                      Open Modal
                    </Button>
                  </Dialog.Trigger>

                  {/* you can control (full-screen or slide-up/down) */}
                  <Dialog.Content
                    position={"slide-up"}
                  >
                    <Dialog.Title >
                      It is modal with solid button, with slide-up animation
                    </Dialog.Title>

                    <Dialog.Description  css={{  'margin-top: 60px' }}>
                      Explore `react-handy-modal` on Github
                    </Dialog.Description>

                    {/* you can control flex */}
                    <Flex gap="20px" mt="60px" justify="end">
                      <Dialog.Cancel>
                        <Button variant="solid">Close</Button>
                      </Dialog.Cancel>

                      <Button
                        variant="solid"
                        bgColor="#51ABB1"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/TechnoEmpire/react-easy-modal")
                        }
                      >
                        Let&apos;s go
                      </Button>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </div>








              {/* soft button */}
              <div style={{ margin: "10px" }}>
                <Dialog.Root>
                  <Dialog.Trigger>
                    {/* you can control Button (variant = soft or solid) */}
                    <Button
                      variant="soft"
                      textColor="rgb(251, 251, 251)"
                      bgColor="rgb(47, 46, 46)"
                    >
                      Open Modal
                    </Button>
                  </Dialog.Trigger>

                  {/* you can control (full-screen or slide-up/down) */}
                  <Dialog.Content position={"slide-down"}>
                    <Dialog.Title>
                      It is modal with soft button, with slide-down animation
                    </Dialog.Title>

                    <Dialog.Description>
                      Explore `react-easy-modal` on Github
                    </Dialog.Description>

                    {/* you can control flex */}
                    <Flex gap="20px" mt="60px" justify="end">
                      <Dialog.Cancel>
                        <Button variant="soft">Close</Button>
                      </Dialog.Cancel>

                      <Button
                        variant="soft"
                        bgColor="#51ABB1"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/TechnoEmpire/react-easy-modal")
                        }
                      >
                        Let&apos;s go
                      </Button>
                    </Flex>
                  </Dialog.Content>
                </Dialog.Root>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-10 w-1/2 h-full bg-gray-900 absolute top-0 left-0 -ml-20"></div>
      <div className="z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5"></div>
    </>
  );
}

export default Home;
