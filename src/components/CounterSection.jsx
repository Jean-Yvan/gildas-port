"use client";

import React from "react";
import { UserGroupIcon, CalendarIcon, FilmIcon, TrophyIcon} from "@heroicons/react/24/outline";

import CounterCard from "./CounterCard";



const CounterSection = ({ counterData }) =>{
    const styles = "h-10 w-10";
    return (
        <div className="grid grid-cols-2 gap-2 md:mr-0 md:grid-cols-4 mt-5 px-0 md:px-10">
            <CounterCard title="5" prefix="+" subtitle="D'Expériences">
                <CalendarIcon className={`${styles}`} />
            </CounterCard>
            <CounterCard title="200" prefix="+" subtitle="Clients Satisfaits">
                <UserGroupIcon className={`${styles}`} />
            </CounterCard>
            <CounterCard title="200" prefix="~" subtitle="Film et documentaires">
                <FilmIcon className={`${styles}`} />
            </CounterCard>
            <CounterCard title="14" prefix="+" subtitle="Nominations et récompenses">
                <TrophyIcon className={`${styles}`} />
            </CounterCard>  
        </div>
    )

}

export default CounterSection;