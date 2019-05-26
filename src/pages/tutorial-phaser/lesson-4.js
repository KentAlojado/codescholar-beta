import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/html-pg-1-1.jpg";
import HTMLImgB from "../../images/html-pg-1-2.jpg";
const TutorialPhaserPage4 = () => (
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
<li className="current-link">What is Phaser?</li>
<li><a href="/tutorial-phaser/lesson-5">Using Phaser</a></li>
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
<h4>What is Phaser?</h4>
<p>Phaser is a free HTML5 game framework which aims to help developers make powerful, cross browser HTML5 games really quickly using JavaScript.</p>
<p>JavaScript, being a familiar and intuitive language, is one of the most common languages so even if you didn't already developed JavaScript applications you will find a lot of books and tutorials around the web to get you started.</p>
<p>Anyway, you don't need anything else than this book to build your first complete game, so let's start having some fun.</p>
<p><b>Ok, I am lost. HTML5, CSS, JavaScript, Phaser… too much stuff</b></p>
<p>Actually, it's way easier than you may think. Your final game will be a HTML5 game, but actually the only HTML5 element you will be using in your game is the <i className="fa fa-chevron-left"></i><b>canvas</b><i className="fa fa-chevron-right"></i> element, which is only a container for the graphics.</p>
<p>You will use JavaScript to draw and update the graphics, as well as to define the game design.</p>
<p>Phaser is the JavaScript framework which you will use to handle sprites, sound effects, graphic effects, explosions, screen updates and basically everything capable of making your game look nice, move smooth and sound good. CSS will be used for minor adjustments on the page which will host your game, mostly to define where <i className="fa fa-chevron-left"></i><b>canvas</b><i className="fa fa-chevron-right"></i> element should be placed.</p>
<p><b>Can I build games like GTA with Phaser?</b></p>
<p>To tell the truth, I don't know. Anyway, you shouldn't even think about it. The first rule in game development is: build a game you are able to finish.</p>
<p>And when I say “finish a game” I don't mean seeing the congratulations screen in GTA because you completed all missions, I mean coding a game from scratch until the end.</p>
<p>According to this concept, if you are a one-man studio or a small indie studio, you should pick a genre of game you are able to code from the beginning until the end, in a reasonable amount of time.</p>
<p>Start with small, casual games and remember casual games is a genre gaining more and more popularity.
Quitting the development of a game saying “ok, I was about to finish it, I'll just start another game because I have a better idea” is not finishing to develop a game. It's just quitting it.</p>
<p>Your game should be complete, tested enough to avoid bugs, and with the code written and organized in a way you can easily update it, should you want to add content later on.</p>
<p>Ready? Let's turn our computer into a game development workstation at no cost thanks to Phaser and some other free software.</p>
<p><b>Choosing a free text editor</b></p>
<p>In order to start coding games, you'll first need a software to write code. There are a lot of free offers:</p>
<p><b>Brackets</b> (<a href="http://brackets.io/" target="_blank">http://brackets.io/</a>)  is an open-source editor written in HTML, CSS, and JavaScript with a primary focus on web development and available for OS X, Windows, and Linux machines.</p>
<p><b>Atom</b> (<a href="https://atom.io/" target="_blank">https://atom.io/</a>) is the editor I am currently using for game development, open source and available for OS X, Windows, and Linux machines. It has everything I need, no more than the stuff I need and a nice selection of themes.</p>
<p><b>Sublime Text</b> (<a href="https://www.sublimetext.com/" target="_blank">https://www.sublimetext.com/</a>) is the editor the Phaser team used to build the framework and all projects. Available for OS X, Windows, and Linux machines, although it's not free it's the one Phaser team use, so you may want at least to try the evaluation version.</p>
<p><b>Visual Studio Code</b> (<a href="https://code.visualstudio.com/" target="_blank">https://code.visualstudio.com/</a>) is Microsoft's take on code editors available for Windows, OS X and Linux.</p>
<p>You are free to use one of the editors listed above, or one of the dozens editors you can find around the web. In my opinion you should choose one capable of highlighting JavaScript with some kind of auto complete.</p>
<p><b>Other free software you may need</b></p>
<p>Games basically are a collection of images and sounds which are moved and played accordingly to player actions and scripting logic, so during the development of the game you will also need to create and edit both images and sounds.</p>
<p><b>Audacity</b> (<a href="https://www.audacityteam.org/" target="_blank">https://www.audacityteam.org/</a>) is a great free software to work with sounds available for OS X, Windows and Linux.</p>
<p><b>Oceanaudio</b> (<a href="http://www.ocenaudio.com/" target="_blank">http://www.ocenaudio.com/</a>) is a cross-platform, easy to use, fast and functional audio editor. It is the ideal software for people who need to edit and analyze audio files without complications.</p>
<p><b>GIMP</b> (<a href="http://www.gimp.org/" target="_blank">http://www.gimp.org/</a>) is a powerful image editor available for OS X, Windows and Linux..</p>
<p><b>Krita</b> (<a href="https://krita.org/en/" target="_blank">https://krita.org/en/</a>) is a great open source painting software available for OS X, Windows and Linux. You may find it really useful in the creation of textures, concept art, illustrations and backgrounds.</p>
<p><b>Choosing a free web server</b></p>
<p>To test your Phaser games, and more in general to test most web applications, you will need to install a web server on your computer to override browser security limits when running your project locally.</p>
<p><b>WAMP</b> (<a href="http://www.wampserver.com/" target="_blank">http://www.wampserver.com/</a>) is a complete Windows web development environment which allows you to create web applications with Apache2, PHP and a MySQL database.</p>
<p><b>MAMP</b> (<a href="https://www.mamp.info/en/" target="_blank">https://www.mamp.info/en/</a>) runs on Mac and Windows, works pretty much the same way WAMP does, and also features a paid PRO version with more options.</p>
<p><b>Fenix Web Server</b> (<a href="http://fenixwebserver.com/" target="_blank">http://fenixwebserver.com/</a>) is the web server I currently use because it's really simple, with no extra stuff, and open source. </p>
<p>It's available for both Windows and Mac. If you prefer, if you have a FTP space you can test your projects directly online by uploading and calling them directly from the web.</p>
<p>In this case, you won't need a web server installed on your computer, but I highly recommend using a local web server instead. Most FTP spaces require a paid account, and you can only use them when you have an internet connection available.</p>
<p>Setting up a web server is a matter of minutes, refer to their official documentation to install and run them on your computer.</p>
<p><b>REALLY choosing a web server, rather than closing the book</b></p>
<p>I know at this time most of you may think “come on, it's just JavaScript, what's this server stuff, I quit!”.
This is the same thing I said when I first had to install and configure a web server just to run a JavaScript page.
Let me explain why you should really choose a web server, rather than quit reading: browsers do not simply allow you to properly display web pages and HTML5 games. They also take care of your security.</p>
<p>When you load a page locally in your browser, you won't have problems as long as it's just a static HTML web page.
But when you launch more complex scripts which load and handle resources from your hard disk such as images, audio files and every other kind of data, to prevent malicious scripts to access to virtually any file on your computer, browsers have a series of security measures which stop files to be accessed and – unfortunately but necessarily – this causes your games not to work.</p>
<p>The most frequent error you will get if you run a Phaser game directly in your browser is something like “Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https.”
With a web server, browsers will know they are running in a small, safe environment where only some files – the ones you placed in a given project folder
– can be accessed, and they will give your scripts green light to work properly. Believe me, it's necessary and way easier than you may think.</p>
<p><b>Choosing a web browser</b></p>
<p>Since your game will run on all modern browsers, you will also need a web browser to make your games run into and test them.
I am using Google Chrome (<a href="http://www.google.com/chrome/" target="_blank">http://www.google.com/chrome/</a>) but you are free to use the one you prefer as long as it supports HTML5 <i className="fa fa-chevron-left"></i><b>canvas</b><i className="fa fa-chevron-right"></i> element.</p>
<p>Having the latest version of your web browser installed on your computer should be enough.
Refer to your browser support page to see if it supports <i className="fa fa-chevron-left"></i><b>canvas</b><i className="fa fa-chevron-right"></i> element.</p>
<p>Once you choose a browser, it does not mean you should forget about the rest: you will test on your favorite browser during development to speed up the process, but from time to time you should also test it on the rest of the most used browsers.</p>
<p>Most of the times you won't notice any difference – all in all we are talking about cross platform games, but the more you test, the better.</p>


<p className="bg-cs lft">
<a href="/tutorial-phaser/lesson-5" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialPhaserPage4
