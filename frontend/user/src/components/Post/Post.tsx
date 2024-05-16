import React from 'react'

function Post() {
    return (
        <div className="banner-area banner-inner-1 " id="banner">
            {/* banner area start */}
            <div className="banner-inner pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="thumb after-left-top">
                                <img src="assets/img/post/1.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <div className="banner-details mt-4 mt-lg-0">
                                <div className="post-meta-single">
                                    <ul>
                                        <li><a className="tag-base tag-blue" href="#">Tech</a></li>
                                        <li className="date"><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                                <h2>ReZoom outage left some people locked out.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <a className="btn btn-blue" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner area end */}
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/1.png" alt="img" />
                                <a className="tag-base tag-blue" href="#">Tech</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">The FAA will test drone detecting technologies in airports this year</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/2.png" alt="img" />
                                <a className="tag-base tag-orange" href="#">Food</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">Rocket Lab will resume launches no sooner than August 27th</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/3.png" alt="img" />
                                <a className="tag-base tag-blue" href="#">Tech</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">Google Drive flaw may attackers fool you into install malware</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="single-post-wrap style-white">
                            <div className="thumb">
                                <img src="assets/img/post/4.png" alt="img" />
                                <a className="tag-base tag-orange" href="#">Food</a>
                            </div>
                            <div className="details">
                                <h6 className="title"><a href="#">TikTok will sue the US over threatened ban</a></h6>
                                <div className="post-meta-single mt-3">
                                    <ul>
                                        <li><i className="fa fa-clock-o" />08.22.2020</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>

    )
}

export default Post