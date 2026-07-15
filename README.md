# Veasna Vunn — Portfolio Site

A personal portfolio built with **Next.js**, containing your CV content, an image **gallery**, and a **blog** you can update by adding files — no CMS login required.

This README assumes zero prior experience with Next.js or GitHub. Follow it top to bottom.

---

## 1. What's inside

```
portfolio-site/
├── app/                    → pages (routes)
│   ├── page.js              → homepage (hero, about, experience, education, skills, gallery/blog teasers, contact)
│   ├── layout.js             → wraps every page (fonts, global styles)
│   ├── gallery/page.js       → full gallery page
│   └── blog/
│       ├── page.js           → blog index (list of all posts)
│       └── [slug]/page.js    → individual blog post page (auto-generated per file in /posts)
├── components/              → reusable UI pieces (Nav, Footer, Carousel, cards, scroll animations)
├── lib/
│   ├── data.js               → ALL your CV text (name, jobs, education, skills). Edit this to update the site's content.
│   ├── gallery.js            → list of gallery images/titles. Edit this to add real work.
│   └── posts.js               → code that reads markdown files from /posts — you don't need to touch this.
├── posts/                    → your blog posts, one .md file per post
├── public/images/            → your images (gallery + blog) live here
├── styles/globals.css         → design tokens (colors, fonts)
└── package.json
```

---

## 2. One-time setup (do this once)

### Install Node.js
Download and install the **LTS version** from [nodejs.org](https://nodejs.org). This gives you `node` and `npm` in your terminal.

Check it worked:
```bash
node -v
npm -v
```

### Install a code editor
[VS Code](https://code.visualstudio.com) is the standard free choice.

### Install Git
Download from [git-scm.com](https://git-scm.com) if `git -v` doesn't already work in your terminal.

---

## 3. Get this project onto GitHub

1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Create a new **empty** repository (no README, no .gitignore — this project already has one).
3. Open a terminal **inside this project folder** and run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

Replace `YOUR-USERNAME/YOUR-REPO-NAME` with your actual GitHub repo URL (copy it from the green "Code" button on GitHub).

---

## 4. Run it on your own computer

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Changes you save in your editor appear instantly.

Stop the server anytime with `Ctrl + C` in the terminal.

---

## 5. Deploy it live (free) with Vercel

Vercel is made by the creators of Next.js and deploys straight from GitHub.

1. Go to [vercel.com](https://vercel.com) and sign up using your **GitHub account**.
2. Click **Add New → Project**.
3. Select the GitHub repo you pushed in Step 3.
4. Leave all settings as default and click **Deploy**.
5. After ~1 minute you'll get a live URL like `your-site.vercel.app`.

From now on: **every time you push to GitHub, Vercel automatically rebuilds and updates your live site.** That's the entire update workflow.

---

## 6. How to update things

### Update your CV info (name, jobs, education, skills, contact)
Edit `lib/data.js`. It's plain JavaScript objects/arrays — change the text between quotes.

### Add a new blog post
1. Duplicate any file in `posts/`, e.g. copy `posts/welcome-to-my-blog.md`.
2. Rename it, e.g. `posts/my-second-post.md`. The filename becomes the post's URL (`/blog/my-second-post`).
3. Edit the top section (between the `---` lines) — `title`, `date` (format `YYYY-MM-DD`), and `excerpt`.
4. Write your post content below the second `---` in plain text or [Markdown](https://www.markdownguide.org/basic-syntax/).
5. Save, then push to GitHub:

```bash
git add .
git commit -m "Add new blog post"
git push
```

Vercel rebuilds automatically — your new post appears live within a minute or two.

### Add a real gallery image
1. Put your image file into `public/images/gallery/` (e.g. `borei-angkor-poster.jpg`).
2. Open `lib/gallery.js` and either edit or add an entry:

```js
{
  id: "borei-angkor-poster",
  title: "Gala Dinner Poster",
  category: "Print / Poster",
  image: "/images/gallery/borei-angkor-poster.jpg"
}
```

3. Delete the placeholder entries once you have enough real ones.
4. Save, commit, and push (same three commands as above).

### Change colors / fonts
All design tokens live in `tailwind.config.js` (`colors`, `fontFamily`) and `styles/globals.css`. Change a hex value and every component using that color updates automatically.

---

## 7. Everyday workflow, summarized

```bash
# 1. Make your edits in VS Code (add a post, swap an image, edit data.js)

# 2. Preview locally (optional but recommended)
npm run dev

# 3. Publish
git add .
git commit -m "Describe what you changed"
git push
```

That's the whole loop. No server to manage, no database, no login screen — the content lives in files inside this folder, and GitHub + Vercel handle the rest.

---

## 8. Troubleshooting

- **`npm install` fails** — make sure Node.js is installed (`node -v` should print a version).
- **Site looks unstyled** — make sure `npm run dev` is running, or that Vercel finished deploying (check the Vercel dashboard for build errors).
- **New blog post doesn't show up locally** — restart `npm run dev` (Ctrl+C, then run it again).
- **Git push asks for a username/password** — GitHub requires a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) instead of a password now; generate one and use it in place of your password when prompted.
