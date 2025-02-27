import { ReactNode } from 'react';
import './App.css'

interface LayOutProps {
  children: ReactNode;
}
function LayOut({ children }: LayOutProps) {
  return (
    <div id="app">
      <div id="background" />
      <section id="container">
        {children}
      </section>
    </div>
  )
}

export default LayOut
