import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Ahmed K.",
      rating: 5,
      date: "2 weeks ago",
      text: "I had a wonderful stay at this guest house. The environment was clean, the views were breathtaking, and the hospitality was excellent. Perfect location in Bhurban near Murree. Highly recommended!",
      avatar: "AK"
    },
    {
      id: 2,
      name: "Mohsin R.",
      rating: 5,
      date: "1 month ago",
      text: "Overall, I would give it a 4.5-star rating. Beautiful property with stunning mountain views. The rooms were spacious and well-maintained. Great experience for families visiting Nathia Gali area.",
      avatar: "MR"
    },
    {
      id: 3,
      name: "Sara M.",
      rating: 5,
      date: "3 weeks ago",
      text: "Amazing place! The house is beautifully designed with all modern amenities. The terrace offers spectacular panoramic views of the mountains. Staff was very helpful and accommodating.",
      avatar: "SM"
    },
    {
      id: 4,
      name: "Bilal A.",
      rating: 5,
      date: "2 months ago",
      text: "Best guest house in Bhurban! Clean, comfortable, and the location is perfect. Easy access to all major attractions. The peaceful environment and mountain views make it ideal for a relaxing holiday.",
      avatar: "BA"
    },
    {
      id: 5,
      name: "Fatima S.",
      rating: 5,
      date: "1 month ago",
      text: "Excellent stay! The property exceeded our expectations. Spacious rooms, well-equipped kitchen, and the view from the balcony is absolutely stunning. Perfect for families and groups.",
      avatar: "FS"
    }
  ];

  // Duplicate reviews for infinite scroll effect
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Guest Reviews
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            See what our guests say about their stay at Shangrilla House Bhurban
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-5xl font-bold text-foreground">4.6</span>
              <div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      className="w-5 h-5 fill-primary text-primary" 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a 
            href="https://maps.app.goo.gl/5gRwLKKSTsB1P3qC9?g_st=ipc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-medium"
          >
            View all reviews on Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Auto-scrolling slider */}
        <div className="relative">
          <div className="flex gap-6 animate-scroll">
            {duplicatedReviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-[350px] bg-accent/5 rounded-2xl p-6 shadow-soft"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{review.avatar}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-primary text-primary" 
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://maps.app.goo.gl/5gRwLKKSTsB1P3qC9?g_st=ipc" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-smooth shadow-soft hover:shadow-elevated"
          >
            Write a Review
          </a>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-350px * 5 - 1.5rem * 5));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
