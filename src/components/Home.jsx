"use client";

import React from "react";

import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjetsSection";
import AwardSection from "./AwardSection"; 
import EmailSection from "./EmailSection";
import NavBar from "./NavBar";
import ServiceSession from "./ServiceSection";
import QualificationSection from "./QualificationSection";
import CounterSection from "./CounterSection";



export default function Home({data}) {

  
  return (  
      <div className="container mx-auto px-12 py-8 relative">
        <NavBar />
        <HeroSection data = { data.greetingDoc } />
        <CounterSection /> 
        <AboutSection data = { data.proposDoc } />
        <QualificationSection parcours = { data.parcours } />
        <ServiceSession services = { data.services } />
        <ProjectsSection projects = { data.projets } />
        <AwardSection awards ={ data.awards } />
        <EmailSection profile = {{fblink:data.greetingDoc.fblink,instalink:data.greetingDoc.instalink,linkdinlink:data.greetingDoc.linkdinlink}}/>
      </div> 

  ) 
}

