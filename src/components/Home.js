import { useState } from "react";

function Home(){
    const [count,setCount] = useState(0);


    return (
        <>
        <h1>Home Component</h1>
        <div className="counter">
            <h6>Counter : {count}</h6>
            <button type="button" class="btn btn-primary" onClick={()=>setCount(count+1)}>Increase</button>
            <button type="button" class="btn btn-secondary" onClick={()=>setCount(count-1)}>Decrease</button>
        </div>
        </>
    )
}

export default Home;