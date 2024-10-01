import banner from '../assets/bg-cafe.jpg'

const Banner = () => {
  return (
    <div className="w-full h-[300px] absolute top-0 left-0 z-0" style={{backgroundImage : `url(${banner})`}}>
        
    </div>
  )
}

export default Banner