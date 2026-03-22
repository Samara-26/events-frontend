import React, { useState } from 'react'

function CreateEventPage() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(title, description);
        await fetch("http://localhost:3001/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({
                title,
                description,
                date,
                location,
                latitude: Number(latitude),
                longitude: Number(longitude),
            }),
        });
    };
    return (
        <div>
            <h1>CreateEventPage</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    name="title"
                    id="title"
                    placeholder='Event title'
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)}
                />
                <input type="text"
                    name="description"
                    id="description"
                    placeholder='Event description'
                    value={description}
                    onChange={(e) =>
                        setDescription(e.target.value)}
                />
                <input type="date"
                    name="date"
                    id="date"
                    placeholder='Event date'
                    value={date}
                    onChange={(e) =>
                        setDate(e.target.value)}
                />
                <input type="text"
                    name="location"
                    id="location"
                    placeholder='Event location'
                    value={location}
                    onChange={(e) =>
                        setLocation(e.target.value)}
                />
                <input type="text"
                    name="latitude"
                    id="latitude"
                    placeholder='Event latitude'
                    value={latitude}
                    onChange={(e) =>
                        setLatitude(e.target.value)}
                />
                <input type="text"
                    name="longitude"
                    id="longitude"
                    placeholder='Event longitude'
                    value={longitude}
                    onChange={(e) =>
                        setLongitude(e.target.value)}
                />
                <button type='submit'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default CreateEventPage