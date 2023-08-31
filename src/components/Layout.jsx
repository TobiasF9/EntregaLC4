import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Head } from './Head'

export function Layout ({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      {/* sacar el container mx-auto */}
      <main className='h-[calc(100vh-75px)]'>
        {children}
      </main>
      <Footer />
    </>
  )
}
