"use client"
import instance from '@/axios'
import { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
export type PostResponse = {
    success: boolean
    data: {
        _id: string
        title: string
        content: string
        tag: string
        thumbnail: string
        dateOfPost: string
    }[]

}
function Post() {


    const [posts, setPosts] = useState<PostResponse['data']>([])
    useEffect(() => {
        instance.get('/api/posts').then((res: AxiosResponse<PostResponse>) => {
            if (res.data.success) {
                setPosts(res.data.data)
            }
        })
    }, [])

    return (
        <div className="banner-area banner-inner-1 " id="banner">
            {/* banner area start */}
            <Banner post={posts[0]} />
            {/* banner area end */}
            <div className="container">
                <div className="row">
                    <>
                        {
                            posts.map((postObj, index) => {
                                return (
                                    <div key={postObj._id} className="col-lg-3 col-sm-6">
                                        <div className="single-post-wrap style-white">
                                            <div className="thumb">
                                                <img src={postObj.thumbnail} alt="img" />
                                                <a className="tag-base tag-blue" href="#">{postObj.tag}</a>
                                            </div>
                                            <div className="details">
                                                <h6 className="title"><a href="#">{postObj.title}</a></h6>
                                                <div className="post-meta-single mt-3">
                                                    <ul>
                                                        <li><i className="fa fa-clock-o" />{postObj.dateOfPost}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
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