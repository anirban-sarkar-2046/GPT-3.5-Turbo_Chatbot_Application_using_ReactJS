import React from "react";
import './Subscription.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Subscription = () => {
    return (
        <div className="wrapper">
            <h2>Pricing Plans</h2>
            <hr />
            <div className="single-price">
                <h1>Basic</h1>
                <div className="price">
                    <h2>$15<sub className="permonth">/mo</sub></h2>
                </div>
                <div class="deals">
                    <h4>&nbsp; &nbsp; &nbsp;- Unlimited messages</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Browsing</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Access on web, iOS, Android</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- 8K context window</h4> 
                    <h4>&nbsp; &nbsp; &nbsp;- Regular quality updates</h4>
                </div>
                <Link to="/subscription/creditcard">buy now</Link>
            </div>
            <div className="single-price">
                <h1>Standard</h1>
                <div className="price">
                    <h2>$35<sub className="permonth">/mo</sub></h2>
                </div>
                <div class="deals">
                    <h4>&nbsp; &nbsp; &nbsp;- Fast response time</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Voice input & output</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Image generation</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Advanced Data Analysis</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- 32K context window</h4>
                </div>
                <Link to="/subscription/creditcard">buy now</Link>
            </div>
            <div className="single-price">
                <h1>Premium</h1>
                <div className="price">
                    <h2>$55<sub className="permonth">/mo</sub></h2>
                </div>
                <div class="deals">
                    <h4>&nbsp; &nbsp; &nbsp;- Dedicated workspace</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Unified billing</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Admin console</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Bulk member management</h4>
                    <h4>&nbsp; &nbsp; &nbsp;- Admin roles</h4>
                </div>
                <Link to="/subscription/creditcard">buy now</Link>
            </div>
        </div>     
    )
};

export default Subscription;