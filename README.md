<h1>Modal (Pop-UP)</h1>

<h2>
  <a href="vercel">Full Documentation</a>
</h2>

### Installing the latest version

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

- `npm install ` or `yarn add `.

```
  $ npm install
  $ yarn add
```

## Packages

| TSKYPP | Version |

# Example

Here is a simple example of react-modal being used in an app with some custom styles and focusable input elements within the modal content:

```
import React, { useState } from 'react';
import { Button, Modal, ModalContent, ModalHeader, ModalBody } from '../../components/TenTen'; // Adjust the relative import path

import styles from './TestPage.module.scss';

const TestPage = () => {
  const [isopen, setisopen] = useState(false);

  const openModal = () => {
    setisopen(true);
  };

  const closeModal = () => {
    setisopen(false);
  };

  return (
    <div>
      {/* Import button here */}
      <Button onClick={openModal} className={styles.btn}>
        {/* Custom child elements */}
        <span className={styles.btnOne}>BYe</span>
        <span className={styles.btnTwo}>HI</span>
      </Button>

      {/* Import button here */}
      <Modal isopen={isopen} closeModal={closeModal}>

      <ModalContent position="slide-up">

        {/* <ModalContent className={styles.content} > */}
          <ModalHeader onClick={closeModal} className={styles.Hea}>
            {/* <h1>Weolcome To Anime World</h1> */}
            <h1>Login </h1>
          </ModalHeader>
          <ModalBody>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quo?</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default TestPage;


```

##
