'use client'

import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Menu, CircleX } from 'lucide-react';
import { Fragment } from "react";

export default function Header() {
    return (
      <>
        <Popover className="container mx-auto flex items-center border-b-2 px-6 py-2 h-24">
            <h1 className="font-bold">Fernanda Personal</h1>
            <div className="grow">
                <div className="hidden sm:flex items-center justify-center gap-2 md:gap-8">
                    <Link href="#Home">Home</Link>
                    <Link href="#sobre">Sobre Mim</Link>
                    <Link href="#planos">Planos</Link>
                    <Link href="#mentoria">Mentoria</Link>
                </div>
            </div>
            <div className="flex grow items-center justify-end sm:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
                <span className="sr-only">Open menu</span>
                <Menu className="h5 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Overlay className="sm:hidden fixed inset-0 bg-black opacity-30" />
            <Transition
              as={Fragment}
              enter="duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-1000 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <h1 className="font-bold">Fernanda Personal</h1>
                      <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"> 
                        <span className="sr-only">Close menu</span>
                        <CircleX className="h5 w-6" aria-hidden="true" />
                      </Popover.Button>
                      </div>
                    </div> 
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <Link 
                          href="#Home"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                            Home 
                        </Link>
                        <Link 
                          href="#sobre"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                            Sobre Mim 
                        </Link>
                        <Link 
                          href="#planos"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                            Planos 
                        </Link>
                        <Link 
                          href="#mentoria"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2">
                            Mentoria 
                        </Link>
                      </nav>
                    </div>
                    <div className="mt-6 flex flex-col items-center gap-2">
                      <Link 
                        href="#contato" 
                        className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-black md:text-xl w-full border-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                          Contate-Me
                      </Link>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
            
            <div className="hidden sm:block">
              <Link href="contato" className="font-bold">Contate-Me</Link>
            </div>
            
        </Popover>
      </>
    );
  }