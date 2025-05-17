function Try() {
  return (
    <div className="px-5">
      <h1 className="grid gap-5 sm:gap-3 px-20 py-20 rounded-lg  sm:bg-accent mt-9 bg-accent border-0 hover:shadow-[#7f747b] hover:shadow-lg transition-all duration-500">
        {/* 1st */}
        <div className="text-xs">TRY IT NOW</div>

        {/* 2nd */}
        <div className="sm:flex justify-between sm:items-start flex flex-col gap-y-4">
          <div className="sm:text-4xl  font-extrabold sm:break-words sm:w-1/2 text-muted-foreground ">
            <span className="text-muted-foreground "> Ready</span> to level up
            your payment process?
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg p-2 bg-black text-xs text-accent hover:bg-accent hover:text-black hover:transition-all hover:duration-200 hover:border border-black">
              Get Started
            </button>
            <button className="rounded-lg p-2 text-xs border hover:bg-black hover:text-accent">
              Learn More
            </button>
          </div>
        </div>

        {/* 3rd */}
        <div className="text-xs text-muted-foreground">
          Supports small businesses with simple invoicing, powerful
          integrations, and cash flow management tools.
        </div>
      </h1>
    </div>
  )
}

export default Try
