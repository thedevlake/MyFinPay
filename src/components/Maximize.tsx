function Maximize() {
  const maxo = [
    {
      num: 1,
      type: 'Open your account',
      description:
        'Sign up to Finpay and set up your account from the dashboard',
    },
    {
      num: 2,
      type: 'Connect your bank',
      description:
        'Link your bank account to Finpay and start using it for payments',
    },
    {
      num: 3,
      type: 'Get paid',
      description:
        'Receive payments from customers and manage your finances with ease',
    },
  ]
  return (
    <div className="px-5">
      <div className=" grid sm:py-16 sm:px-20   mt-12 py-10 gap-y-4 bg-accent border-0 outline-0 rounded-lg">
        <div className="text-xs text-pink-900 font-semibold sm:justify-center text-center">
          STEP
        </div>
        <h1 className="sm:text-2xl font-semibold sm:justify-center text-center">
          Maximize your returns with a <br /> Reserve account that generates.
        </h1>
        <div className="grid sm:grid-cols-3 sm:gap-x-3 gap-y-4 sm:place-items-stretch place-items-center ">
          {maxo.map((item, i) => (
            <div
              key={i}
              className="grid gap-1 py-5 px-10 bg-accent rounded-lg max-w-xl border-6 sm:border-0 hover-shadow-[#7b566d] hover:shadow-lg transition-all duration-500"
            >
              <p className="text-5xl font-bold ">{item.num}</p>

              <p className="text-sm font-semibold">{item.type}</p>
              <p className="text-xs break-words w-40">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Maximize
