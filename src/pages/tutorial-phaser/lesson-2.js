import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/html-pg-1-1.jpg";
import HTMLImgB from "../../images/html-pg-1-2.jpg";
const TutorialPhaserPage2 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-phaser/">Introduction to Phaser 3</a></li>
<li className="current-link">Cross-platform Game</li>
<li><a href="/tutorial-phaser/lesson-3">What is HTML5?</a></li>
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
<h4>What is a cross-platform game and why should I make cross-platform games?</h4>
<p>With the great interest in mobile games, capable of running on modern portable devices such as smart phones and tablets, there's a lot of talking about “cross- platform” these days.</p>
<p>Although we are talking about modern devices, the cross-platform concept comes from an older computer age, before smart phones and tablets, probably before any kind of portable device smaller than a mid-sized suitcase.
In its original context, cross-platform is an attribute conferred to computer software or computing methods and concepts that are implemented and inter- operate on multiple computer platforms.
Such software and methods are also called “platform independent”. To tell you the short story, a cross-platform software will run on any platform without special adaptation, or with a minimum special adaptation.</p>
<p>A good example of a cross-platform language is Java: a compiled Java program runs on all platforms under Java Virtual Machine, which you can find in all major operating systems, including Windows, Mac OS and Linux.</p>
<p>Stop with the boring theory. A cross-platform game, the kind of game we are going to build, is a game able to run on various devices, such as smart phones and tablets – but also on desktop machines – each one with its own resolution and screen aspect ratio, giving players the same experience no matter the device used to play.</p>
<p>And here comes the main question: why should I make cross-platform games? Listen to my story.</p>
<p>When HTML5 mobile gaming started to become popular, I had an iPad2 tablet and built a game which fit perfectly in its resolution.
I was very happy with that game, it was a word game and looked really great on my brand new tablet, covering the entire screen with sprites and colors.
Once I completed the game, I started showing it to various sponsors. I already had a list of sponsor emails collected during Flash gaming era, so I was expecting a lot of offers.</p>
<p>Actually, I got offers, but most of them said something like "Hey, I like the game, but unfortunately it does not look that good on my iPhone".
"Don't worry", I said, "you'll get the game optimized for both iPad and iPhone". After some extra work, I was told the game didn't look good on the Galaxy Note.</p>
<p>A few fixes and tweaks later, it happened the game didn't look good on the Samsung S4.
When the game was finally optimized for all required devices, it didn't look good anymore on my iPad.
You can imagine the rest of this story. I found myself almost rewriting the game with a series of exceptions, trying to make it look good on any device.
This is why you should make a cross-platform game: to code once and rule them all, focusing on code and game development while letting a framework do the dirty work for you.</p>
<p className="bg-cs lft">
<a href="/tutorial-phaser/lesson-3" >NEXT LESSON</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialPhaserPage2
