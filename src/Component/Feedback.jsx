import React from "react";


const articles = [
    {
        id: 1,
        title: "7 Nutrition Tips to Lose Weight Faster and Easier",
        description: "Losing weight involves a combination of a balanced diet, regular physical activity, and healthy lifestyle habits.",
        image: "https://i.ibb.co.com/FLGj7W5w/nutrient.png",
        readTime: "12 mins read",
        author: "Health Interface"
    },
    {
        id: 2,
        title: "Complications of Hypertension",
        description: "Understanding the risks and health impacts of hypertension on the body.",
        image: "https://i.ibb.co.com/39KZ00S2/patient.png",
        readTime: "28 mins read",
        author: "Health Interface"
    },
    {
        id: 3,
        title: "Glaucoma - Symptoms and Types",
        description: "A detailed guide on glaucoma, its symptoms, and types.",
        image: "https://i.ibb.co.com/rGKqv15z/Glucoma.png",
        readTime: "31 mins read",
        author: "Health Interface"
    },
    {
        id: 4,
        title: "Living with Diabetes",
        description: "Tips and lifestyle changes to manage diabetes effectively.",
        image: "https://i.ibb.co.com/4ZgMyJyP/diabetes.png",
        readTime: "9 mins read",
        author: "Health Interface"
    }
];

const Feedback = () => {
    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Read the top articles from Health Experts
            </h2>
            
            {/* Featured Article */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                        {articles[0].readTime}
                    </span>
                    <img
                        src={articles[0].image}
                        alt={articles[0].title}
                        className="w-full h-56 object-cover rounded-lg mt-2"
                    />
                    <h3 className="text-xl font-bold mt-4">{articles[0].title}</h3>
                    <p className="text-gray-600 mt-2">{articles[0].description}</p>
                    <p className="text-blue-600 mt-2">{articles[0].author}</p>
                    <button className="mt-4 px-4 py-2 bg-[#0C103F] text-white py-2 rounded-md hover:bg-[#D0DBF3] transition hover:text-black">
                        Learn More
                    </button>
                </div>

                {/* Other Articles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {articles.slice(1).map((article) => (
                        <div key={article.id} className="bg-white p-4 shadow-lg rounded-lg">
                            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                {article.readTime}
                            </span>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full h-40 object-cover rounded-lg mt-2"
                            />
                            <h3 className="text-lg font-bold mt-2">{article.title}</h3>
                            {/* <p className="text-blue-600">{article.author}</p> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feedback;
