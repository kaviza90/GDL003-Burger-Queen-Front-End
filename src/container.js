import React from 'react'

export default class Container extends Component {
  render() {
    return (
       <div className="container">
        <div className="col-xs-12">
        <h1>My Todos</h1>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Example Todo</h5>
              <h6 className="card-subtitle mb-2 text-muted">Completed</h6>
            </div>
          </div>
        </div>
       </div>
    );
  }
}
