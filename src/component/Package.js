
import '../Packagepage.css';
import Increment from './Increment';

const btReactForm = () => (
<div className="container mt-auto p-5">
<h2 class="heading">Fraser, here is your tailored <br/> package</h2><br/>
    <p class="recommend">We recommend:</p>
<div sm={3} className="d-flex align-items-center justify-content-center">
<div class="custom-card">
<div class="custom-container top custom-center ">
    <h2><b>£43.29</b></h2> 
    <p>per month</p> 
  </div>
  <div class="custom-container bottom">
    <h3>67</h3><span class="mb-class">Mb</span>
    <p class="recommend"><span >Unlimited data</span> <br/>across all devices</p>
   <button class="button">Buy Today</button>
  </div>
</div>
</div>
<Increment/>

</div>
);

export default btReactForm;