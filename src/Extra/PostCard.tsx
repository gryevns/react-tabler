import React from "react";

import Card from "../Card";

export const PostCard = () => (
    <Card className="card-aside">
        <a
            href="#"
            className="card-aside-column"
            style={{ backgroundImage: "url(https://picsum.photos/500/200)" }}
        ></a>
        <Card.Body>
            <h4>
                <a href="#">And this isn't my nose. This is a false one.</a>
            </h4>
            <div className="text-muted">
                Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you
                suggesting that coconuts migr...
            </div>
            <div className="d-flex align-items-center pt-5 mt-auto">
                <div
                    className="avatar avatar-md mr-3"
                    style={{ backgroundImage: "url(https://picsum.photos/64)" }}
                ></div>
                <div>
                    <a href="#" className="text-default">
                        Rose Bradley
                    </a>
                    <small className="d-block text-muted">3 days ago</small>
                </div>
                <div className="ml-auto text-muted">
                    <a href="#" className="icon d-none d-md-inline-block ml-3">
                        <i className="fe fe-heart mr-1"></i>
                    </a>
                </div>
            </div>
        </Card.Body>
    </Card>
);

export default PostCard;
