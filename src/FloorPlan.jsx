import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return (
    <div className="FloorPlan">
      <Bath size="Half"/>
      <Kitchen/>
      <LivingRoom/>
      <Bedroom bedNum={1}/>
      <Bath size="Full"/>
      <Bedroom bedNum={2}/>
      <Bedroom bedNum={3}/>
    </div>
  )
}

export default FloorPlan