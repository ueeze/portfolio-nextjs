import Image from 'next/image'
import bg from '../../../../public/background/projects-background.png'
import ProjectList from '@/components/projects'
import { projectsData } from '../../data'

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80
      "
      />
      <ProjectList projects={projectsData} />
    </>
  )
}
