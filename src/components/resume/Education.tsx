import React from "react";

const Education = ({
  educations = [],
}: {
  educations: {
    degree: string;
    university: string;
    period: string;
    gpa: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-6 mt-4">
      {educations?.length > 0 &&
        educations?.map((edu, i) => (
          <div key={i} className="grid grid-cols-[16px_1fr] gap-6 text-white">
            <div className="relative">
              {i !== educations.length - 1 && <div className="absolute top-4 left-[50%] -translate-x-[50%] w-[1px] bg-white -bottom-[24px]"></div>}
              <div className="size-4 bg-black border-3 border-solid border-secondary rounded-full"></div>
            </div>
            
            <div className="flex justify-between gap-2 grow -mt-[5px]">
              <div className="flex flex-col">
                <h2 className="text-xl text-white font-bold">{edu.degree}</h2>
                <p className="text-base text-white/60">{edu.university}</p>
              </div>
              {/* <div>World</div> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Education;
