import { useState } from "react";

const Commentcomponent = () => {
    // State to hold the list of comments
    const [data, Setdata] = useState([]); // Initialize with an empty array
    const [name, Setname] = useState(""); // State for name
    const [message, Setmessage] = useState(""); // State for message

    const handleSubmit = () => {
        if (name && message) { // Ensure that both name and message are not empty
            Setdata((prevData) => [...prevData, { name, message }]); // Append new comment
            Setname(""); // Reset the input fields
            Setmessage("");
        }
    };

    return (
        <>
            <p>JSX</p>
            <input
                className="border border-spacing-0 border-blue-900 w-100"
                type="text"
                placeholder="Enter your name"
                value={name} // Bind input value to state
                onChange={(e) => {
                    Setname(e.target.value); // Update name state
                }}
            />

            <input
                className="border border-spacing-0 border-blue-900 w-100"
                type="text"
                placeholder="Enter your message"
                value={message} // Bind input value to state
                onChange={(e) => {
                    Setmessage(e.target.value); // Update message state
                }}
            />
            <button
                className="bg-orange-400 rounded-lg p-2 m-5"
                onClick={handleSubmit} // Call handleSubmit on click
            >
                Submit
            </button>

            {/* Display the list of comments */}
            {data.length > 0 && (
                <>
                    <p>Messages:</p>
                    {data.map((e, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-black font-bold">Name: {e.name}</p>
                            <p className="text-black">Message: {e.message}</p>
                        </div>
                    ))}
                </>
            )}

            {/* Display the entire data array as JSON (for debugging) */}
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
    );
};

export default Commentcomponent;
