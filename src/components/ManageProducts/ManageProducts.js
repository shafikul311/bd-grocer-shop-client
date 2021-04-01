import React from 'react';

const ManageProducts = () => {
    return (
        <div className="container p-1">
        <div className="row">
        <div className="col-3  bg-secondary">
            
            
            col-4</div>
          <div className="col-9  ">
              
              <h1>Manage Products</h1>
              <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </table>
              </div>
          
        </div>
      </div>
    );
};

export default ManageProducts;