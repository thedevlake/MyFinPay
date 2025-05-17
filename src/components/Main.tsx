import { Activity, CircleSmall, CreditCard, Landmark } from 'lucide-react'

function Main() {
  return (
    <div className="py-12 grid sm:grid-cols-2 px-20  place-items-center sm:gap-none gap-30 sm:pt-20">
      {/* left */}
      <div className=" grid gap-y-8 ">
        <h1 className="sm:text-5xl text-4xl sm:leading-tight leading-normal">
          <span className="font-semibold">Get paid early </span>
          save automatically all your pay
        </h1>
        <div className="text-muted-foreground">
          Supports small businesses with simple invoicing,
          <br /> powerful integrations, and cash flow management tools
        </div>
        {/* input box */}
        <div className="text-xs border w-fit py-0 pl-3 pr-0 rounded-lg border-muted-foreground flex gap-10 hover:border-black transition-all duration-200">
          <input
            type="text"
            placeholder="Your bussiness email"
            className="border-0 outline-0"
          />
          <button className="border rounded-lg py-2 bg-[#bf97b1] px-5 text-muted hover:rounded-l-none hover:bg-accent transition-all duration-200 hover:text-black">
            Get Started
          </button>
        </div>

        {/* last part */}
        <div className="flex items-center gap-10 font-semibold text-xl">
          <p>Klarna</p>
          <p>coinbase</p>
          <p>instacart</p>
        </div>
      </div>

      {/* right */}
      <div className="place-self-center items-center relative">
        {/* big card */}
        <div className="text-xs bg-white w-fit  rounded-lg py-4 px-6 grid gap-2 hover:shadow-amber-100 hover:shadow-lg  transition-all duration-200">
          {/* first */}
          <div className="flex items-center gap-2">
            <img
              src="https://www.logggos.club/logos/the-qube-hotel-chiba.svg"
              alt=""
              className="size-4"
            />
            <div>
              <p className="font-semibold">Dipa inhouse</p>
              <p className="text-muted-foreground">thesportysofia@gmail.com</p>
            </div>
          </div>
          {/* second */}
          <div className="flex flex-col items-left border px-3 py-1 rounded-lg hover:border-pink-900">
            <p className="text-muted-foreground">Invoice</p>
            <p className="font-semibold text-base">$1,876,560</p>
            <p className="text-muted-foreground">April 2021,2024</p>
          </div>

          {/* third */}
          <div className="flex items-center justify-between border rounded-lg px-3 py-2 hover:border-pink-900">
            <p className="flex items-center gap-1">
              <CreditCard className="size-4" /> Credit Card
            </p>
            <CircleSmall className="size-4" />
          </div>

          {/* fourth */}
          <div className="flex items-center justify-between border rounded-lg px-3 py-2 hover:border-pink-900">
            <p className="flex items-center gap-1">
              <Landmark className="size-4" /> Bank Account
            </p>
            <CircleSmall className="size-4" />
          </div>

          {/* fifth */}
          <div className="bg-[#fffcdc] rounded-lg text-center px-4 py-2 hover:bg-[#d9a7c7]">
            <button>Pay</button>
          </div>
        </div>

        {/* small card */}
        <div className="pt-10  text-white w-fit grid grid-rows-6 absolute right-0 top-[-100px] left-40 text-nowrap ">
          {/* up */}
          <div className="text-xs w-fit bg-[#d9a7c7] flex flex-col gap-1 row-span-4 px-5 pt-2 rounded-t-lg  hover:shadow-amber-100 hover:shadow-lg  transition-all duration-200">
            <p>Credit Card</p>
            <p className="text-base">234 *** *** ***</p>
          </div>

          {/* down */}
          <div className="flex items-center justify-between bg-[#502d43] px-5 pb-2 rounded-b-lg ">
            <p className="font-bold">VISA</p>
            <Activity className="size-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
