import React from "react";

function StartPage({ children, myClass }) {

  const [piranhaPlantComponent, r2D2Component, benderComponent, startButton] = children;

 return (
   <div id="start-page" className={myClass}>
     <div>
      {piranhaPlantComponent}
      {r2D2Component}
      {benderComponent}
     </div>
     
     <div>
       <div>
       <p>INSTRUCTIONS:</p>
       The objective of this game is simple! In the following picture,
       locate the three characters portrayed in the menu, click on them, and then select the correct option! 
       Once you are ready, click the start button to begin your search!</div>
       {startButton}
     </div>
     
   </div>
 )
}

export default StartPage;