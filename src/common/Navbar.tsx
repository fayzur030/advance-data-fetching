'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

const Navbar = () => {
  const pathname = usePathname()
  return (
    <header>
      <div className='navbar bg-base-100 shadow-sm'>
        <div className='mx-auto w-full max-w-7xl'>
          <div className='navbar'>
            {/* Left - Logo + Mobile Menu */}
            <div className='navbar-start'>
              <div className='dropdown'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost lg:hidden'
                >
                  <svg
                    aria-label='Menu'
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </div>

                {/* Mobile Menu */}
                <ul
                  tabIndex={-1}
                  className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
                >
                  {navLinks.map((link) => {
                    const active = pathname === link.path
                    return (
                      <li
                        key={link.path}
                        className={`${active ? 'text-green-500' : ''}`}
                      >
                        <Link href={link.path}>{link.name}</Link>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Logo */}
              <Link href='/' className='btn btn-ghost text-xl'>
                DevStack
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className='navbar-center hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>
                {navLinks.map((link) => {
                  const active = pathname === link.path
                  return (
                    <li
                      key={link.path}
                      className={`${active ? 'text-green-500' : ''}`}
                    >
                      <Link href={link.path}>{link.name}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Right Side */}
            <div className='navbar-end'>
              <Link href='/login' className='btn'>
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
