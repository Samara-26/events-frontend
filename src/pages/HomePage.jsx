import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

function HomePage() {
    const [events, setEvents] = useState([]);
    const baseURL = "http://localhost:3001";
    useEffect(() => {
        const fetchEvents = async () => {
            const response = await fetch(`${baseURL}/api/events`);
            const data = await response.json();
            console.log(data.results);
            setEvents(data.results);
        };
        fetchEvents();
    }, []);
    return (
        <div>
            <Link to={'/create-event'} >
                Create Event
            </Link>
            {
                events?.map((e) => {
                    return (
                        <div key={e.id} className='m-4 border-gray-300 bg-amber-50 font-serif rounded-xl p-4 hover:shadow-lg transition'>
                            <Link to={`/events/${e.id}`} >
                                <p className='font-bold'>{e.title}</p>
                                <p>{e.description}</p>
                                <p>{e.location}</p>
                                <p>{new Date(e.date).toLocaleDateString("de-DE")}</p>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default HomePage