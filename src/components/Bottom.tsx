import { Landmark, Rotate3d, ShieldBan } from 'lucide-react'

function Bottom() {
  const bankDetails = [
    {
      id: 1,
      icon: <Rotate3d />,
      name: 'Free transfers',
      description:
        'Create a financial experience and automate repeat purchase by scheduling recuring payments.',
    },
    {
      id: 2,
      icon: <Landmark />,
      name: 'Multiple account',
      description:
        'Create a financial experience and automate repeat purchase by scheduling recuring payments.',
    },
    {
      id: 3,
      icon: <ShieldBan />,
      name: 'Unmatched security',
      description:
        'Create a financial experience and automate repeat purchase by scheduling recuring payments.',
    },
  ]
  return (
    <div className="px-5">
      <div className="bg-white rounded-lg sm:mx-20 sm:px-15  w-fit mx-auto px-30 py-5 shadow-lg hover:shadow-amber-100 hover:shadow-2xs">
        {/* first */}
        <div className="sm:flex items-center justify-between  py-10 grid gap-5 sm:pr-20">
          <div className="leading-loose">
            <h3 className="text-xs text-pink-900">FUTURE PAYMENT</h3>
            <h1 className="text-2xl ">
              Experience that grows <br />
              with your scale.
            </h1>
          </div>
          <div className="text-muted-foreground text-xs">
            Design a financial operating systemthat works for <br /> your
            businessand streamlined cashflow <br /> management.
          </div>
        </div>

        {/* second */}
        <div className="grid sm:grid-cols-3 gap-15  py-10 place-items-center ">
          {/* 1 */}
          {bankDetails.map((item) => (
            <div className="flex flex-col items-left gap-2">
              <p className="size-4">{item.icon}</p>
              <p className="font-semibold text-sm pt-2">{item.name}</p>
              <p className="text-muted-foreground text-xs sm:break-words ">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Bottom
