"use client";
import React, {useEffect, useState} from "react";

function Motivator() {
    const motivator = [
        {
            motivation:
                "Do small things every day that can help make your life better. These small successes can build momentum and bring positive changes to your life.",
        },
        {
            motivation:
                "Learn from the past, enjoy the present, and hope for a better future. We cannot change the past, but we can control our future..",
        },
        {
            motivation:
                "Don't let failures stop you. Every failure is an opportunity to learn and grow. Keep moving forward and don't give up on your dreams.",
        },
        {
            motivation:
                "Give yourself time to do things you enjoy and give you positive energy. Life is about finding balance, so make sure you put yourself and your mental health first.",
        },
        {
            motivation:
                "Don't let failures stop you. Every failure is an opportunity to learn and grow. Keep moving forward and don't give up on your dreams.",
        },
    ];
    const [motivation, setMotivation] = useState("");

    useEffect(() => {
        const intervalTime = 1000; // 1 second

        // Define the variable to be updated
        let counter = -1;

        // Define the function to update the variable
        const updateCounter = () => {
            counter++;
            setMotivation(motivator[counter % motivator.length].motivation);
        };

        // Call setInterval() to execute the update function every intervalTime milliseconds
        const interval = setInterval(updateCounter, intervalTime);

        // Return a cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    },);
    return (
        <p className="mt-4 font-semibold text-xl text-slate-400 max-w-lg sm:text-2xl sm:leading-relaxed">
            {motivation}
        </p>
    );
}

export default Motivator;
