import { ReactNode } from 'react';
import './App.css'

interface LayOutProps {
  children: ReactNode;
}
// import img  from "@/asset/backgroud.png";
function LayOut({ children }: LayOutProps) {
  return (
    <div id="app">
      {/* <img src={@/asset/backgroud.png} alt="asa" /> */}
      <div id="background" />
      <section id="container">
        {children}
      </section>
    </div>
  )
}

export default LayOut
