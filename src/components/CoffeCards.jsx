import Card from './Card'
import { useEffect, useState } from 'react'
import Star from '../assets/Star.svg'
import GoldenStar from '../assets/Star_fill.svg'

    const CoffeCards = () => {
        const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
             setData(await response.json());
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

  return (
    <div className="flex flex-wrap flex-col md:flex-row gap-8 mt-11 items-center md:justify-center">
        
        {data.map((item) => (
            <Card key={item.id} name={item.name} price={item.price} rating={item.rating} votes={item.votes} image={item.image} ava={item.available ? '' : 'Sold out '} star = {item.rating > 0 ? GoldenStar : Star}/>
        ))}
       
    </div>
  )
}

export default CoffeCards