'use client'
import React from 'react'
import Link from "next/link";

import { useState } from 'react'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="bg-black/30 backdrop-blur-2xl fixed z-50 top-0 w-full text-white  shadow-2xl">
          <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
            <div className="text-2xl font-bold">Pindi</div>
            <div className="hidden md:flex space-x-4">
              <Link href="#" className="text-white-800 hover:text-gray-600">Accueil</Link>
              <Link href="#" className="text-white-800 hover:text-gray-600">À propos</Link>
              <Link href="#" className="text-white-800 hover:text-gray-600">Musique</Link>
              <Link href="#" className="text-white-800 hover:text-gray-600">Événements</Link>
              <Link href="/contrat" className="text-white-800 hover:text-gray-600">Contrat</Link>
            </div>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </nav>
          {menuOpen && (
            <div className="md:hidden">
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Accueil</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">À propos</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Musique</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Événements</a>
              <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</a>
            </div>
          )}
        </header>
  )
}
