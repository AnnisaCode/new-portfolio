import React, { useEffect, useState } from 'react';
import './styles.css';

function App() {
    const [iframeSrc, setIframeSrc] = useState('');

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const projectModal = document.getElementById('projectModal');

        projectModal.addEventListener('show.bs.modal', function (event) {
            const button = event.relatedTarget;
            const projectId = button.getAttribute('data-project-id');
            let src = '';

            switch (projectId) {
                case '2':
                    src = 'https://annisacode.github.io/ReadList/';
                    break;
                case '4':
                    src = 'https://annisacode.github.io/weatherapp/';
                    break;
                case '5':
                    src = 'https://annisacode.github.io/calculator/';
                    break;
                case '6':
                    src = 'https://annisacode.github.io/tictactor-vs-bot/';
                    break;
                case '8':
                    src = 'https://annisacode.github.io/Reminder-App/';
                    break;
                case '10':
                    src = 'https://annisacode.github.io/CMS-FrontEnd/';
                    break;
                default:
                    break;
            }
            setIframeSrc(src);
        });

        projectModal.addEventListener('hidden.bs.modal', function () {
            setIframeSrc('');
        });
    }, []);

    return (
        <div>
            <header className="bg-dark text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold mb-3">Annisa</h1>
                    <p className="lead fs-5 mb-0">Innovative and Versatile IT Professional</p>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: '#212529' }}>
                <div className="container">
                    <span className="navbar-brand fw-bold" onClick={scrollToTop}>Portfolio</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link fs-5 px-3 py-2" href="#about" id="aboutLink">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 px-3 py-2" href="#skills" id="skillsLink">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 px-3 py-2" href="#projects" id="projectsLink">My Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 px-3 py-2" href="#testimonials" id="testimonialsLink">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 px-3 py-2" href="#contact" id="contactLink">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <section id="about" className="py-5">
                <div className="container">
                    <h2 className="text-center">About Me</h2>
                    <p className="text-center">
                        I am a lifelong learner and passionate developer, eager to explore new technologies beyond front-end development. With a strong foundation in HTML, CSS, JavaScript, and Bootstrap, I excel at creating clean, responsive, and user-friendly websites.
                        Recently, I embraced React JS, transforming my web portfolio using this framework. My commitment to continuous learning drives me to delve into back-end development with SQL and PostgreSQL, adopt Agile methodologies, and leverage AI tools to enhance my projects.
                        I have a keen eye for debugging front-end issues, ensuring smooth and efficient applications. I thrive in collaborative environments and am always ready for new challenges and innovation, making me a cheerful and approachable team player.
                    </p>
                </div>
            </section>

            <section id="skills" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-4">Technical Skills</h2>
                    <div id="skillsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <h3 className="text-center mb-4">Front-End Skills</h3>
                                <div className="row">
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-html5 fa-3x mb-3"></i>
                                                <h5 className="card-title">HTML</h5>
                                                <p>Skilled in HTML to structure and present content effectively on the web.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-css3-alt fa-3x mb-3"></i>
                                                <h5 className="card-title">CSS</h5>
                                                <p>Expertise in CSS to style web pages and create visually appealing layouts.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-js-square fa-3x mb-3"></i>
                                                <h5 className="card-title">JavaScript</h5>
                                                <p>Proficient in JavaScript for creating dynamic and interactive web applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-bootstrap fa-3x mb-3"></i>
                                                <h5 className="card-title">Bootstrap</h5>
                                                <p>Experience with Bootstrap to design responsive and mobile-first web applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-react fa-3x mb-3"></i>
                                                <h5 className="card-title">React JS</h5>
                                                <p>Proficient in React JS for building reusable components and managing complex state in web applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-bug fa-3x mb-3"></i>
                                                <h5 className="card-title">Debugging</h5>
                                                <p>Skilled in debugging front-end issues to ensure smooth and efficient applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">Back-End Skills</h3>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-database fa-3x mb-3"></i>
                                                <h5 className="card-title">SQL</h5>
                                                <p>Experienced in SQL for database management and data manipulation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <a href="https://www.udemy.com/certificate/UC-f7574a4e-69d5-4827-bf11-d289c42e84f3/" target="_blank" rel="noreferrer" className="text-decoration-none">
                                            <div className="card text-center shadow-sm">
                                                <div className="card-body">
                                                    <i className="fab fa-java fa-3x mb-3"></i>
                                                    <h5 className="card-title">Spring Boot</h5>
                                                    <p>Proficient in Spring Boot for creating robust back-end services.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-database fa-3x mb-3"></i>
                                                <h5 className="card-title">MySQL</h5>
                                                <p>Skilled in MySQL for designing and maintaining databases.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">AI-Assisted Web Development Skills</h3>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-brain fa-3x mb-3"></i>
                                                <h5 className="card-title">AI-Assisted Development</h5>
                                                <p>Utilizing AI tools to enhance web development processes.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-robot fa-3x mb-3"></i>
                                                <h5 className="card-title">Leveraging AI Tools</h5>
                                                <p>Using AI for improved efficiency in coding tasks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-tools fa-3x mb-3"></i>
                                                <h5 className="card-title">AI Assistance in Coding</h5>
                                                <p>Employing AI to assist in the coding process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">DevOps Skills</h3>
                                <div className="row">
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-code-branch fa-3x mb-3"></i>
                                                <h5 className="card-title">Version Control</h5>
                                                <p>Experience with version control systems like Git for source code management.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-cogs fa-3x mb-3"></i>
                                                <h5 className="card-title">Agile Methodologies</h5>
                                                <p>Knowledgeable in Agile methodologies for efficient project management.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-tasks fa-3x mb-3"></i>
                                                <h5 className="card-title">Scrum</h5>
                                                <p>Proficient in Scrum framework for iterative and incremental project delivery.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-users fa-3x mb-3"></i>
                                                <h5 className="card-title">Team Work</h5>
                                                <p>Strong team player with excellent collaboration skills.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">Tools and Platforms</h3>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fab fa-git fa-3x mb-3"></i>
                                                <h5 className="card-title">Git</h5>
                                                <p>Proficient in using Git for version control and collaboration on code
                                                    projects.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-laptop-code fa-3x mb-3"></i>
                                                <h5 className="card-title">Visual Studio</h5>
                                                <p>Experienced in using Visual Studio for coding, debugging, and developing
                                                    applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">Additional Skills</h3>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-tools fa-3x mb-3"></i>
                                                <h5 className="card-title">Technical Support</h5>
                                                <p>Skilled in providing technical support and troubleshooting issues.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-chart-line fa-3x mb-3"></i>
                                                <h5 className="card-title">Data Visualization</h5>
                                                <p>Experienced in visualizing data to make insights easily understandable.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-crosshairs fa-3x mb-3"></i>
                                                <h5 className="card-title">Performance Optimization</h5>
                                                <p>Expertise in optimizing the performance of web applications.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <h3 className="text-center mb-4">More Additional Skills</h3>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm">
                                            <div className="card-body">
                                                <i className="fas fa-file-alt fa-3x mb-3"></i>
                                                <h5 className="card-title">Technical Documentation</h5>
                                                <p>Proficient in creating clear and concise technical documentation.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><button className="carousel-control-prev" type="button" data-bs-target="#skillsCarousel"
                            data-bs-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span
                                className="visually-hidden">Previous</span></button><button className="carousel-control-next"
                                    type="button" data-bs-target="#skillsCarousel" data-bs-slide="next"><span
                                        className="carousel-control-next-icon" aria-hidden="true"></span><span
                                            className="visually-hidden">Next</span></button>
                    </div>
                </div>
            </section>
            <section id="projects" className="py-5 bg-dark">
                <div className="container">
                    <h2 className="text-center text-white mb-4">My Projects</h2>
                    <div id="projectsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-cash-register fa-5x mb-3"></i>
                                                <h5 className="card-title">Cashier Application</h5>
                                                <p className="card-text">A simple cashier system for managing sales and inventory.</p>
                                                <a href="https://annisacode.github.io/Cashier/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-book fa-5x mb-3"></i>
                                                <h5 className="card-title">Collection Marker Application</h5>
                                                <p className="card-text">Track and manage book collections with this app.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="2">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-tasks fa-5x mb-3"></i>
                                                <h5 className="card-title">To-Do List Application</h5>
                                                <p className="card-text">A simple app to organize and manage daily tasks.</p>
                                                <a href="https://annisacode.github.io/todolist/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-cloud-sun fa-5x mb-3"></i>
                                                <h5 className="card-title">Weather Application</h5>
                                                <p className="card-text">Get the latest weather updates in your area.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="4">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-calculator fa-5x mb-3"></i>
                                                <h5 className="card-title">Calculator Application</h5>
                                                <p className="card-text">A basic calculator app for performing simple calculations.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="5">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-gamepad fa-5x mb-3"></i>
                                                <h5 className="card-title">Game Tic Tac Toe vs Bot</h5>
                                                <p className="card-text">Challenge yourself against a bot in this classic Tic Tac Toe game.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="6">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-gamepad fa-5x mb-3"></i>
                                                <h5 className="card-title">Memory Match Game</h5>
                                                <p className="card-text">Test your memory skills by matching all the pairs of cards!</p>
                                                <a href="https://annisacode.github.io/Memory-Match/" target="_blank" rel="noreferrer" className="btn btn-primary">View Project</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-calendar-alt fa-5x mb-3"></i>
                                                <h5 className="card-title">Reminder App</h5>
                                                <p className="card-text">Never miss an important task with our easy-to-use reminder application.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="8">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 mb-4">
                                        <div className="card text-center shadow-sm border-0">
                                            <div className="card-body">
                                                <i className="fas fa-file-alt fa-5x mb-3"></i>
                                                <h5 className="card-title">Content Management System</h5>
                                                <p className="card-text">Easily manage and organize your content with our user-friendly CMS. Create, edit, and delete content efficiently.</p>
                                                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#projectModal" data-project-id="10">View Project</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#projectsCarousel"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#projectsCarousel"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="projectModalLabel">Project Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe id="projectIframe" title="Project Iframe" src={iframeSrc} width="100%" height="500px"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <section id="testimonials" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">What People Say</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card testimonial-card shadow-lg border-0 mb-4">
                                <div className="card-body">
                                    <i className="fas fa-quote-left quote-icon mb-3 text-muted"></i>
                                    <p className="card-text">"Annisa is a hard-working individual who learns quickly. Her ability to adapt and deliver results in a short amount of time is impressive. She's a valuable asset to any team."</p>
                                    <p className="card-text job-title"><strong>Senior Computer Programmer</strong>, <span className="text-muted">Polibatam Software Team</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card testimonial-card shadow-lg border-0 mb-4">
                                <div className="card-body">
                                    <i className="fas fa-quote-left quote-icon mb-3 text-muted"></i>
                                    <p className="card-text">"Annisa is quick to adapt to new environments and works exceptionally well within teams. She is a hard worker and highly skilled at handling and processing documents efficiently. Her ability to manage multiple tasks is a great asset."</p>
                                    <h5 className="card-title mb-0">Gilang Bagus</h5>
                                    <p className="card-text job-title"><strong>Web Developer</strong>, <span className="text-muted">Polibatam Software Team</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card testimonial-card shadow-lg border-0 mb-4">
                                <div className="card-body">
                                    <i className="fas fa-quote-left quote-icon mb-3 text-muted"></i>
                                    <p className="card-text">"Annisa is an exemplary team member who consistently provides valuable support across various projects. Her diverse skill set and dedication make her an asset to any team. She handles a wide range of tasks with professionalism and hard work, and her adaptability is truly commendable."</p>
                                    <p className="card-text job-title"><strong>Senior Software Engineer</strong> at <span className="text-muted">a growing tech company</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id="contact" className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center mb-5">Get in Touch</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            <p className="lead">I'm always excited to connect with new people and explore opportunities. Whether you have a question, a project, or just want to say hello, feel free to reach out!</p>
                            <a href="https://www.linkedin.com/in/annisa1202/" className="btn btn-primary btn-lg mt-3">
                                <i className="fab fa-linkedin fa-lg me-2"></i>Connect with me on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-dark text-white text-center py-4">
                <div className="container">
                    <p className="mb-2">&copy; 2025 Annisa. All rights reserved.</p>
                    <p className="mb-0">Designed with <i className="fas fa-heart text-danger"></i> by Annisa</p>
                </div>
            </footer>

        </div>
    );
}

export default App;