import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'
import img5 from '../assets/img5.avif'
import img6 from '../assets/img6.avif'


const Home = () => {

    const [placeholder,setPlaceholder]=useState(false)
    const [searchQuery, setSearchQuery] = useState('');
    

    const pics = [
        {   
            title: 'Books',
            img:img1

        },
        {   
            title: 'jacket',
            img:img2

        },
        {   
            title: 'shoes',
            img:img3

        },
        {    
            title: 'clothes',
            img:img4

        },
        {   
            title: 'bags',
            img:img5

        },
        {    
            title: 'jackets',
            img:img6

        },
        
    ]
     const handleFocus = () => {
        setPlaceholder(true);
      }
    
      const handleBlur = () => {
        setPlaceholder(false);
      }

      const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
      }
    
      const filteredSuggestions = pics
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .map((p, i) => (
          <p key={i} className="cursor-pointer hover:text-blue-500" onClick={() => setSearchQuery(p.title)}>
            {p.title}
          </p>
        ));
      

  return (
    <div className='sm:mx-8'>
        {/* search bar start */}
      <div className='flex  justify-center items-center my-12 relative'>
        <div className='relative w-1/3  '  >
          <input
            className='w-full py-4 px-12 text-lg text-black rounded-full  border border-gray-300 shadow-lg'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            type="search"
            placeholder=''
            name=""
            id=""
          />
          {
            !placeholder && <p  className='flex items-center px-5 gap-3 absolute  top-1/2 transform -translate-y-1/2 left-4'>

            <IoSearch className='text-2xl font-semibold '/>
            <p className='text-lg font-semibold '>Search</p>
            </p>
            
            
          }
                 
           
                 {searchQuery.length > 0 && (
            <div className="absolute ml-10   mt-2 p-2 ">
              {filteredSuggestions.length > 0 ? (
                <>

                  {filteredSuggestions}
                  
                </>
              ) : ''}
            </div>
          )}
          
          
        </div>
        
      </div>
      {/* s end */}


      {/* Trending now start */}

      {
        searchQuery.length > 0 && placeholder ? '' :
      
      <div className='mt-[14%]'>
        <h1 className='text-2xl font-semibold '>Trending Now</h1>


        <div className='flex py-10'>
            {pics.map((p,i)=>{

             return(
                  <div className='relative'>

                 <img className='w-[255px] h-[340px]' src={p.img} alt="" />
                 <p className='absolute w-[70px]  top-10 bg-white shadow-md text-black rounded-full py-1 text-center transform -translate-y-1/2 left-4'>{p.title}</p>
                 </div>
             )
            })}
        </div>

      </div>
}
    </div>
  );
};

export default Home;
