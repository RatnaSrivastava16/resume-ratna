
import './Experience.css';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import js from '../../assets/js.png';
import css from '../../assets/css.png';
import html from '../../assets/html.png';
import python from '../../assets/python.png';
import jupyter from '../../assets/jupyter.png';

export default function Experience(){

    const statements = [
        "1. I am currently advancing through my BTech Computer Science and Engineering program at Lovely Professional University, having recently completed my second year with a strong focus on building a solid academic foundation in computer science and engineering principles.",
        "2. My specialization in Machine Learning has equipped me with a deep understanding of algorithms, statistical modeling, and data analytics techniques crucial for developing intelligent systems and predictive models.",
        "3.Throughout my coursework, I have gained practical, hands-on experience through projects that involve real-world applications of machine learning, reinforcing theoretical concepts with practical implementation and also provide me opportunity to network with fellow aspiring developers and industry experts",
        "4.I actively engage in research initiatives within the field, exploring emerging trends such as neural networks, deep learning, and natural language processing. This pursuit drives my passion for innovation and keeps me abreast of industry advancements. ",
        "5.With a clear focus on leveraging my skills in machine learning, I aim to pursue a career path where I can contribute to cutting-edge technological advancements, particularly in sectors like artificial intelligence, data science, and automation. ",
    ];

    const statements1 = [
        "1. This summer, I am dedicated to enhancing my skills in web development, specifically in the MERN stack (MongoDB, Express.js, React.js, Node.js). I have enrolled in a comprehensive short-term program at Cypher Schools to gain in-depth knowledge and hands-on experience in these cutting-edge technologies.",
        "2. Cypher Schools offers a structured online learning environment where expert instructors will cover all aspects of the MERN stack. This includes frontend development with React.js, backend development with Node.js and Express.js, and database management with MongoDB.",
        "3.The program includes practical projects designed to reinforce theoretical concepts and develop real-world applications. These projects will allow me to apply MERN stack technologies to solve complex problems.",
        "4.Through online classes and interactive sessions, I will have the opportunity to network with fellow aspiring developers and industry experts. This networking can potentially lead to collaborations, mentorships, and valuable connections within the tech community. ",
        "5.Beyond technical skills, participating in this program will foster my personal growth by enhancing my discipline, time management, and ability to adapt to new technologies and learning environments. ",
    ];
    const statements2 = [
        "1. Securing an internship through Internshala provided me with a valuable opportunity to delve deep into the field of machine learning, a pivotal area of interest within my academic and career pursuits.",
        "2. The internship included structured modules on supervised and unsupervised machine learning algorithms. These modules were designed to impart theoretical knowledge and practical skills essential for developing intelligent systems and predictive models.",
        "3.Throughout the internship, I engaged in hands-on projects aimed at applying theoretical concepts to real-world scenarios. These projects not only reinforced my understanding but also sharpened my problem-solving abilities in machine learning applications.",
        "4.To gauge my proficiency, I successfully completed five projects and a final test comprising multiple-choice questions (MCQs). Achieving an 'O' grade (Outstanding) in the final assessment underscored my grasp of the subject matter and dedication to mastering machine learning concepts. ",
        "5.Beyond academic achievements, the internship significantly contributed to my professional growth. It equipped me with practical skills, such as data preprocessing, model evaluation, and algorithm selection, which are vital in today's data-driven industries. ",
    ];


    const iconImages = [html, css, js];
    const iconImages1 = [python, jupyter];
    return (
        <div className='experience_container'> 

            <p className='experience_title'>Experience</p>

            <div className='experience_cards_container'>

                <ExperienceCard
                    companyName = "Lovely Professional University"
                    designation = 'Student'
                    statements={statements}
                    iconImages={iconImages}
                
                />

                    <ExperienceCard
                    companyName = "Cipher Schools"
                    designation = 'Student'
                    statements={statements1}
                    iconImages={iconImages}
                
                />
                   <ExperienceCard
                    companyName = "Internshala"
                    designation = 'Intern'
                    statements={statements2}
                    iconImages={iconImages1}
                
                />
            </div>
        </div>
    )
}