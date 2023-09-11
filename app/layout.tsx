import Navbar from '@components/navbar';
import '@styles/globals.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Accessibility Tool",
  description: "Tool that assesses how accessible a website is",
}

const RootLayout = ({ children }: any) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="main">
          <div className="gradient" />
        </div>

        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;