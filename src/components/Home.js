import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/boostrap.min.css';
import Visitors from './Visitors';

function Home() {
  return (
    <Fragment>
      <div style={{ margin: '10rem' }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Vehicle</th>
              <th>Entry</th>
              <th>Exit</th>
            </tr>
          </thead>
          <tbody>
            {Visitors && Visitors.length > 0
              ? Visitors.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Vehicle}</td>
                      <td>{item.Entry}</td>
                      <td>{item.Exit}</td>
                    </tr>
                  );
                })
              : 'No data available'}
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}
