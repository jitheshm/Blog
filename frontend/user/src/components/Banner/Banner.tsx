import React from 'react'
import { PostResponse } from '../Post/Post'
import Link from 'next/link'
function Banner({ post }: { post: PostResponse['data'][0] }) {

    return (
        <div className="banner-inner pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="thumb after-left-top">
                            <img src={post?.thumbnail} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="banner-details mt-4 mt-lg-0">
                            <div className="post-meta-single">
                                <ul>
                                    <li><a className="tag-base tag-blue" href="#">{post?.tag}</a></li>
                                    <li className="date"><i className="fa fa-clock-o" />{post?.dateOfPost}</li>
                                </ul>
                            </div>
                            <h2>{post?.title}</h2>
                            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> */}
                            <Link className="btn btn-blue" href={`/post/${post?._id}`}>Read</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner