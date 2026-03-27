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
        <>
            <div className="min-h-screen bg-slate-950 text-white px-6 py-8">
                <section className='max-w-6xl mx-auto'>
                    <h1 className='text-3xl font-bold mb-2'>Discover and share cool events</h1>
                    <p className="text-slate-300">	Find interesting events around you or create your own.</p>
                </section>
                <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        events?.map((e) => {
                            return (
                                <div key={e.id} className="bg-slate-900 rounded-2xl p-6 hover:shadow-lg transition border border-slate-800">
                                    <Link to={`/events/${e.id}`} >
                                        <img
                                            src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4"
                                            alt="event"
                                            className="w-full h-40 object-cover rounded-lg mb-4"
                                        />
                                        <h2 className='text-lg font-semibold mb-2'>{e.title}</h2>
                                        <p className='text-slate-400 text-sm mb-3'>{e.description}</p>
                                        <p className='text-slate-500 text-sm'>{e.location}</p>
                                        <p className='text-slate-500 text-sm'>{new Date(e.date).toLocaleDateString("de-DE")}</p>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage