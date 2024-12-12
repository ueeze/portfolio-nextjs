import Image from 'next/image'
import bg from '../../../../public/background/about-background.png'
import AboutDetails from '@/components/about'

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80
      "
      />
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[10%] left-1/2 -translate-y-1/2 -translate-x-1/2 space-y-3">
          <h1 className="font-bold text-6xl xs:text-7xl snLtext-8xl lg:text-9xl text-accent">
            About Me
          </h1>
          <p className="font-light text-foreground text-lg text-gray-400">
            Scroll through the page
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  )
}
