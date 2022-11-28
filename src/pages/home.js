import React, { useEffect } from "react";
import EventInfo from "../components/EventInfo";
import Header from "../components/Header";
export default function Home() {
    return (
      <div>
        <Header className="Header"/>
        <EventInfo/>
      </div>
    );
};