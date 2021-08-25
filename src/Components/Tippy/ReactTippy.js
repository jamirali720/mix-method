import React from 'react';
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";


const ColorTooltip = ()=> {
    return (
      <div style={{ width:'240px', height:'300px', backgroundColor: "green"}}>
        <h1 style={{ color: "red", fontSize: "49px" }}>
          this separated tooltip
        </h1>
      </div>
    );
} 

const ReactTippy = () => {
    return (
      <div>
        <h1>React Tooltip component</h1>
        <div style={{ marginBottom: "30px" }}>
          <Tippy
          arrow={false}
          delay={1000}
          placement={'right'}
            content={<span style={{ color: "lime" }}> this color tooltip</span>}
          >
            <button> hover</button>
          </Tippy>
        </div>
        <div style={{ marginBottom: "30px" }}>
          <Tippy placement={"left"} delay={1000} content={<ColorTooltip> </ColorTooltip>}>
            <button> hover</button>
          </Tippy>
        </div>
      </div>
    );
};

export default ReactTippy;