---
title: "#TIFNUM - Finding the internet's favorite number"
date: 2013-05-28 18:32:35 Z
---

[![tifnum-banner](/uploads/2013/05/tifnum-banner.jpg)](http://tifnum.leolabs.org "Go to the internet's favorite number") [The internet's favorite number](http://tifnum.leolabs.org "Go to the internet's favorite number") ([#tifnum](https://twitter.com/search/realtime?q=%23tifnum&src=hash "#tifnum on Twitter")) project started with a simple idea: If you ask a random person a question, like "_How many people are currently living in the US?_", then the chances aren't very high that you'll get the right answer. However, if you ask a thousand people or even more and calculate the average of all the answers, it will be close to the right answer most of the time. That's what I was thinking about when I had the idea of this social experiment. I wanted to find out which numbers people on the internet like the most and which number is the internet's favorite number. As people change, their favorite numbers might also change and that's something I want to find out, too. As with almost every other social experiment, the more people are participating, the more interesting it gets. To make this experiment even more interesting, I wanted to add related links to each number that gets chosen as the internet's favorite number. And submitting your own favorite number should be as simple as possible without needing to login but still providing protection from spammers and so on. And with that idea, I started _#tifnum_ - the internet's favorite number. To get the internet's favorite number, the website will take the median of all numbers that are submitted. I chose the median because that way we'll get nice numbers which are only biased a little by very big numbers and represent the internet's favorite numbers best. One example, assuming the database has 7 entries:

<table id="median" style="border-top: 1px solid #efefef; border-bottom: 1px solid #efefef; table-layout: fixed;">

<tbody>

<tr>

<td>5</td>

<td>21</td>

<td>24</td>

<td>**24**</td>

<td>28</td>

<td>42</td>

<td>500</td>

</tr>

</tbody>

</table>

The entries are sorted ascending and then the center entry is taken as the internet's favorite number. As you can see, the larger numbers, like 500 don't influence the median much. It wouldn't make if this number is maybe 500000 or even higher, and that's exactly what I wanted to achieve. Now, I could also just have taken the most submitted number and make that the internet's favorite number, but then the other numbers that were submitted by other users wouldn't be included in the calculation and that's not what I wanted. The internet's favorite number is built ontop of CodeIgniter which manages the database and server-side operations. The site itself is built using Twitter's Bootstrap template together with jQuery for the AJAX requests, animations and so on to make it look good on every device. [» Go to the internet's favorite number and submit your favorite number](http://tifnum.leolabs.org "Go to the internet's favorite number") As always, if you've got an idea or any other comment concerning #tifnum, just leave them in the comments section below :)