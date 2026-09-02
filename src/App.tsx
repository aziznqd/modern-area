import Navbar from "./components/Navbar";
import Benefits from "./sections/Benefits/Benefits";
import Header from "./sections/Header/Header";
import Trusted from "./sections/Trusted/Trusted";

export default function App(){
  return(
    <div className="mx-0 md:mx-10">
      <Navbar/>
      <main>
        <Header/>
        <Trusted/>
        <Benefits/>
      </main>
    </div>
  )
}