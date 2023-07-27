import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectThumbnail = ({
  title,
  description,
  bannerImage,
  profileImage,
  navlink,
}) => {
  return (
    <Link href={"/"}>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full max-h-64 rounded-lg overflow-hidden">
          <Image src={bannerImage} className="object-cover w-full" />
        </div>
        <div className="flex gap-3 w-full">
          <div className="w-14 h-14 rounded-full mt-5 min-w-[50px]">
            <Image
              src={profileImage}
              className="w-full rounded-full border-2 object-cover"
            />
          </div>
          <div className="mt-3">
            <p className="text-lg font-semibold">{title}</p>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectThumbnail;
