import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface props {
  imgSrc: string
  loadImg: string
  stylingDiv?: string
  stylingImg?: string
}

export default function LazyLoadImg({
  imgSrc,
  loadImg,
  stylingImg,
  stylingDiv,
}: props) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={stylingDiv}>
      {isLoaded ? (
        <img
          src={imgSrc}
          alt={'no image found'}
          className={stylingImg}
          onLoad={() => setIsLoaded(true)}
        />
      ) : (
        <img
          src={loadImg}
          alt={'no image found'}
          className={twMerge(stylingImg, 'loading-img')}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}
