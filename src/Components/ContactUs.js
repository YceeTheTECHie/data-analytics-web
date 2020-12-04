import React from 'react';

const AboutUs = () => {
    function handleSubmit (e) {
        e.preventDefault();
        alert("Hello, we have your message received");
    }
    return (
    <section className="container-fluid contact-us">
        <div class="row">
            <h3 className=" contact-us-text text-center">Contact Us</h3>
            
            <div className="col-md-4">
            </div>
          
        </div>
        <br /><br />
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" required/>
                            </div>
                            <div class="form-group">
                                <input  className="form-control" placeholder="Email" type="email" required />
                            </div>
                            <div class="form-group">
                                <input type="text" className="form-control" placeholder="Phone" required/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="" id="message" cols="30" rows="7" className="form-control" placeholder="Message" required></textarea>
                            </div>
                            <div class="form-group">
                                    <button type="submit"    className="btn btn-primary btn-md">Send Message</button>
                            </div>
                        </div>
								
                    </div>
                </div>
						
            </div>
        </form>
	

    </section>
);
}
export default AboutUs;


