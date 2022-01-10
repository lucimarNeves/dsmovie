import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import "./styles.css"


function NavBar() {

    return (

        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">

                    <h1 className="dsmovie-title"> DSMovie</h1>
                    <a href="https://github.com/lucimarNeves">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link"> /lucimarNeves </p>
                        </div>
                    </a>

                </div>
            </nav>
        </header>
    );
}


export default NavBar;

