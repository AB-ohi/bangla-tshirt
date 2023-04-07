import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    return (
        <div>
            <h1>this is home: {tshirt.length}</h1>
        </div>
    );
};

export default Home;