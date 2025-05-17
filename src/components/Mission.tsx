import { MoveUpRight } from 'lucide-react'

function Mission() {
  const price = [
    { id: 1, percent: '64%', name: 'Revenue business' },
    { id: 2, percent: '180K', name: 'Annual revenue' },
    { id: 3, percent: '10+', name: 'Months of runaway' },
  ]
  const packages = [
    { id: 1, name: 'Plus', price: 2.99 },
    { id: 2, name: 'Premium', price: 6.99 },
  ]
  return (
    <div className="py-20">
      {/* first */}
      <h1 className="text-center flex flex-col gap-2 py-5">
        <p className="text-xs text-pink-900">OUR MISSION</p>
        <p className=" text-2xl">
          We've helped <br />
          innovative companies
        </p>
        <p className="text-xs text-muted-foreground">
          Hundreds of all sizes and across all industries <br />
          have made big improvements with us
        </p>
      </h1>

      {/* second */}
      <div>
        <div className="grid sm:grid-cols-3 gap-10 place-items-center px-20">
          {price.map((item) => (
            <div className="flex flex-col items-center gap-2">
              <p className="text-5xl font-bold">{item.percent}</p>
              <p className="text-xs text-muted-foreground">{item.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* third */}
      <div className="mt-10">
        <p className="text-xs text-muted-foreground text-center mb-4">
          CHOOSE PLAN
        </p>
        <div className="grid sm:flex sm:justify-center-safe items-center  gap-5 sm:gap-6  place-items-center  sm:w-full ">
          {packages.map((item) => (
            <div
              key={item.name}
              className={`w-full max-w-[350px] h-50 p-6 rounded-xl flex flex-col justify-between transition-shadow duration-300 ease-in-out sm:bg-gradient-to-r from-[#e8d5e1] to-[#fffcdb]${
                item.name === 'Premium'
                  ? 'sm:bg-accent hover:shadow-[0_0_20px_rgba(10,0,0,0.2)] bg-gradient-to-r from-amber-5  0 to-white'
                  : ' hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] bg-gradient-to-r from-amber-50 to-white'
              }`}
            >
              <div className="font-bold text-2xl">{item.name}</div>
              <div className="flex items-center justify-between text-sm">
                <p>£{item.price}/month</p>
                <MoveUpRight className="size-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mission
