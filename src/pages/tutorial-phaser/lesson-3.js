import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/html-pg-1-1.jpg";
import HTMLImgB from "../../images/html-pg-1-2.jpg";
const TutorialPhaserPage3 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-phaser/">Introduction to Phaser 3</a></li>
<li><a href="/tutorial-phaser/lesson-2">Cross-platform Game</a></li>
<li className="current-link">What is HTML5?</li>
<li><a href="/tutorial-phaser/lesson-4">What is Phaser?</a></li>
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
<h4>What is HTML5?</h4>
<p>HTML5 is the latest version of HTML, or Hypertext Markup Language, the code web pages are mostly built with.
We can basically split each web page in three kinds of code: HTML, which provides the structure; Cascading Style Sheets (CSS), which take care of presentation; and JavaScript, which makes things happen.</p>
<p>Unlike other tools like Flash or Java, HTML5 works without requiring any additional software like browser plugins or extensions, and it's capable of doing everything from animation to apps, can play music or movies, and can also be used to build incredibly complicated applications – or in this case, games – that run on almost any browser.</p>
<p>Moreover, HTML5 isn't proprietary, so you don't need to pay fees, subscriptions or royalties to use it. It's also cross-platform, which means it doesn't care whether you're using a tablet or a smart phone, or a laptop, or a smart TV: if your device browser supports HTML5 – and most of them do – your app will work flawlessly.</p>
<p>At this time you may think you have to learn to code HTML5 to build a HTML5 game.
That's not true. Actually, you won't be writing more than a couple of lines of HTML5, since your game will be written in JavaScript.
JavaScript is a scripting language that allows you to create dynamically updating content, control multimedia, animate images, and pretty much everything you need to build a game, especially if combined with JavaScript frameworks – like Phaser – created with game development in mind.</p>
<p className="bg-cs lft">
<a href="/tutorial-phaser/lesson-4" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialPhaserPage3
