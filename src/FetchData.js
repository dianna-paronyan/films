import {useState , useEffect} from 'react'

import './FetchData.css'

function FetchData(props){

    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("https://ghibliapi.herokuapp.com/films").then((res)=>{
          return res.json();
       }).then((data)=>  setData(data)) 
    },[]);

    return(
        <>
            
            {data.map((el)=>{
                return (
                    <div key={el.id}>
                        <ul className='list' >
                            <li className='items'>{el.title}</li>
                            <li className='items'>{el.release_date}</li>
                            <li className='items'>{el.director}</li>
                            <li className='items'>{el.description}</li>
                        </ul>
                    </div>
                )
                    
            })}
            
        </>
    )

    
}

export default FetchData;