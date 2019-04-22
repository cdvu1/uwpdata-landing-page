import React, { Component } from 'react';


export default class API extends Component {

    render() {
        return (
            <div className='api'>
                <div className="api-header">MEET THE API</div>
                
                <div className="api-cards">
                    <div>
                        <img src={require("../pics/access-control.png")} />
                        <div className="card-title">Access Controlled</div>
                        <div>Allows for access to only parts of the data that can be shared, can be used internally and externally</div>
                    </div>
                    <div>
                        <img src={require("../pics/admin.jpg")} />
                        <div className="card-title">Administation</div>
                        <div>Grant and revoke access with an easy to use front end, where one can see everyone that has access to the data</div>
                    </div>
                    <div>
                        <img src={require("../pics/research.png")} />
                        <div className="card-title">Empower Research</div>
                        <div>Will allow future groups to leverage this API for even more research to better protect the UW community</div>
                    </div>
                </div>
            </div>
        );
    }
}