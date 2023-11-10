
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";

import { getAllDocs, get } from "../src/lib/firebase/api";

import Movie from "src/components/Movie";

export default async function Page() {
  const data = await getData();
  return (
    <>
      <NavBar />
      <Home data={data} />
      <Footer />
    </>
  );
}

async function getData() {
  const props = {};
  try {
    const data = await getAllDocs("home");
    data.forEach((element) => {
      if (element.id === "greetingDoc") {
        props.greetingDoc = element.data();
      } else if (element.id === "proposDoc") {
        props.proposDoc = element.data();
      }
    });
    const awards = await get("awards");
    const projets = await get("projets");
    const parcours = await get("parcours");
    const services = await get("services");

    props.awards = awards;
    props.projets = projets;
    props.parcours = parcours;
    props.services = services;
  } catch (e) {
    console.log(e);
  }

  return props;
}

/*export default function Page(){
  return (
      <Movie />
  );
}*/
