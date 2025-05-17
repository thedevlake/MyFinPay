import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/ui/button'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const links = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Customers' },
    { id: 3, name: 'Pricings' },
    { id: 4, name: 'Learn' },
  ]
  return (
    <header className="sticky top-0 left-0 right-0 backdrop-blur-xl z-50 ">
      {/* Desktop Header */}
      <h1 className="hidden lg:grid grid-cols-[auto_auto_1fr] justify-center px-20 py-6 gap-20">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <img
            src="https://www.logggos.club/logos/the-qube-hotel-chiba.svg"
            alt="logo"
            className="size-4"
          />
          <h2 className="font-bold text-xl">Finpay</h2>
        </div>

        {/* Nav Links */}
        <div className="flex gap-8 items-center text-sm font-semibold">
          {links.map((item, index) => (
            <a
              href="#"
              key={index}
              className="hover:text-pink-900 transition-all duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-end items-center">
          <Button className="hover:bg-accent hover:text-black transition-all duration-200">
            Login
          </Button>
          <Button className="hover:bg-accent hover:text-black transition-all duration-200">
            Sign Up
          </Button>
        </div>
      </h1>

      {/* Mobile Header */}
      <div className="flex justify-between items-center px-6 py-4 lg:hidden">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.logggos.club/logos/the-qube-hotel-chiba.svg"
            alt="logo"
            className="size-4"
          />
          <h2 className="font-bold text-xl">Finpay</h2>
        </div>

        {/* Toggle Icon */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-[1000ms] ease-in-out px-6  ${
          isOpen
            ? ' py-10 opacity-100 flex flex-col gap-5 text-base'
            : 'max-h-0 opacity-0 py-0 transition-none'
        } bg-[#d9a7c7]/30 backdrop-blur-xs z-50 shadow-lg`}
      >
        {links.map((item, index) => (
          <div
            key={index}
            className="text-sm font-semibold hover:text-pink-900 transition-all duration-200"
          >
            {item.name}
          </div>
        ))}
        <div className="w-fit flex gap-3 pt-2 font-sans">
          <Button className="w-full hover:bg-accent hover:text-black transition-all duration-200">
            Login
          </Button>
          <Button className="w-full hover:bg-accent hover:text-black transition-all duration-200">
            Sign Up
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
