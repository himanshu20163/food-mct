import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FoodDetails = () => {
    const { id } = useParams(); // Get the 'id' parameter from the URL

    const [state, setState] = useState({
        image_url: '',
        title: '',
        publisher: '',
        description: '',
        publisher_url: '',
        source_url: '',
        ingredients: [],
    });

    useEffect(() => {
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
            .then((response) => response.json())
            .then((data) => {
                setState(data.recipe);
                console.log(data);
            });
    }, [id]); // Add 'id' to the dependency array to re-fetch data when the 'id' changes

    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <Link to="/foodsearch" style={{ background: "orange", padding: "10px", color: "#fff",marginTop:"150px" }}>Back to recipe list</Link>
                    <br />
                    <img src={state.image_url} alt={state.title} style={{marginTop:"50px"}}/>
                </div>
                <div className="col-lg-6 mt-5">
                    <h2>{state.title}</h2>
                    <h4>provided by {state.publisher}</h4>
                    <p>Description: {state.description}</p>
                    <a href={state.publisher_url}><button type="button" className="btn btn-primary">Published Url</button></a>
                    &nbsp;
                    <a href={state.source_url}><button type="button" className="btn btn-success">Recipe Url</button></a>
                    <h2>Ingredients</h2>
                    <table>
                        <tbody>
                            {state.ingredients.map((ele, index) => (
                                <tr key={index}>
                                    <td>{ele}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* Display other food details here */}
        </div>
    );
};

export default FoodDetails;
