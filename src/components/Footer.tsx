import { Facebook, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  const footerLinks = [
    {
      title: 'Solutions',
      links: ['Small Business', 'Freelancers', 'Customers', 'Taxes'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Career', 'Contact'],
    },
    {
      title: 'Learn',
      links: ['Blog', 'Ebooks', 'Guides', 'Templates'],
    },
  ]
  const socialIcons = [
    { alt: 'Twitter', src: <Instagram />, link: '#' },
    { alt: 'LinkedIn', src: <Linkedin />, link: '#' },
    { alt: 'Facebook', src: <Facebook />, link: '#' },
  ]
  return (
    <footer className=" py-10 px-10 sm:px-0">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm text-gray-600">
        {/* Logo */}
        <div className="col-span-1 flex sm:items-center">
          <img
            src="https://www.logggos.club/logos/the-qube-hotel-chiba.svg"
            alt="Finpay"
            className="h-6 mr-2"
          />
          <span className="font-semibold text-gray-900">Finpay</span>
        </div>

        {/* Dynamic Columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="col-span-1">
            <h4 className="font-semibold text-gray-900 mb-2 ">
              {section.title}
            </h4>
            <ul className="space-y-1">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline hover:text-pink-700">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Socials */}
        <div className="col-span-1">
          <h4 className="font-semibold text-gray-900 mb-2 ">Follow us on</h4>
          <div className="flex space-x-6">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.link}
                className="size-2 text-pink-950 hover:text-pink-700"
              >
                {icon.src}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-400">
        ©Finpay 2024. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
