import Title from './Title'

export default function Header({
  header,
  text,
  center = false,
}: {
  header: string
  text: string
  center?: boolean
}) {
  return (
    <>
      <div className={`pl-4 ${center ? '' : 'w-fit'}`}>
        <Title text={header} />
      </div>
      <h3 className='md:text-[64px] text-[44px] font-black mb-12'>{text}</h3>
    </>
  )
}
