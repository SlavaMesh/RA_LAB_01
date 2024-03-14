import { NAVITEMS } from './components/header/constants';

import { Wrapper } from './components/wrapper';
import { Header } from './components/header';
import {MainPage} from './components/MainPage';
import { About } from './components/About'
import {Footer} from './components/footer'
import { GetInTouch } from './components/getintouch'



function App() {
  
  return (
    <>
      <Wrapper >
        <Header items={NAVITEMS}/>
        <MainPage />
        <About />
        <GetInTouch />
        <Footer />  
      </Wrapper>
    </>
  )
}; 

export default App
