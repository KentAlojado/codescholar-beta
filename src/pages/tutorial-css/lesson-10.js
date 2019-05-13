import React from 'react'
import "font-awesome/css/font-awesome.min.css";
import Layout from '../../components/layout';
import HTMLImgA from "../../images/css-page-10-1.jpg";
import HTMLImgB from "../../images/css-page-10-2.jpg";
import HTMLImgC from "../../images/css-page-10-3.jpg";
import "font-awesome/css/font-awesome.min.css";
const TutorialCSSPage10 = () => (
<Layout>
<div className="wrapping tutorial">
<div className="third-wrap">
<div className="one-third">
<div className="tutorial-navigation">
<h4 className="media-heading course-title">Basics</h4>
<ol className="lesson-nav">
<li><a href="/tutorial-css">Introduction to CSS</a></li>
<li><a href="/tutorial-css/lesson-2">Setup Environment</a></li>
<li><a href="/tutorial-css/lesson-3">Let’s Learn CSS</a></li>
<li><a href="/tutorial-css/lesson-4">DOM</a></li>
<li><a href="/tutorial-css/lesson-5">Selectors</a></li>
<li><a href="/tutorial-css/lesson-6">Attributes/Properties</a></li>
<li><a href="/tutorial-css/lesson-7">Color</a></li>
<li><a href="/tutorial-css/lesson-8">Background</a></li>
<li><a href="/tutorial-css/lesson-9">Border</a></li>
<li className="current-link">Positioning</li>
</ol>
</div>
</div>
<div className="two-thirds">
<h4>Positioning</h4>
<p>With CSS we can position our content and elements as we please. It is just a matter of finding exactly how you want things to move, while keeping in mind how the rest of the page may react to this. For example, moving something to the center may accidently shift something else on the page down.</p>
<p>First lets adjust our margins, by editing our margins we ensure that no other element will get too close to this one</p>
<p><img src={HTMLImgA} alt="tutorial"/></p>
<p>Now let's adjust our elements position within the border, by adjusting the padding</p>
<p><img src={HTMLImgB} alt="tutorial"/></p>
<p>We can also move our element blocks to our liking using float</p>
<p><img src={HTMLImgC} alt="tutorial"/></p>
<p className="bg-cs lft">
<a href="/tutorial-css" >START OVER</a>
</p>
</div>
</div>
</div>

</Layout>
)

export default TutorialCSSPage10
