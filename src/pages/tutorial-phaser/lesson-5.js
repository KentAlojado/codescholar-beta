import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/phaser-a.jpg";
import HTMLImgB from "../../images/phaser-b.jpg";
import HTMLImgC from "../../images/phaser-c.jpg";
import HTMLImgD from "../../images/phaser-d.jpg";
import HTMLImgE from "../../images/phaser-e.jpg";
import HTMLImgF from "../../images/phaser-f.jpg";
const TutorialPhaserPage5 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-phaser/">Introduction to Phaser 3</a></li>
<li><a href="/tutorial-phaser/lesson-2">Cross-platform Game</a></li>
<li><a href="/tutorial-phaser/lesson-3">What is HTML5?</a></li>
<li><a href="/tutorial-phaser/lesson-4">What is Phaser?</a></li>
<li className="current-link">Using Phaser</li>
<li><a href="/tutorial-phaser/lesson-6">Lesson</a></li>
<li><a href="/tutorial-phaser/lesson-7">Lesson</a></li>
<li><a href="/tutorial-phaser/lesson-8">Lesson</a></li>
<li><a href="/tutorial-phaser/lesson-9">Lesson</a></li>
<li><a href="/tutorial-phaser/lesson-10">Lesson</a></li>
<li><a href="/tutorial-phaser/lesson-11">Lesson</a></li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Using Phaser?</h4>
<p>Finally, it's time to download <a href="http://www.phaser.io/download/stable" target="_blank">Phaser</a> and you are ready to go.
In the official download page you will find various options to get your Phaser version, both with npm or through a CDN, but let's keep things simple and just download phaser.min.js file.</p>
<p><img src={HTMLImgA} alt="Download Phaser"/></p>
<p>This is the only file you need to have in order to create your HTML5 game powered by Phaser.</p>
<p><b>The structure of your first Phaser project</b></p>
<p>As said, every HTML5 game is a web page with some magic in it, so we are going to create a new folder which will contain the entire game.
The folder will contain the web page itself, the Phaser framework we just downloaded, and every other game file we will need as soon as the game gets more complex and needs more resources like sprites, backgrounds, sound effects and so on.
Done with the creation of the folder?</p>
<p>Create an index.html file which will be the web page you will call to launch the game, and you'll have all you need to start writing the first lines of code of your Phaser game.</p>
<p>If you followed all instructions, the folder containing your game should look like this:</p>
<p><img src={HTMLImgB} alt="Download Phaser"/></p>
<p>Now let's edit index.html:<br/><img src={HTMLImgC} alt="Code Phaser"/></p>
<p>As you can see, it's just an empty web page calling two JavaScript files: phaser.min.js is the file we just downloaded, and game.js will contain our game script.</p>
<p>Now create a new file, call it game.js and write this code:<br/><img src={HTMLImgD} alt="Code Phaser"/></p>
<p>Congratulations, you just created your first Phaser script. And this is how your game folder should look like now:<br/><img src={HTMLImgE} alt="Code Phaser"/></p>
<p>We will write the entire game code into game.js file.</p>
<p>Writing the whole game code into a single file may seem a malpractice, because the code would be way more understandable if organized in more files, such as a file for the configuration, a file handling player input, and so on.</p>
<p>The drawback is most game sponsors want the entire game to fit in just one file and probably won't accept the submission of your game if your code is scattered through a dozen files.</p>
<p>Since finding a sponsor – which means finding someone willing to pay for our hard work – is a top priority, that's why we are going to write the entire code in one single file.</p>
<p>Back to our code, let's see what these lines mean:<br/>
The onload event for the window fires after all objects in the DOM hierarchy (images, scripts, frames, and so on) have finished loading and the document object has been built up.</p>
<p>It checks for everything to be loaded, then calls the callback function.</p>
<p><em>A JavaScript function is a block of code designed to perform a particular task, executed when "something" invokes it. When you make something to execute a function, we say you call the function.<br/>
A function can contain any number of lines, and we use curly brackets to define the start and the end of a function, or more in general, the start and the end of a block of code.</em></p>
<p>Inside the function, there's only one line of code which initializes game variable as a new Phaser.Game instance:<br/><img src={HTMLImgF} alt="Code Phaser"/></p>
<p><em>A JavaScript variable is a container for storing data values. When you create a variable we say you declare a variable, using the var keyword. You assign a value to a variable with = operator. A JavaScript object is a particular kind of variable which can contain many values.</em></p>
<p>Translating what we done in English, it means “once the entire document has been loaded, create a new Game object and assign it to a variable called game.”</p>
<p>Well, this is our first Phaser game, so let's run it and see what happens.</p>
<p className="bg-cs lft">
<a href="/tutorial-phaser/lesson-6" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialPhaserPage5
