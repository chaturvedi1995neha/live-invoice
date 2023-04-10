import React from 'react'

function App() {
  return (
    
    <div className="my-5 page" size="A4" style={{width:"60%",height:"70%"}}>
        <div className="top-section">
            <div className="address">
                <div className="address-content">
                    
                    <h2>AMAZON</h2> <br/>
                    <p>Digitally singed by DS CLOUDTAIL INDIA PRIVATE LIMITED 1</p>
                    <p>Date:2019.12.06  08.18.58 UTC</p>
                    <p>Reason:Invoice</p>
                </div>
            </div>
            <div className="contact">
                <div className="contact-content">
                    <div className="email"> Email:amazon1234@gmail.com</div>
                    <div className="number"> Number: +729186321</div>
                </div>
            </div>
            

    </div>
    <div className="billing-invoice">
        
    
        <div className="des">
            <p className="code" >
               Invoice no : #67543233-CDE4567
            </p>
            
            <p className="issue">
               Issue Date : 14 April 2023
                </p>

        </div>
        <div className="billing-to">
            <div className=" title-to"> 
            <br/>
                <br/><br/><br/>
                <div className="neha">
                <p><b>From</b></p>
                <p>Client Name:Akash Sharma</p>
                <p>Adrdress:Paharganj galin no 3 delhi</p>
                <p>Pin code: 11425</p>
            </div>
            <div className="nehah" >
                    <p > To</p>
                    <p >Client Name:Sonu Sharma</p>
                    <p >Adrdress:Sector 18 noida (up)</p>
                    <p>Pin code:201301</p>
            </div>
        </div>
    </div>
</div>
<div className="table"> 
    <table>
        <tr >
            <th>#</th>
            <th>Product</th>
            <th>Qty</th>
            <th>GST slab</th>
            <th> Tax Appled</th>
            <th>Amount</th>
        </tr>
        <tr>
            <td>1</td>
            <td>jacket</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>100</td>
        </tr>
        <tr>
            <td>2</td>
            <td>jeans</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>200</td>
            </tr>
            <tr>
                <td>3</td>
                <td>cap</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>300</td>
                </tr>
                <tr>
            <td>4</td>
            <td>beg</td>
            <td>3</td>
            <td>5</td>
            <td>6</td>
            <td>400</td>  
        </tr>
        <tr>
        <td>5</td>
            <td>T-shirt</td>
            <td>3</td>
            <td>5</td>
            <td>6</td>
            <td>500</td>
        </tr>
       
    </table>
    <div className='total'>Total=1500</div>
    <div className='summary'> 
        <h3>Payment Method : UPI</h3>
        <p> <b>Subtotal</b> :1500 </p> 
        <p> <b>Total Tax </b> : 20%</p> 
        <p> <b>Adjustment</b> : 200</p>
        <p> <b>Grand Total </b>: 1950</p>
        
    </div>
</div>
</div>

  )
}

export default App
