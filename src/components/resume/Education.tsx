import React from "react";
import SpotlightCard from "../common/Spotlight";
import { Badge } from "../ui/badge";

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
    <div className="flex flex-col gap-6 mt-8">
      {educations?.length > 0 &&
        educations?.map((edu, i) => (
          <SpotlightCard
            key={i}
            className="rounded-2xl hover:bg-glass border border-transparent hover:border-border/20 transition-all duration-300 overflow-x-clip"
          >
            <div className="grid grid-cols-[16px_1fr] gap-6 text-white px-4 py-6">
              <div className="relative">
                {i !== educations.length - 1 && (
                  <div className="absolute top-4 left-[50%] -translate-x-[50%] w-[1px] bg-white/60 -bottom-[74px]"></div>
                )}
                <div className="size-4 bg-black border-3 border-solid border-secondary rounded-full"></div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-2 grow -mt-[5px]">
                <div className="flex flex-col">
                  <h2 className="text-lg xs:text-xl text-white font-semibold">{edu.degree}</h2>
                  <p className="text-sm xs:text-base text-white/60">{edu.university}</p>
                </div>
                <div>
                  <Badge className="rounded-full xs:text-sm text-white bg-glass px-2 xs:px-4 py-1 xs:py-1.5">{edu.period}</Badge>
                </div>
              </div>
            </div>
          </SpotlightCard>
        ))}
    </div>
  );
};

export default Education;
