import React, { useEffect, useState } from 'react'
import "./Recommended.css";
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import { Link,  } from 'react-router-dom';

const Recommended = ({categoryId}) => {
   // const {categoryId} = useParams();

    const [apiData,setApiData] = useState([]);

    const fetchData = async () => {
        const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2C%20statistics&chart=mostPopular&maxResults=60&regionCode=US&videoCategoryId=${categoryId?categoryId:0}&key=${API_KEY}`
        await fetch(relatedVideo_url).then(res=>res.json()).then(data=> { 
            console.log(data);
            setApiData(data.items);
        })
        .catch(error=>console.error(error));
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='recommended'>
        {console.log(apiData)}
        {apiData && apiData.map((item, index)=>{
            return (
        <Link to={`/video/${item?.snippet?.categoryId}/${item?.id}`} key={index} className="side-video-list">
            <img src={item?.snippet?.thumbnails?.medium.url} alt="" />
            <div className="vid-info">
                <h4>{item?.snippet?.title}</h4>
                <p>{item?.snippet?.channelTitle}</p>
                <p>{value_converter(item?.statistics?.viewCount)} Views</p>
            </div> 
        </Link>
            )
        })}
            
</div>
  )
}

export default Recommended