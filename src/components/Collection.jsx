import CollectionInfo from './CollectionInfo'
import CoffeCards from './CoffeCards'

const Collection = () => {
  return (
    <div className=" w-[80%] h-full z-10  bg-darkGrey py-[80px] px-11 flex flex-col  items-center rounded-lg  ">
        <CollectionInfo/>
        <CoffeCards/>
    </div>
  )
}

export default Collection