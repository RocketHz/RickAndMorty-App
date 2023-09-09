import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentCard = ({ url }) => {

    const [ resident, getResident ] = useFetch(url)

    useEffect(() => {
      getResident()
    }, [])

    const status = resident?.status;
    const species = resident?.species;

    function getEmojiStatus() {
      if (status === 'Dead') {
        return '💀';
      } else if (status === 'Alive') {
        return '💚';
      } else if (status === 'unknown') {
        return '❓';
      } else {
        return '';
      }
    }
    function getEmojiSpecies() {
      if (species === 'Human') {
        return '👨‍👩‍👧‍👦';
      } else if (species === 'Alien') {
        return '👽';
      } else if (species === 'unknown') {
        return '❓';
      } else {
        return '';
      }
    }
    
  return (
    <article>
        <header className='content_resident_header'>
            <img className='content_resident_photo' src={resident?.image} alt="" />
            <div className='content_resident_status'>
                <span className='status'>{getEmojiStatus()} {resident?.status}</span>
            </div>
        </header>
        <section className='content_resident_section'>
            <h3 className='content_resident_name'>{resident?.name}</h3>
            <hr />
            <ul className='content__info__resident'>
                <li><span className='item'>specie: </span><span>{getEmojiSpecies()} {resident?.species}</span></li>
                <li><span className='item'>Origin: </span><span>{resident?.origin.name}</span></li>
                <li><span className='item'>Episodes: </span><span>{resident?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard