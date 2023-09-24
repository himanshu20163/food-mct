import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react';
import "./formsearch.css";
import myreduxstore from '../Redux/Store/Store';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import reload from "../images/reload.gif"

const FoodSearch = () => {
    const [state, setState] = useState('chicken');
    const dispatch = useDispatch(); // Get the dispatch function

    const food_data = useSelector((state) => state.food_search_data); // Use useSelector to access Redux state

    useEffect(() => {
        // Fetch data when the component mounts
        submitData();
    }, []);

    const fetchData = async () => {
        try {
            const apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${state}`);
            const responseData = await apiResponse.json();
            return responseData.recipes; // Assuming the API response contains a 'recipes' array
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const submitData = async () => {
        const foodData = await fetchData();

        // Create an action object to update the Redux store
        const action = {
            type: "food_search_data",
            payload: foodData,
        };

        // Dispatch the action to update the Redux store
        dispatch(action);
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-12">
                    <div className="input-group formsearch mb-4 " style={{ marginLeft: "15em", marginTop: "50px" }}>
                        <input
                            type="search"
                            placeholder="Search here..."
                            aria-describedby="button-addon5"
                            className="form-control"
                            onChange={(event) => {
                                setState(event.target.value);
                            }}
                        />
                        <div className="input-group-append">
                            <button
                                id="button-addon5"
                                type="submit"
                                className="btn btn-primary"
                                onClick={submitData}
                            >
                                Q
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="foodAlldetails">
                        {food_data == [] ? <div><img src={reload} style={{marginLeft:"20em"}}/></div>: food_data.map((foodItem, index) => (
                            <div key={index} width="450" style={{boxShadow:"0px 0px 10px gray",margin:"10px",height:"350px"}}>
                                <img src={foodItem.image_url} alt={foodItem.title} width="300" height="200" />
                                <div >
                                    <h5 className="card-title" style={{fontSize:"15px",width:"250px",margin:"20px"}}>{foodItem.title}</h5>
                                    <p>{foodItem.description}</p>
                                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                                    <Link to={`/details/${foodItem.recipe_id}`} style={{backgroundColor:"blue",padding:"10px",color:"#fff"}}>Details</Link>
                                    &nbsp;<a href={foodItem.source_url} target='_blank' style={{backgroundColor:"#21ba45",padding:"10px",color:"#fff"}}>Recipe Url</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSearch;
