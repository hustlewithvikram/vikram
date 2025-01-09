"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface Props {
  children: React.ReactNode;
}

const ThreeDCardEffect: React.FC<Props> = ({ children }) => {
  return (
    <CardContainer>
      <CardBody>
        <CardItem translateZ="100">{children}</CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardEffect;
