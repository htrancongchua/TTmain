import { Link } from "react-router-dom";

const ProductBox = ({id, img, title, des }) => {
    return (
        <div className="product-box" key={id}>
            <Link to={`/foods/${id}`}>
                <img className="product-box__img" src={img} />
                <div className="product-body">
                    <div className="product-body__title">
                        {title}
                    </div>
                    <div className="product-body__price">
                        {des}
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductBox;