import React from 'react';
import './Orders.scss';

const Orders = () => {

  const currentUser = {
    id: 1,
    username: "John Doe",
    isSeller: true
  }

  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>

        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
            <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>5</td>
            <td>Maria Andres</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>

          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>11</td>
            <td>Francisco Chang</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>20</td>
            <td>Roland Mendel</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>11</td>
            <td>Helen Bennett</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>15</td>
            <td>Yoshi Tannamuri</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>

          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>9</td>
            <td>Giovanni Rovelli</td>
            <td>
            <img className="message" src="./images/message.png" alt="" />
            </td>
          </tr>


        </table>
      </div>
    </div>
    
  )
}

export default Orders;