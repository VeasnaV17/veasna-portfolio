---
title: "How I Built This Site as a Complete Beginner"
date: "2026-07-23"
excerpt: "No coding background, no CMS, no budget for a developer. Here's how I actually built this thing."
category: "Reflections"
---
![Screenshot of my code editor](/images/blog/blog01.jpg)

Three months ago I typed "what is Next.js" into Google. That's the starting point. Not a coding bootcamp, not a CS degree, just a guy with a CV in a Word doc and a strong opinion that his portfolio should not look like everyone else's.

## Why I didn't just use Wix / SquareSpace / WordPress

I tried. I really did. But every builder I touched hit a wall the second I wanted something slightly custom, like a scroll indicator down the side of the page, or the floating shapes drifting behind the hero section. Builders are great until you want one weird specific thing, and then you're stuck.

So I picked Next.js, Tailwind CSS, and free hosting on Vercel. All of that sounded like a different language to me at first. It kind of was.

## The first week was rough

Let me be honest about how this actually went:

1. I broke the site by pasting half a code block. Missing bracket, whole page white.
2. I spent two hours convinced my code was broken when really my browser just needed a hard refresh.
3. I typed "next.js image not showing" into search so many times I should get a loyalty discount.

None of that means I was bad at this. It means nobody tells you the boring truth: most of "learning to code" is just learning to stay calm when the screen goes white.

## The rule that saved me

One change at a time. That's it. That's the whole trick.

Every time I wanted to add five things at once, I stopped myself. Change one thing. Refresh. Confirm it worked. Only then move to the next thing. Boring advice, but it's the only reason I didn't quit in week one.

## What's actually running this site

Nothing fancy under the hood, which is exactly why I could manage it:

- lib/data.js holds my entire CV. Editing my resume now means editing plain text, not wrestling with some clunky dashboard.
- posts/ is just markdown files. Writing this post was literally: copy a file, rename it, change the words.
- lib/gallery.js maps photos to categories. Add an image, add one line, done.

Everything is a file I can open and actually read. That mattered more to me than any framework feature. I never wanted to depend on a black box I couldn't look inside.

## The part I'm actually proud of

Not the code. The stubbornness. The little Cambodia-inspired map graphic in the hero. The scroll bar that shifts color as you scroll down. None of it came from a template. I built each piece slow, broke it, fixed it, moved on.

## If you're a beginner reading this

You don't need to know everything before you start. I still don't know most of it. I still google basic stuff weekly and that's fine. Go slow, verify every step, and don't be afraid to undo something that isn't working.

If you're reading this post right now, the blog section works. A few months ago that alone felt like a win.