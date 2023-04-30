import React from "react";
import Shimmer from "../Shimmer/Shimmer";
import axios from "axios";
import { useState } from "react";
import TrendingGiphy from "../Giphy/TrendingGiphy";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [gifs, setGifs] = useState([]);

    const getSearch = async (page) => {
        const searchResults = await axios("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: process.env.REACT_APP_API_KEY,
                q: search,
                offset: 50 * page
            },
        });
        console.log(page)
        setTotalPages(Math.ceil(searchResults.data.pagination.total_count / 50));
        setGifs(searchResults.data.data);
    };
    return (
        <div className="">
            <div className="flex justify-center">
            <input
            type="text"
            placeholder="Search Giphy"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-md appearance-none relative block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            />
            <button onClick={()=>{
                getSearch(0);
                setCurrentPage(0);
            }} className="group relative py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black focus:outline-none focus:ring-2 focus:ring-offset-2">Search</button>
            </div>
            {/* Pagination */}
            {!search?null:(<div className="flex justify-center">
                <button className="px-3 border-t-[25px] border-t-transparent border-r-[50px] border-r-black border-b-[25px] border-b-transparent m-2" 
                    onClick={()=>{
                        setCurrentPage((currentPage)=>{
                            let newPage;
                            if(currentPage==0) newPage=0;
                            else newPage=currentPage-1;
                            getSearch(newPage);
                            return newPage;
                        })
                    }}></button>
                    <p className="m-4">
                        {currentPage +" of "+ totalPages}
                    </p>
                <button className="px-3 border-t-[25px] border-t-transparent border-l-[50px] border-l-black border-b-[25px] border-b-transparent m-2" 
                    onClick={()=>{
                        setCurrentPage((currentPage)=>{
                            let newPage;
                            if(currentPage==totalPages) newPage=totalPages;
                            else newPage=currentPage+1;
                            getSearch(newPage);
                            return newPage;
                        })
                    }}></button>
            </div>)}
        {!search?<TrendingGiphy/>:(<div className="p-5 p-2 m-2 grid-cols-3 gap-4">
            <div className="flex flex-wrap place-content-center">
                {
                    !gifs?(<Shimmer/>):(gifs.length==0?(<p className="text-2xl">No results found</p>):(gifs.map((gif)=>{
                        return (
                            <div className="m-2">
                                <img src={gif.images.fixed_height.url} className="rounded-md"/>
                            </div>
                        )
                    }
                    )))
                }
            </div>
        </div>)}
        </div>
    )
}

export default Search;