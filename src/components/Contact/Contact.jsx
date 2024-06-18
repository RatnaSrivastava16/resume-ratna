import './Contact.css';

function Contact(){
    return(
        <div id="sec2">
        <div id="sec2-contact">
            <div id="sec2-image">
                <div id="sec2-contactimg"></div>
            </div>
            <div id="contact">
                <div id="connect">Connect</div>
                <div id="username"><input type="text" placeholder="Username"></input>
                </div>
                <div id="email"><input type="email" placeholder="E-mail"></input></div>
                <div id="phone"><input type="tel" placeholder="Phone No."></input></div>
                <div id="submit"><button>Submit</button></div>
            </div>
        </div>
    </div>
    )

}
export default Contact;