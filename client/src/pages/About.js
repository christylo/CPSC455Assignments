import profilePic from "../images/christy.png";
import puppy from "../images/pupper.jpeg";
import disney from "../images/disney.JPG";
import picnic from "../images/picnic.JPG";
import water from "../images/water.JPG";

export default function About() {
    return (
        <div class="container">
            <div class="intro">
                <img class="profile-picture" src={profilePic} alt="Christy" />
                <h1>Hello! My name is Christy ✌️</h1>
                <p>I am an incoming 4th year studying business and computer science!</p>
            </div>
            <hr />
            <h2 class="heading">What is Memory Collection?</h2>
            <div class="about-grid">
                <div class="about-section">
                    <p>Memory Collection is a webpage for storing funny, happy, and random photos of everyday life!</p>
                    <p>Add, remove, or edit digital polaroids to revisit keepsake memories.</p>
                </div>
                <div class="about-section">
                    <p>Examples of photos to store:</p>
                    <ul class="about-list">
                        <li>🐕 doggos being doggos</li>
                        <li>🌱 picnics!</li>
                        <li>🌍 travel shenanigans</li>
                    </ul>
                </div>
            </div>
            <hr />
            <h2 class="heading">Highlights</h2>
            <div class="highlights-grid">
                <img class="highlights-image" src={puppy} alt="puppy" />
                <img class="highlights-image" src={disney} alt="Disney" />
                <img class="highlights-image" src={picnic} alt="picnic" />
                <img class="highlights-image" src={water} alt="water" />
            </div>
        </div>
    );
}