import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-section left">
                <h3>Lab Overview</h3>
                <p>
                    The main motive of this virtual lab is to fill the gap in visualization of the electromagnetic fields. Experiments in the lab are created by using Finite Element Method (FEM) and Matlab-based analytical outcomes of some common practical applications.
                </p>
            </div>

            <div className="footer-section center">
                <h3>Contact</h3>
                <p>
                    Virtual Electromagnetic Team<br />
                    Address: Field Computation Laboratory, EE Dept., IIT Bombay, Mumbai<br />
                    Telephone: 022 2576 4424<br />
                    E-mail: <a href="mailto:vel@ee.iitb.ac.in">vel@ee.iitb.ac.in</a>
                </p>
            </div>

            <div className="footer-section right">
                <h3>More Links</h3>
                <ul>
                    <li><a href="https://www.ee.iitb.ac.in/~fclab/">Field Computation Laboratory</a></li>
                    <li><a href="https://www.ee.iitb.ac.in/~idlab/">Insulation Diagnostics Laboratory</a></li>
                    <li><a href="https://www.ee.iitb.ac.in/web">Electrical Department</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
