import CoffeButtons from './Coffebuttons'

const CollectionInfo = () => {
  return (
    <div className="flex flex-col items-center gap-5">
        <h1 className="dm-sans text-White text-4xl font-bold">Our Collection</h1>
        <p className="dm-sans text-Grey text-center text-lg md:w-[60%]">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>

        <CoffeButtons/>
    </div>
  )
}

export default CollectionInfo