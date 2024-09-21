import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="space-y-4 shadow-xl h-[250px] p-5 m-5"> {/* Fixed padding class 'p-' */}
                <img src={props.image} alt="Product" className="h-20" /> {/* Corrected 'img' to 'image' */}
                <p>{props.title}</p>
                <p>{props.content}</p> {/* Fixed content access */}
                
                <Link to="/help">
                    <button className="bg-orange-400 p-2 rounded-lg">Add to cart</button>
                </Link>
            </div>
        </>
    );
};

export default Card;
