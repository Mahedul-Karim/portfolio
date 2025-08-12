"use client";

import React from "react";
import { OrbitingCircles } from "../common/OrbittingCircles";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillCard = ({
  type,
  skills = [],
  icon,
}: {
  type: string;
  skills: string[];
  icon: React.ReactElement;
}) => {
  return (
    <Card className="shadow-none bg-glass border-border border">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <div className="bg-white/20 p-2 rounded-md">{icon}</div>
          {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] relative flex flex-col items-center justify-center">
          <OrbitingCircles radius={100}>
            {skills?.map((skill, i) => (
              <Image src={skill} key={i} alt="" width={30} height={30} />
            ))}
          </OrbitingCircles>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
