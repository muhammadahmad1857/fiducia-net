import React from "react";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import ReviewType from "@/types/reviewType";
import { urlFor } from "@/sanity/lib/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function fetchTestimonials(): Promise<ReviewType[]> {
  const query = `*[_type == "reviews"] {
    userName,
    review,
    image {
      asset
    }
  }`;

  try {
    return await client.fetch<ReviewType[]>(query);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
}

const Testimonial = async () => {
  const testimonials = await fetchTestimonials();

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start w-full py-10 px-2 md:px-10 gap-8">
      {/* First Column: Video Section */}
      <div className="w-full md:w-1/2 md:mt-20 max-w-[500px] flex flex-col items-center md:items-start">
        <h1 className="text-2xl pb-6 font-bold text-orange-400 text-center md:text-left">
          What our Clients Say About Us
        </h1>
        <div className="aspect-video w-full max-h-[500px]">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/4CP7OMs20Ag"
            title="TechloSet Services | TechloSet Solutions"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Second Column: Reviews Slider */}
      <div className="w-full md:w-1/2 max-w-[500px] h-[400px] md:h-[500px] group">
        {/* Wrapper for the animation */}
        <div className="relative h-full overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white/20 to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/20 to-transparent z-10"></div>
          {/* Animated container for sliding reviews */}
          <div className="absolute w-full h-full animate-continuous-scroll group-hover:[animationPlayState:paused] space-y-4">
            {/* Map through the testimonials */}
            {[...testimonials, ...testimonials].map(
              (review: ReviewType, index: number) => (
                <div
                  key={index}
                  className={`flex cursor-pointer items-center gap-4 p-4 ${index % 2 === 0 ? "bg-bgColor" : "bg-main-dark"} border border-gray-300 rounded-lg transition-all duration-500  hover:-translate-y-2 shadow-md`}
                >
                  <Avatar>
                    <AvatarImage
                      src={
                        review.image?.asset?._ref
                          ? urlFor(review.image.asset._ref).url()
                          : undefined
                      }
                    />
                    <AvatarFallback>
                      {review.userName.slice(0, 3)}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base md:text-lg truncate">
                      {review.userName}
                    </h3>
                    <div className="text-sm md:text-base">
                      <PortableText value={review.review} />
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
