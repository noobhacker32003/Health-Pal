import React from 'react';

const UserSay = () => {
    const feedbacks = [
        {
            id: 1,
            name: "JaneDoe123",
            country: "USA",
            comment: "Lifesaver!",
            description: "Health Pal has been a lifesaver! The medicine reminders feature ensures I never miss a dose, and the health tips are super helpful. Highly recommend it!",
            image: "https://i.pravatar.cc/100?img=5",
            rating: 5
        },
        {
            id: 2,
            name: "MarkSmith88",
            country: "UK",
            comment: "Great service!",
            description: "I love how easy it is to schedule consultations. The virtual doctor visits are seamless and save me so much time. Great interface!",
            image: "https://i.pravatar.cc/100?img=6",
            rating: 4.5
        },
        {
            id: 3,
            name: "Megan_Taylor",
            country: "Canada",
            comment: "Game-changer!",
            description: "The SOS service is a real game-changer. I was able to get immediate help when I had a medical emergency. It’s a must-have for anyone who values their health.",
            image: "https://i.pravatar.cc/100?img=7",
            rating: 5
        },
        {
            id: 4,
            name: "JohnC_90",
            country: "Bangladesh",
            comment: "Awesome experience!",
            description: "Health Pal has improved my health routine. I now get daily tips that are tailored to me, and I feel more informed and healthier. Awesome interface.",
            image: "https://i.pravatar.cc/100?img=8",
            rating: 4.8
        },
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <>
                {Array(fullStars).fill(0).map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
                {halfStar && <span className="text-yellow-500 text-xl">☆</span>}
            </>
        );
    };

    return (
        <div className='bg-gray-100 pt-5'>
            <h1 className='text-4xl bg-gray-100  font-bold text-center mb-6'>What Our Users Have to Say</h1>
            <div className="p-2 sm:p-6 bg-gray-100 ">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 bg-gray-100">
                    {feedbacks.map((feedback) => (
                        <div key={feedback.id} className="card bg-white shadow-xl p-6 rounded-2xl">
                            <div className="flex items-center gap-4">
                                <img src={feedback.image} alt={feedback.name} className="w-14 h-14 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">{feedback.name}</h3>
                                    <p className="text-gray-500">{feedback.country}</p>
                                </div>
                            </div>
                            <div className="flex items-center mt-2">
                                {renderStars(feedback.rating)}
                                <span className="ml-2 text-gray-600">({feedback.rating})</span>
                            </div>
                            <p className="mt-4 text-lg font-semibold">"{feedback.comment}"</p>
                            <p className="mt-2 text-gray-600">{feedback.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserSay;
