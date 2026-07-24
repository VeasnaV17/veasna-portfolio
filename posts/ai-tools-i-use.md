---
title: "The AI Tools I Used to Build This Site"
date: "2026-07-24"
excerpt: "I have zero coding background. Here's exactly what I leaned on to actually ship this portfolio."
image: "/images/blog/aitools.png"
category: "Reflections"
---
![Screenshot of my code editor](/images/blog/aitools.png)

I didn't learn Next.js from a course. I didn't hire a developer either. At most, I took AP Computer Science back in high school and got medicore score at best. This entire site got built through a mix of trial, error, and a few AI tools doing a lot of the heavy lifting while I did the actual clicking, saving, and pushing to GitHub. Here's what I actually used.

## ChatGPT, for the brainstorming

Almost everybody uses ChatGPT. Easy, simple, and free. Limited tokens per day but still a great start. I use this AI to brainstorm what my site should look like. And that is basicially making ChatGPT doing a full HTML file for my preview. 

## Claude, for basically everything code-related

This was the core of the whole process. Using the html file from ChatGPT, I have Claude built me a whole website scaffolding. And the rest is just magic. Every time something broke (and a lot broke), I'd paste the error message and ask what was wrong. Every time I wanted a new feature, like the scroll progress bar or the floating background shapes, I'd describe what I wanted and get back exact code to paste into VS Code.

The honest part: I still had to do the actual work. Opening files, finding the right line, pasting carefully, saving, refreshing the browser to check. AI didn't do that part for me. It just meant I never had to guess what code to write from scratch.

## VS Code, not really AI, but worth mentioning

Not an AI tool itself, but it's where all the AI-generated code actually landed. Syntax highlighting and the built-in error checker (the Problems tab) saved me more than once, since it flags broken code before I even try to run it. VS Code also has a built-in Ai agent as an assitant. In this case, the default assistant is Github Copilot, which has a limited number of monthly tokens. Paste a prompt, and it will fix entire sections of the code automatically. Pretty good for beginners...until i ran out of tokens, but that's a story for a later date. 

## What AI didn't do

It didn't design the site's look and feel for me. The color palette, the layout choices, the whole "Cambodia meets clean tech portfolio" vibe, that was me deciding what I wanted and describing it. AI translated my ideas into working code. It didn't generate the ideas themselves.

It also didn't fix things automatically. When code broke, which happened constantly in the first few weeks, I still had to copy the exact error, paste it back, and manually apply the fix line by line. That loop, break something, diagnose it, fix it, verify it, was 90% of the actual learning.

## The real lesson

AI tools made this project possible for someone with no coding background. They didn't make it effortless. I still don't fully understand every line of code on this site, but I understand enough to know what each section does, how to edit it safely, and how to ask better questions when something goes wrong.

If you're a beginner thinking about building something like this yourself: you don't need to know how to code first. You need patience, a willingness to break things, and a habit of verifying every single change before moving to the next one.