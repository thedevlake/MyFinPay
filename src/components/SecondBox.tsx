import { Handshake, Landmark, MoveRight } from 'lucide-react'
import styled from 'styled-components'

function SecondBox() {
  const Loader = () => {
    return (
      <StyledWrapper>
        <div className="pyramid-loader">
          <div className="wrapper">
            <span className="side side1" />
            <span className="side side2" />
            <span className="side side3" />
            <span className="side side4" />
            <span className="shadow" />
          </div>
        </div>
      </StyledWrapper>
    )
  }
  const StyledWrapper = styled.div`
    .pyramid-loader {
      position: relative;
      width: 100px;
      height: 100px;
      display: block;
      transform-style: preserve-3d;
      transform: rotateX(-20deg);
    }

    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      animation: spin 4s linear infinite;
    }

    @keyframes spin {
      100% {
        transform: rotateY(360deg);
      }
    }

    .pyramid-loader .wrapper .side {
      width: 70px;
      height: 70px;
      /* you can choose any gradient or color you want */
      /* background: radial-gradient( #2F2585 10%, #F028FD 70%, #2BDEAC 120%); */
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transform-origin: center top;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .pyramid-loader .wrapper .side1 {
      transform: rotateZ(-30deg) rotateY(90deg);
      background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
    }

    .pyramid-loader .wrapper .side2 {
      transform: rotateZ(30deg) rotateY(90deg);
      background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
    }

    .pyramid-loader .wrapper .side3 {
      transform: rotateX(30deg);
      background: conic-gradient(#2f2585, #d8cce6, #f028fd, #2bdeac);
    }

    .pyramid-loader .wrapper .side4 {
      transform: rotateX(-30deg);
      background: conic-gradient(#2bdeac, #f028fd, #d8cce6, #2f2585);
    }

    .pyramid-loader .wrapper .shadow {
      width: 60px;
      height: 60px;
      background: #8b5ad5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transform: rotateX(90deg) translateZ(-40px);
      filter: blur(12px);
    }
  `
  return (
    <div className="mt-10">
      <h1 className="text-center flex flex-col gap-2 py-5">
        <p className="text-xs text-pink-900">WHY US</p>
        <p className="font-semibold">Why they prefer Finpay</p>
      </h1>
      {/* grid part */}
      <div className="grid sm:grid-cols-2 w-fit mx-auto gap-2 py-5 px-10 sm:px-0">
        {/* box 1 */}
        <div className="flex flex-col  gap-3  px-20 py-10  backdrop-blur-md rounded-lg border border-[#fffcdc]/30 shadow-lg hover:shadow-[#7b566d] hover:shadow-md transition-all duration-500">
          <p className="text-3xl text-pink-900 font-bold">3k+</p>
          <p>
            Businesses already running <br /> on Finpay
          </p>
        </div>

        {/* box 2 */}
        <div className="flex flex-col  gap-3  px-20 py-10 bg-[#fffcdc]/50 backdrop-blur-md rounded-lg border border-[#fffcdc]/30 shadow-lg  hover:shadow-[#7b566d] hover:shadow-md transition-all duration-500">
          <p className="">
            Instant withdraw your funds <br />
            at any time
          </p>
          <p className="flex items-center gap-2">
            <Landmark className="size-5" />
            <MoveRight />
            <Handshake className="size-5" />
          </p>
        </div>

        {/* box 3 */}
        <div className="flex items-center justify-between  gap-3  px-20 py-10 bg-gradient-to-r from-[#fffcdc] to-[#d9a7c7]/50 backdrop-blur-md rounded-lg shadow-lg sm:col-span-2  hover:shadow-[#7b566d] hover:shadow-md transition-all duration-500">
          <p className="font-semibold">
            No asset volatility <br />
            <span className="text-muted-foreground text-xs font-light hidden sm:block">
              Generate returns on your <br /> cash reserves without making any
              investments
            </span>
          </p>
          {/* bitcoin div */}
          <div>
            <Loader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondBox
