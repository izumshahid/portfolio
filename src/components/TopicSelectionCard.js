import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopicSelectionCard = ({ topic, image, link = "AllMcqs" }) => {
  return (
    <Link href={link}>
      <div className="flex items-center gap-3 bg-white rounded-lg p-2 cursor-pointer">
        <div className="bg-main_purple_color p-2 rounded-full">
          <Image src={image} alt="topic" className="w-5 object-contain" />
        </div>
        <div className="text-sm sm:text-base md:text-base lg:text-lg 2xl:text-xl font-semibold text-main_black_color">
          {topic}
        </div>
      </div>
    </Link>
  );
};

export default TopicSelectionCard;
