import axios from 'axios'
import { useEffect, useState, useTransition } from 'react'
import Loader from '../components/UI/Loader';
import CountryCard from '../components/UI/CountryCard';

const Country = () => {
  const [countryData, setcountryData] = useState([]);
  const [isPending, startTransition] = useTransition()



const APIDATA = async () => {
  try {
    const response = await axios.get(
      "https://restcountries.com/v3.1/all?fields=name,flags,population,capital,currencies,region"
    );

    startTransition(() => {
      setcountryData(response.data);
    });

  } catch (err) {
    console.log(err);
  }
};
  useEffect(() => {
    APIDATA()
  },[])

  if(isPending) return <Loader/>

  console.log(countryData)
  return (
    <section className='country-section'>
      <ul className='grid grid-four-cols'>{
        countryData.map((curcountry, index) => {
          return <CountryCard key={index} country = {curcountry}  />
        })}

      </ul>
    </section>
  )
}

export default Country