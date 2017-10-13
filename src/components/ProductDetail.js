import React from 'react';

function ProductDetail (props) {
    let rating = props.productElement.rating;
    let ratingsNum = [];
    for (let i = 0; i < rating; i++) {
        ratingsNum.push(
            <span className="glyphicon glyphicon-star"></span>
        )
    }

    return (
        <div className="col-sm-4 col-lg-4 col-md-4">
            <div className="thumbnail">
                <img src={props.productElement.imgUrl} alt={props.productElement.name} />
                <div className="caption column">
                    <h4 className="pull-right">{props.productElement.price}</h4>
                    <h4>
                        <a href="#">{props.productElement.name}</a>
                    </h4>
                    <p>{props.productElement.description}</p>
                </div>
                <div className="ratings">
                    <p className="pull-right">{props.productElement.reviews} reviews</p>
                    <p>
                        {ratingsNum}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;
