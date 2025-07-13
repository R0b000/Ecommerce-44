import { Outlet } from 'react-router';
import SignInFooter from '../../../components/SignInFooter';
import GoogleLogo from '../../assets/images/Google__G__logo.svg.png'

const AuthLayout = () => {
  return (
    <>
      <div className={`flex flex-col bg-[#1E1F20] h-screen w-full items-center justify-center text-white`}>
          <div style={{backgroundColor: '#0E0E0E'}} className="flex flex-col h-[402px] w-[1120.8px] rounded-4xl items-center justify-center p-10">
              <div className='flex w-full h-full p-1'>
                  <img className='flex w-12 h-12' src={GoogleLogo} alt="" />
              </div>
              <div className='flex flex-col w-full h-full justify-between'>
                <Outlet/>
              </div>
          </div>
          <SignInFooter/>
      </div>
    </>
  )
}

export default AuthLayout

/*
  Here there are there method for binding the css

  First method:
    - const textStyle = {textAlign: "center"} as React.CSSPropterties
    - return (
        <h1 style={textStyle}>{pageTitle}</h>
      )

  Second method:
    - const textStyle: React.CSSProperties = {textAlign: "center"}
    - return (
        <h1 style={textStyle}>{pageTitle}</h>
      )

  Third method:
    - const textStyle = {textAlign: "center"}
    - return (
        <h1 style={textStyle as React.CSSProperties}>{pageTitle}</h>
      )
*/



