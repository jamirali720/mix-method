import React, { useRef } from 'react';
import CountUp, { useCountUp } from "react-countup";

const ReactCountUp = () => {
    const countUpRef = useRef(null)
    const { countUp, start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
      duration: 5,
      end: 10000,
      delay: 1000,
      startOnMount: 0
    });
    return (
      <div>
        <div className="mt-5" ref={countUpRef}>
          <h1> Count Up : {countUp}</h1>
          <button onClick={start}> start</button>
          <button onClick={pauseResume}> Pause /Resume</button>
          <button onClick={reset}> reset</button>
          <button onClick={() => update(3000)}> update</button>
        </div>
        <h1>Count Up component</h1>
        <h1>
          
          <CountUp end={200} />
        </h1>
        <br />
        <h1>
          <CountUp end={200} duration={10} />
        </h1>
        <h1>
         
          <CountUp start={500} end={1000} duration={5} />
        </h1>
        <h1>
          
          <CountUp end={1000} duration={5} prefix="$" decimals={3} />
        </h1>
        <h1>
         
          <CountUp end={1000} duration={5} suffix="USD" decimals={2} />
        </h1>
      </div>
    );
};

export default ReactCountUp;