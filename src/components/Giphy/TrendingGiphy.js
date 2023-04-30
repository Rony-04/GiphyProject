import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Shimmer from "../Shimmer/Shimmer";

const TrendingGiphy = () => {
    const [gifs, setGifs] = useState([]);
    const [err, setErr] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "GlVGYHkr3WSBnllca54iNt0yFbjz7L65",
                    rating: 'r',
                    offset: currentPage * 50
                }
            });
            setTotalPages(Math.ceil(response.data.pagination.total_count / 50));
            setGifs(response.data.data);
        };
        fetchData();
    }, [currentPage])

    return (
        <div className="">
        {/* Pagination */}
        <div className="flex justify-center display-none">
            <button className="px-3 border-t-[25px] border-t-transparent border-r-[50px] border-r-black border-b-[25px] border-b-transparent m-2" onClick={(e)=>setCurrentPage(currentPage-1)}></button>
            <p className="m-4">
                {currentPage +" of "+ totalPages}
            </p>
            <button className="px-3 border-t-[25px] border-t-transparent border-l-[50px] border-l-black border-b-[25px] border-b-transparent m-2" onClick={(e)=>setCurrentPage(currentPage+1)}></button>
        </div>

        {
            gifs.length === 0 ? <Shimmer/>:(
                <div className="p-5 p-2 m-2 grid-cols-3 gap-4">
            <div className="flex flex-wrap place-content-center">
                {
                    gifs?.map((gif) => {
                        return (
                        <div key={gif.id}>
                            <img src={gif.images.fixed_height.url} alt={gif.title} className="rounded-lg border mb-2"/>
                        </div>
                        );
                    })}
            </div>
            
        </div>
            )
        }
        </div>
    );
};

export default TrendingGiphy;
