import { useState } from "react";

const Counter = () => {
    const [counts, setCounts] = useState("HI DA");

    return (
        <>
            <p>{counts}</p>

            {/* <button
                onClick={() => setCounts(counts + 1)} // Increment counts
                className="bg-green-400 p-5 m-5"
            >
                +
            </button> */}

            <button
                onClick={() => setCounts("Hellow  da")} // Decrement counts
                className="bg-yellow-400 p-5 m-5"
            >
                string
            </button>

            <button
                onClick={() => setCounts(counts + 1)} // Increment counts
                className="bg-green-400 p-5 m-5"
            >
                    -
            </button>

        </>
    );
};
export default Counter