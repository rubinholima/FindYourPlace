import React from './node_modules/react';
import './review.css';
export default class Review extends Component {
    render() {
        return (
            <div id="contact_form">
                <div id="main" className="row"></div>
                <section className="contact-section">
                    <div className="container">
                        <div className="row d-flex mb-5 contact-info justify-content-center">
                            <div id="contact_cont" className="col-md-8">
                                <div class="row mb-5">
                                    <div className="col-md-4 text-center py-4">
                                        <div className="icon">
                                            <i className='far fa-map'></i>
                                        </div>
                                        <p><span>Address:</span> 768 Park ave, Cambridge MA 02343</p>
                                    </div>
                                    <div className="col-md-4 text-center border-height py-4">
                                        <div className="icon">
                                            <i class='fas fa-phone'></i>
                                        </div>
                                        <p><span>Phone:</span> <a>1 800-fnd-place</a></p>
                                    </div>
                                    <div className="col-md-4 text-center py-4">
                                        <div className="icon">
                                            <i className='fas fa-envelope'></i>
                                        </div>
                                        <p><span>Email:</span> <a>mail@findyourplace.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row block-9 justify-content-center mb-5">
                            <div className="col-md-8 mb-md-5">
                                <h2 className="text-center">If you got any questions please do not hesitate to send
                                        us a
                                        message
                            </h2>
                                <form action="#" className="bg-light p-5 contact-form">
                                    <div class="form-group">
                                        <input type="text" id="name" className="form-control" placeHolder="Your Name"></input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="email" className="form-control" placeHolder="Your Email">
                                        </input>
                                    </div>
                                    <div class="form-group">
                                        <input type="text" id="subject" className="form-control" placeHolder="Subject">
                                        </input>
                                    </div>
                                    <div class="form-group">
                                        <textarea name="" id="message" cols="30" rows="7" className="form-control"
                                            placeHolder="Message"></textarea>
                                    </div>
                                    <div id="sub_contact" className="text-right">
                                        <button type="submit" className="btn btn-primary btn-md" id="add-btn">
                                            <span className="fa fa-fire"></span> Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Review