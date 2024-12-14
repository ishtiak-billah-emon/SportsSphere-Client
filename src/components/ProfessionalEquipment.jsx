import React from "react";

const ProfessionalEquipment = () => {
  return (
    <div className="font-sans text-left p-8 relative mt-24">
      <h1 className="text-2xl font-bold mb-4">Professional sports products</h1>
      <p className="text-lg mb-8">
        We specialize in a variety of professional sports products.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center bg-blue-100 p-8 rounded-lg ">
        {/* Left Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Icon & Content Blocks */}
          <div className="text-left space-y-2">
            <div className="text-4xl">🏈</div>
            <h3 className="text-xl font-semibold">
              A friendly team works for you
            </h3>
            <p className="text-base  w-1/2">
              Some teams bring a smile to your face, while others are truly
              supportive.
            </p>
          </div>

          <div className="text-left space-y-2">
            <div className="text-4xl">🔧</div>
            <h3 className="text-xl font-semibold">
              Professional grade equipment
            </h3>
            <p className="text-base  w-1/2">
              Professional grade equipment not only meets expectations but also
              surpasses them.
            </p>
          </div>

          <div className="text-left space-y-2">
            <div className="text-4xl">⛸️</div>
            <h3 className="text-xl font-semibold">
              Time-tested product manufacturers
            </h3>
            <p className="text-base  w-1/2">
              Time-tested product trusted manufacturers deliver reliable goods.
            </p>
          </div>
        </div>

        {/* Right Section: Video Embed */}
        <div className="flex-1 max-w-lg mx-auto absolute top-5 right-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xuas_Yc7VNQ?si=rOD_cykpQiNNkXI4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalEquipment;
