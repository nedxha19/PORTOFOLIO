'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { HeroType } from '@/app/types/hero'
import HeroSkeleton from '../../Skeleton/Hero'
import Link from 'next/link'
import { getDataPath, getImgPath } from '@/app/utils/paths'

const Hero = () => {
  const [heroimg, setHeroimg] = useState<HeroType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath('/data.json'))
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeroimg(data.HeroData)
      } catch (error) {
        console.error('Error fetching service', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'linear',
  }

  return (
    <section aria-label="Hero section - Nedit Xhaferi Portfolio Introduction">
      <div className='overflow-hidden'>
        <div className='container relative z-20 pt-24'>
          <div className='relative z-20 grid lg:grid-cols-12 grid-cols-1 items-center lg:justify-items-normal justify-items-center gap-20 pb-10'>
            <div className='lg:col-span-7 col-span-1'>
              <div className='flex flex-col lg:items-start items-center gap-12'>
                <h1 className='lg:text-start text-center max-w-lg'>
                  Nedit Xhaferi - Aspiring IT Professional Portfolio
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-300 max-w-lg lg:text-start text-center'>
                  Web developer and IT professional specializing in modern web development with SvelteKit, HTML, CSS, and Tailwind CSS.
                </p>
                <div className='flex item-center gap-5'>
                  <Link href={'/#project'}>
                    <button className='px-12 py-3 font-medium text-white border rounded-lg border-primary bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300' aria-label="Explore my projects">
                      Explore
                    </button>
                  </Link>
                  <Link href={'/#categories'}>
                    <button className='px-12 py-3 font-medium text-primary border rounded-lg border-primary bg-transparent hover:bg-primary hover:text-white hover:cursor-pointer duration-300' aria-label="View my categories">
                      Create
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {/* slider */}
            <div className='lg:col-span-5 col-span-1 lg:w-full sm:w-[80%] w-full'>
              <div>
                <Slider {...settings}>
                  {loading
                    ? Array.from({ length: 3 }).map((_, i) => (
                        <HeroSkeleton key={i} />
                      ))
                    : heroimg.map((item, i) => (
                        <div key={i}>
                          <Image
                            src={getImgPath(item.imgSrc)}
                            alt={`Portfolio project showcase ${i + 1}`}
                            width={600}
                            height={420}
                            className='rounded-lg w-full'
                          />
                        </div>
                      ))}
                </Slider>
              </div>
            </div>
          </div>
          {/* floting images */}
          <div className='absolute top-16 -left-10  dark:opacity-10' aria-hidden="true">
            <Image
              src={getImgPath('/images/banner/pattern1.svg')}
              alt=''
              width={141}
              height={141}
            />
          </div>
          <div className='absolute bottom-0 left-[53%] dark:opacity-10 z-10' aria-hidden="true">
            <Image
              src={getImgPath('/images/banner/pattern2.svg')}
              alt=''
              width={141}
              height={141}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
