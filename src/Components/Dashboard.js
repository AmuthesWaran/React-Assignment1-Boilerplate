import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Cards from './Cards';


const Dashboard = () => {
    
    const[trending,setTrending] =  useState([]);
    const[readlaterdb,setReadlaterdb] =useState([]);

       // axios.get(`https://newsapi.org/v2/top-headlines?country=in&apikey=dbaefe94344341b6b68c526c4070fe6f`)
        // https://newsapi.org/v2/everything?q=bitcoin&apiKey=dbaefe94344341b6b68c526c4070fe6f


    useEffect(()=>{
        axios.get(`https://newsapi.org/v2/top-headlines?category=technology&language=en&country=in&apikey=dbaefe94344341b6b68c526c4070fe6f&page=1`)
 
        .then((res)=>{
            setTrending(res.data.articles);
            // console.log(res.data.articles);
        })
        },[]);

    const readLater = (newCard) => {
            axios
              .post('http://localhost:3000/readLater', newCard, {
                headers: { 'Content-Type': 'application/json' },
              })
              .then(function (response) {
                if (response.status === 201) {
                  setReadlaterdb([...readlaterdb, response.data]);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          };
  
    return (
    
        <div className="container">
            <div className="row">
        {trending.map((news)=>(
            
            <div className="col-sm-3" key={news.url} >
            <Cards 
            
            description={news.description}
            urlToImage = {news.urlToImage}
            title = {news.title}
            readLater={readLater}
            author = {news.author}
            url = {news.url}
            />
            </div>
        // <Card className="col-sm-3"  key={news.index}  >

        //     <Card.Img variant="top" src={news.urlToImage} alt={news.title}  />

        //     <Card.Body>

        //         <Card.Title>{news.title}</Card.Title>
        //         <Card.Text>
        //             {news.author}
        //         </Card.Text>
        //         <div className="d-flex">
        //         <Button  className = "btn btn-primary" href={news.url} target='_blank' >Read Now</Button>
        //         <Button className = "btn btn-primary ms-5" variant="primary" href="#" >Read Later</Button>
        //         </div>

        //     </Card.Body>
        
        // </Card>
        
        ))

    }

        </div>
        </div>
    
  )
}

export default Dashboard