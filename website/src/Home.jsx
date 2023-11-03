import { Dialog, Button, Flex } from "tsykpp";
import logo from '../public/TSKYPP.png';

function Home() {
  return (
    <>
      <div className='relative z-20 flex flex-wrap h-full -mt-20 pt-32'>
        <div className='w-full md:w-1/2 h-full'>
          <img src={logo} className='w-full h-full object-cover' />
        </div>

        <div className='w-full md:w-1/2 p-10 flex justify-center items-center'>
          <div className='max-w-xs'>
            <h1 className='text-6xl mb-4 leading-none'>Welcome</h1>
            <p className='mb-8 text-sm leading-relaxed'>
              Here’s what you need to know before getting started with the
              navbar: The best way to consume React is via the npm package which
              you can install with npm (or yarn if you prefer). If you plan on
              customizing the Bootstrap Sass files, or dont want to use a CDN
              for the stylesheet, it may be helpful to install vanilla Bootstrap
              as well.
            </p>
            <div style={{ padding: "20px" }}>
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
                <Dialog.Content position={"slide-up"}>
                  <Dialog.Title>Explore `react-easy-modal` on Github</Dialog.Title>

                  <Dialog.Description>
                    {/* (You can add any content here if needed) */}
                  </Dialog.Description>

                  {/* you can control flex */}
                  <Flex gap="20px" mt="60px" justify="end">
                    <Dialog.Cancel>
                      <Button variant="soft">Close</Button>
                    </Dialog.Cancel>

                    <Button 
                      variant="solid" 
                      bgColor="#51ABB1"
                      onClick={() => window.location.href="https://github.com/TechnoEmpire/react-easy-modal"}
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

      <div className='z-10 w-1/2 h-full bg-gray-900 absolute top-0 left-0 -ml-20'></div>
      <div className='z-10 w-1 h-64 bg-gray-100 absolute bottom-0 left-0 ml-5'></div>
    </>
  );
}

export default Home;
