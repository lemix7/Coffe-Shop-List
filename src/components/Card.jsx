

const Card = ({name,price,rating,votes,image,ava,star}) => {
  return (
    <div className="flex flex-col gap-4 w-[300px] cursor-pointer ">

        <div className=" h-[200px] w-full rounded-lg" style={{backgroundImage: `url(${image} )`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>

        <div className="flex  justify-between ">
            <h2 className="text-xl text-white capitalize">{name}</h2>
            <span className="bg-Torquese px-2 text-sm font-semibold py-1 rounded-md">{price}</span>
        </div>
        
        <div className='flex justify-between'>
            <div className="flex gap-2  items-center ">
                <img src={star} alt="" />
                <p className="text-White text-sm">{rating}</p>
                <span className="text-Grey text-sm">({votes} votes)</span>
            </div>
            <span className='text-red-700'>{ava}</span>
        </div>

    </div>
  )
}

export default Card