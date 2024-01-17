
import Link from 'next/link'
import { LucideMail } from 'lucide-react'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-gray-200 via-purple-350 to-violet-300'>
    <main className='flex min-h-screen h-fit flex-col items-center justify-center relative'>
      <Navbar />
      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
        <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl font-black md:text-8xl'>Ecrypte</h1>
            <h2 className='text-md md:text-2xl'>Start Secureing digital identity!</h2>
          </div>
          <p className='max-w-md text-lg lg:text-base text-black-700'>With the power of blockchain, we can efficiently leverage digital information and utilize smart contracts to securely manage user identities in a completely decentralized manner.</p>
          <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-blue-700 hover:text-white transition-colors'>Get Stated</button>
            <button className='w-48 h-12 text-sm sm:text-base rounded bg text-black hover:bg-blue-700 '>Contact</button>
          </div>
        </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
              Start Secureing Your Digital Identity 
            </h2>
            <p className='mt-4 text-lg text-black-600'>
            Securing your digital identity is an absolute must in today's online environment. You can trust Ecrypte, a secure identity management platform that has been designed to help you manage your digital identity with confidence. Powered by blockchain technology, Ecrypte offers a secure, decentralized, and trustless identity management platform that ensures your online presence is fully protected. With Ecrypte, you can be confident that your digital identity is in good hands.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-purple-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Use Store your digital information.
                we will procees information into our blockchain.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-purple-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Your are in control with your own data.
              </span>
              <span className='mt-2 text-zinc-700'>
                We will process digital information into our blockchain.
                And provide with smart contracts to verify your identity with a in blockchain
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-purple-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Now Start sharing your blockchain digital identity.
              </span>
              <span className='mt-2 text-zinc-700'>
                It is that simple. Try out Ecrypte today -
                it really takes less than a minute to secue your digital identity.
              </span>
            </div>
          </li>
        </ol>
        </div>
      </section>

      {/* Contact-page and Footer */}
    
      <footer className='flex items-center justify-center'>
        <div className='max-w-7xl w-full flex items-center justify-between p-4'>
          <div className='flex gap-4'>
            <h4 className=' font-bold text-gray-900'>Contact-Us</h4>
            <span className='flex gap-2'><LucideMail className='text-xl ml-2 black'/>gokulradhakrishnan249@gmail.com</span>
          </div>
        </div>
      </footer>
    </main>
    </div>
  )
}

function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='ml-4'> {/* Removed text color class from here */}
          <Link className='font-bold text-purple-900 text-lg' href='/'>Ecrypte</Link> {/* Applied purple color to the Link component */}
        </h6>
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
        </ul>
      </div>

    </div>
  )
}
  

