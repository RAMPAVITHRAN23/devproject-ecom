import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define schema for form validation
const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }),
    DOB: z.string().nonempty({ message: "Date of Birth is required" }) // Validation for DOB field
});

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    // Logs the watched fields in real-time
    console.log(watch("email"), watch("password"));

    // This will be triggered when the form is submitted
    const onSubmit = (data) => {
        console.log("onSubmit-", data);  // Logs the form data
    }

    return (
        <>
            <p>Contact form</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        {...register("email")}
                        className='border border-red-700'
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    {/* /Show error message for email */}
                </div>

                <div>
                    <input
                        {...register("password")}
                        className='border border-green-500'
                        placeholder="Password"
                    />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    {/* Show error message for password */}
                </div>

                <div>
                    <input
                        {...register("message")}
                        className='border border-green-500'
                        placeholder="Message"
                    />
                    {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                    {/* Show error message for message */}
                </div>

                <div>
                    <input
                        {...register("DOB")}
                        className='border border-green-500'
                        placeholder="Date of Birth"
                    />
                    {errors.DOB && <p className="text-red-500">{errors.DOB.message}</p>}
                    {/* Show error message for DOB */}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </>
    );
}

export default Contact;
