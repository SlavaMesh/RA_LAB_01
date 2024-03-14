import './App.css'
import { Wrapper } from './components/wrapper'
import { Header } from './components/header'
import { NAVITEMS, INTERESTS, EDUCATION} from './components/header/constants'
import { Title } from './components/title'
import { Description } from './components/description'
import { Button } from './components/button'
import { PhotoMain } from './components/photo-main/photo-main'
import { Interests } from './components/interests'
import { Education } from './components/education/education'
import {Footer} from './components/footer'
import { GetInTouch } from './components/getintouch'


function App() {

  return (
    <>
      <Wrapper >
        <Header items={NAVITEMS}/>
        
        <div className='flex-column h-[568px] md:h-[520px] xl:h-[765px] md:flex md:mb-0 sm:ml-[15px] md:ml-[39px] xl:ml-[85px] relative'>
          <div className='basis-1/2 flex-row xl:pt-[162px]'>
            <Title />
            <Description>{`Help you to create high-quality digital \nproducts that your clients will love and let \nyour business thrive`}</Description>
            <div className='sm:mt-[27px] sm:mb-0 md:mt-[44px]  xl:mt-[60px] xl:mb-[166px]'>
              <Button/>
            </div>
          </div>
          <PhotoMain />
        </div>

        <div className="sm:ml-[15px] md:ml-[39px] xl:ml-[85px] md:h-[1542px] xl:h-[1150px] mt-0">

          <div className='w-full h-[30px] md:h-[48px] md:mt-[20px] xl:mt-[102px] ml-0'>
              <h1 className='md:text-[32px]/[48px] xl:text-Montserrat-Bold xl:font-bold'>
                About me
              </h1>
          </div>

          <div className='h-[1364px]'>
            <div className='flex-column md:flex  md:mt-[80px]'>
              <div className="w-[290px] h-[290px] xl:w-[412px] xl:h-[412px]">
                <img src="../../../src/images/photo-rounded.svg" alt="photo" />
              </div>
              <div className='md:pl-[44px]  md:w-[380px] md:h-[238px] xl:pl-[158px] xl:h-[328px]'>
                <Description><span className='font-bold text-black'>Nick Richardson</span>{` - specialist in Frontend \ndevelopment. Clear code is my passion. \nSolving issues through negotiations`}</Description>
                <div className='hidden md:flex pt-[64px]'><Button /></div>
              </div>
            </div>
            <div className='flex-column xl:flex pt-[20px] md:pt-[64px] xl:pt-[80px]'>
              <Interests items={INTERESTS}/>
              <Education items={EDUCATION}/>
            </div>
            <div className='flex md:hidden mt-[20px] mb-[100px]'>
              <Button /> 
            </div> 
          </div>
        </div>
        <GetInTouch />
        <Footer />  
      </Wrapper>
    </>
  )
} 

export default App
