
import './HomePage.css';
import githubIcon from  '../../assets/github.png';
import linkedinIcon from '../../assets/linkedin.png';
function HomePage(){

    return (
        <div className='homepage_container'>
           
           <div className='homepage_left'>
                <p className='homepage_left_h1'>
                        <span className='red_color'>Hi,</span> my name is
                </p>

                <p className='homepage_left_h2'>
                    Ratna Srivastava
                </p>

                <p className='homepage_left_h3'>
                    Pursuing B.tech at <span className='red_color'>Lovely Professional University</span>
                </p>

                <p className='homepage_left_description'>
                An innovative person with an aim to enhance the world in field of technology and a dependable person with having time management skill, knowledge in programming languages like Python, Java, C++, C. Proficient in HTML, CSS, and JavaScript, I enjoy creating dynamic and responsive web applications. I am deeply fascinated by the potential of machine learning and artificial intelligence. I am continuously expanding my knowledge in this field, working on projects that involve data analysis, predictive modelling, and algorithm development.
                </p>

                <div>
                    <a href='https://github.com/RatnaSrivastava16' target='_blank'>
                        <img 
                            src={githubIcon}
                            alt='githubIconImage'
                            className='homepage_logo'
                        />
                    </a>
                    <a href='https://www.linkedin.com/in/ratna-srivastava16/' target='_blank'>
                        <img 
                            src={linkedinIcon}
                            alt='linkedinIconImage'
                            className='homepage_logo'
                        />
                    </a>
                </div>

                <a href='mailto:srivastavaratna1611@gmail.com'>
                    <buton className='homepage_left_button'>Get in Touch</buton>
                </a>
           </div>

           <div className='homepage_right'>
                <img src='https://i.pinimg.com/originals/68/ae/bf/68aebf4c71bd1d6090f87237272b01e5.gif' alt='GIF' />
           </div>
        </div>
    )
}

export default HomePage;