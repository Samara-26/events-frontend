import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EventDetailsPage() {
    const { id } = useParams();
    console.log(id);
    const [event, setEvent] = useState(null);

    const url = "http://localhost:3001/api/events/"
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`${url}${id}`);
            const data = await response.json();
            console.log(data);
            setEvent(data);
        }
        fetchData();
    }, [id]);

    return (
        <div className='m-2 p-3.5 text-center font-serif bg-amber-50 border-2 rounded-2xl'>
            <p>Event id: {id}</p>
            <h1 className='font-bold'>{event?.title}</h1>
            <p>{event?.description}</p>
            {event &&
                <p>{new Date(event.date).toLocaleDateString("de-DE")}
                </p>}
        </div>
    )
}

export default EventDetailsPage