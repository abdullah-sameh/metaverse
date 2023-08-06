import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export default function LazyLoadImg({
  imgSrc,
  loadImg,
  stylingImg,
  stylingDiv,
}: {
  imgSrc: string
  loadImg: string
  stylingDiv?: string
  stylingImg?: string
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={twMerge(
        stylingDiv,
        'relative loading-img-div',
        isLoaded && 'before:content-none'
      )}
    >
      <img
        src={imgSrc}
        alt=''
        loading='lazy'
        className={twMerge(
          stylingImg,
          'hidden opacity-0 transition-opacity duration-500',
          isLoaded && 'flex opacity-100'
        )}
        onLoad={() => setIsLoaded(true)}
      />
      <img
        src={loadImg}
        alt=''
        className={twMerge(stylingImg, isLoaded && 'hidden')}
      />
    </div>
  )
}
