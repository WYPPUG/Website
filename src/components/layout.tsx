import React, { ReactNode, useState } from "react"

import '../assets/main.css'

import logo from "../images/logo-wide.png"
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Upcoming Sessions', href: '/events/upcoming' },
  { name: 'Previous Sessions', href: '/events/previous' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Layout: React.FunctionComponent<{ children: ReactNode, title: string, hideTitle?: boolean }> = ({ children, title, hideTitle }) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <title>WYPPUG - {title}</title>
      </head>

      <header className="bg-gray-100">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">WYPPUG</span>
              <img className="h-20 w-auto" src={logo} alt="WYPPUG" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">

            {navigation.map((item) => (
              <a href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">WYPPUG</span>
                <img
                  className="h-8 w-auto"
                  src="{logo}"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">

                  {navigation.map((item) => (
                    <a
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}

                    </a>
                  ))}

                </div>

                {/* <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>


      <main>
        <div className="bg-white shadow">

          {title && !hideTitle && (
            <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h1>
            </div>
          )}

          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </main>

    </>
  )
}

export default Layout
