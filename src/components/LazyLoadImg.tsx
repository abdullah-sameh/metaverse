import { LazyLoadImage } from 'react-lazy-load-image-component'
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
  // const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={stylingDiv}>
      <LazyLoadImage
        alt={'no image found'}
        className={stylingImg}
        src={imgSrc}
        placeholderSrc={loadImg}
        visibleByDefault={false}
        wrapperClassName={twMerge(stylingImg, 'loading-img')}
      />
    </div>
  )
}
