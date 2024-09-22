import React from "react";
import Event from './Event'

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        
                    </tr>
                </thead>

                <tbody>
                    
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='Breakfast🎩' color='green' location='Home'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color ='pink' location='Grand Station'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color ='blue' location='Park'/>
                        </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Pizza Party🍕' color='green' location='Joe Pizza'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event='Marathon🏃‍♂️‍➡️' color='blue' location='Central Park'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Lunch w friends🍔' color='green' location='7th Street'/>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event="Museum🖼️" color='blue' location='Time Square'/>
                        <td></td>
                        <td></td>
                        <Event event='Subway🚇' color='pink' location='NYC Station'/>
                        <td></td>
                        <td></td>
                        
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Horror night🎃' color='pink' location='Universal'/>
                        <td></td>
                        <td></td>
                        <Event event='Shopping 🏬🛍️' color='blue' location='Sawgrass Mall'/>
                        
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

export default Calendar;