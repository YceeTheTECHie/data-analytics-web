import React from 'react';
import NavBar from './Layout/NavBar'
import tabimg from '../images/960.jpg'
import whatdata from '../images/whatdata.jpg'
import dataways from '../images/dataways.jpg'
import dataedu from '../images/dataedu.jpg'
import datajob from '../images/datajob.jpg'
import datafin from '../images/datafin.jpg'
import trend from '../images/trend.jpg'
import databusiness from '../images/databusiness.jpg'
import { Link } from 'react-router-dom';
const Articles = () => (

    <React.Fragment>
        <NavBar />
        <h2 className="text-center articles">Articles</h2>

        <div className="container">
            <div className="row">
                <br />
                <div className="col-sm-3">
                            <div className="card">
                            <img src={tabimg} class="card-img-top" alt="tabimg"/>
                        <div className="card-body">
                            <h6 className="headline card-title">What Data Analytics Will Look Like in 2021</h6>
                            
                                <Link to="/article1" className="card-text">2020 has been a tumultuous year for many companies, but one area that has seen consistent and ...</Link>
                            </div>
                            </div>
                            <div className="card" >
                            <img src={whatdata} class="card-img-top" alt="whatdata"/>
                        <div className="card-body">
                            <h6 className="headline card-title">Why Every Organization Needs A Data Analyst</h6>
                                <Link to ="/article2" className="card-text">  There is so much hype around the data scientist role these days that when a company needs a...</Link>
                            </div>
                    </div>

                </div>
                <div className="col-sm-3">
                                        <div className="card">
                            <img src={datajob} className="card-img-top" alt="datajob"/>
                        <div class="card-body">
                            <h6 className="headline card-title">11 High-Paying Data Analytics Jobs in 2020</h6>
                            
                                <Link to="/article3" className="card-text">There’s never been a better time to learn data analytics and enter the workforce as a data scientist...</Link>
                            </div>
                            </div>
                            <div class="card" >
                            <img src={dataways} className="card-img-top" alt="dataways"/>
                        <div className="card-body">
                            <h6 className="headline card-title">Unlock The Values Of Data With Data Analytics</h6>
                        
                                <Link to="/article4" className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</Link>
                            </div>
                            </div>
                            
                </div>
        
                <div className="col-sm-3">
                                        <div className="card">
                            <img src={databusiness} className="card-img-top" alt="databusiness"/>
                        <div className="card-body">
                            <h5 className="headline">Use Data Analytics To Drive  Business Insights</h5>
                            
                                <Link to="/article5" className="card-text">It is no secret that data analytics can prove to be exponentially valuable for ...</Link>
                            </div>
                            </div>
                            <div className="card">
                            <img src={trend} className="card-img-top" alt="trend"/>
                        <div className="card-body">
                            <h5 className="headline">Big trends In Data Analytics</h5>
                            
                                <Link to="/article6" className="card-text">Data analytics is the process by which data is deconstructed and examined for useful patterns...</Link>
                            </div>
                            </div>
                </div>
        
                <div className="col-sm-3">
                                        <div className="card">
                        <img src={dataedu} className="card-img-top" alt="dataedu"/>
                        <div className="card-body">
                            <h5 className="headline">Benefits Of Data Analytics In Education</h5>
                                <Link to="/article7" className="card-text">Your institution’s most powerful tool is something you’ve already been collecting for years: Big data.</Link>
                            </div>
                            </div>
                            <div className="card" >
                            <img src={datafin} className="card-img-top" alt="datafin"/>
                        <div class="card-body">
                            <h5 className="headline">Why Is Data Analytics In Fintech So Powerful?</h5>
                            <Link to="/article8" className="card-text">Did you know that 90% of the world’s data was created in the last two years?</Link>
                            </div>
                            </div>
                           
                </div>
        
        

                </div>
            </div>

    </React.Fragment>
);

export default Articles;