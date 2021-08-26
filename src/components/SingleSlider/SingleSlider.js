import React, {useEffect, useState} from 'react';
import './SingleSlider.scss';


function SingleSlider(props) {
    const {data} = props;
    const [current, setCurrent] = useState(0);


    function goLeft() {
        current === 0 ? setCurrent(data.length - 1) : setCurrent(current - 1);
    }

    function goRight() {

        current === data.length - 1 ? setCurrent(0) : setCurrent(current + 1);
    }

    return (
        <div className={"carousel"}>
            <h1 className={"title"}>Single Item</h1>
            <div className={"carousel__container"}>
                <button
                    onClick={() => goLeft()}
                    className={"carousel__button carousel__button--left"}>
                    &#10094;
                </button>
                <div className="carousel__track-container">
                    <ul className="carousel__track">
                        {
                            data && data.map((item, index) => {
                                return (
                                    <li key={index}
                                        className={current === index ? "carousel__slide active" : "carousel__slide"}>
                                        <img className="carousel__image" src={item} alt="image1"/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <button
                    className={"carousel__button carousel__button--right"}
                    onClick={() => goRight()}
                >
                    &#10095;
                </button>
            </div>
            <div className="carousel__nav">
                {
                    data && data.map((item, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={
                                    current === index ? "carousel__indicator current-slide" : "carousel__indicator"
                                }/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default SingleSlider;