// pages/index.js

import React from 'react';

const projects = [
  {
    title: 'House Price Prediction',
    description: 'its a machine learning model that which considers the parameters like area,no.of rooms,location etc and its been trained with a data about 10,000 records ',
    gitlink:"https://github.com/Sumanthraju4104/housepriceprediction",
  },
  {
    title: 'Movie Recommendation',
    description: 'its a machine learning model which has been trained with the data of movies and their characteristics then based on the users interests',
    gitlink: "https://github.com/Sumanthraju4104/movierecommendation",
  },
  // Add more projects as needed
];

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-gray-900 font-bold text-lg">{project.title}</h2>
            <p className="mt-2 text-gray-600">{project.description}</p>
            <a
                href ={project.gitlink}

                className="inline-block mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
        >see code</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
