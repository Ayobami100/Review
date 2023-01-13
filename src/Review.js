import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index,setIndex]= useState(0);
  const{id,image,name,text,job} = people[index]

  const checkNumber =(number)=>{
    if(number > people.length - 1){
      return 0
    }
      if(number < 0 ){
        return people.length - 1
      }
    
  return number
  }
  const previousInfo =()=>{
    
      setIndex((index) => {
      let  newIndex = index - 1
        return checkNumber(newIndex)
       })
  
  }

  const nextInfo =()=>{
    
      setIndex((index) => {
       let  newIndex = index + 1
       return checkNumber(newIndex)
      })
    
  }

  const randomInfo =()=>{
   let randomNum = Math.floor(Math.random() * people.length)
   setIndex((index) => {
    return checkNumber(randomNum)
   })
  
    
  }
  return (
    
    <article className='review'>

       
       <div className='img-container' key={id}>
          <img src={image} alt={name} className='person-img'/>
          <span className='quote-icon'>
            <FaQuoteRight/>
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>

        <div className='button-container'>
          <button className='prev-btn' onClick={previousInfo}>
            <FaChevronLeft/>
          </button>
          <button className='next-btn' onClick={nextInfo}>
            <FaChevronRight/>
          </button>
          <button className='random-btn' onClick={randomInfo}>
            suprise me
          </button>
        </div>
      
      
      
     
    </article>
  );
};

export default Review;
