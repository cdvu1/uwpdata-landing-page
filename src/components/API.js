import React, { Component } from 'react';


export default class API extends Component {

    render() {

        let json = [
            {
              "case_number": "2016-00001603",
              "reported_date": "2016-07-18 11:33:27",
              "offense_desc": "Bike Parts Theft <$750",
              "address": "3751 W STEVENS WAY NE ",
              "common_name": "Kincaid Hall",
              "case_occured_from_date": "2016-07-18 09:30:00",
              "case_occured_through_date": "2016-07-18 11:30:00",
              "case_disposition": "Closed"
            },
            {
              "case_number": "2016-00001625",
              "reported_date": "2016-07-18 15:54:33",
              "offense_desc": "Malicious mischief in the third degree",
              "address": "3681 NE 41ST ST ",
              "common_name": "Urban Horticulture Field House",
              "case_occured_from_date": "2016-07-18 14:20:00",
              "case_occured_through_date": "2016-07-18 17:00:00",
              "case_disposition": "Closed"
            }
        ];
        
        let jsonStr = JSON.stringify(json);

        return (
            <div className='api'>
                <div className="api-intro">
                    <div className="api-header">MEET THE API</div>
                    
                    <div className="api-cards">
                        <div className="api-card">
                            <img src={require("../pics/access-control.png")} />
                            <div className="card-title">Access Controlled</div>
                            <div>Allows for access to only parts of the data that can be shared, can be used internally and externally</div>
                        </div>
                        <div className="api-card">
                            <img src={require("../pics/admin.jpg")} />
                            <div className="card-title">Administation</div>
                            <div>Grant and revoke access with an easy to use front end, where one can see everyone that has access to the data</div>
                        </div>
                        <div className="api-card">
                            <img src={require("../pics/research.png")} />
                            <div className="card-title">Empower Research</div>
                            <div className="api-card-text">Will allow future groups to leverage this API for even more research to better protect the UW community</div>
                        </div>
                    </div>
                </div>

                <div className="documentation">
                    <div className="api-header">API DOCUMENTATION</div>
                    <div className="api-call-section">
                        <div>API Calls</div>
                        <div className="api-call-div">All: <span className="api-call">/</span></div>
                        <div className="api-call-div">Filter by Date: <span className="api-call">/date?from=YYYY-MM-DD&to=YYYY-MM-DD</span></div>
                        <div className="api-call-div">Filter by Campus Region: <span className="api-call">/region?region=main campus</span></div>
                        <br /> <br />
                        <div className="">API Response</div>
                        <pre>
                            <code>
                                <div>[</div>
                                <div className="indent1">&#123;</div>
                                <div className="indent2">"case_number": "string",</div>
                                <div className="indent2">"reported_date": "string",</div>
                                <div className="indent2">"offense_desc": "string",</div>
                                <div className="indent2">"address": "string",</div>
                                <div className="indent2">"common_name": "string",</div>
                                <div className="indent2">"case_occured_from_date": "string",</div>
                                <div className="indent2">"case_occured_through_date": "string"</div>
                                <div className="indent1">&#125;,</div>
                                <div>]</div>
                            </code>
                        </pre>
                    </div>
                </div> 
            </div>
        );
    }
}