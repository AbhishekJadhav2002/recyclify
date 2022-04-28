import { useGlobalContext} from '../Services/context';
import SingleOrder from './SingleOrder';
import SinglePastOrder from "./SinglePastOrder"


function PastOrders() {

          
const {orders}=useGlobalContext();
  
  return (
<div className='grid-2'>
{orders.map((val)=>{

return(
<div key={val.ID}>
 <SinglePastOrder orders={val}></SinglePastOrder>
</div>)
})}
</div>
)
}


export default PastOrders