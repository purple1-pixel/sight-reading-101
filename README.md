# Sight Reading 101 — Deployment Guide

## Folder structure
```
sight-reading-101/
├── public/
│   └── index.html       ← the entire app (single file)
├── server.js            ← tiny Express server Railway runs
├── package.json         ← declares Node version + dependencies
├── .gitignore
└── README.md
```

---

## Step-by-step: GitHub → Railway

### Step 1 — Create a GitHub repository

1. Go to https://github.com/new
2. Name it `sight-reading-101`
3. Set it to **Public** (or Private — Railway works with both)
4. Do NOT initialize with a README (we already have files)
5. Click **Create repository**

---

### Step 2 — Push your files to GitHub

Open a terminal on your computer, navigate to the project folder, and run:

```bash
cd path/to/sight-reading-101

git init
git add .
git commit -m "Initial commit — Sight Reading 101"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/sight-reading-101.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### Step 3 — Deploy on Railway

1. Go to https://railway.app and log in
2. Click **New Project** (top right)
3. Choose **Deploy from GitHub repo**
4. If prompted, authorize Railway to access your GitHub — click **Configure GitHub App** and grant access to the `sight-reading-101` repo
5. Select the `sight-reading-101` repository from the list
6. Railway will detect it's a Node.js project automatically

---

### Step 4 — Verify Railway settings

Railway should auto-detect these — but double-check in your project settings:

| Setting | Value |
|---|---|
| Build command | `npm install` |
| Start command | `npm start` |
| Root directory | `/` (leave blank) |

Railway will auto-assign a `PORT` environment variable — the server.js is already configured to read it.

---

### Step 5 — Get your public URL

1. Once deployed (takes ~60 seconds), click on your service in Railway
2. Go to the **Settings** tab → **Networking** → click **Generate Domain**
3. Railway gives you a free URL like `sight-reading-101-production.up.railway.app`
4. Share that URL with your students — no login required

---

## Updating the app in the future

Whenever you change `public/index.html`, just push to GitHub:

```bash
git add .
git commit -m "Update: describe your change"
git push
```

Railway auto-redeploys within ~30 seconds. Zero downtime.

---

## Custom domain (optional)

If you own a domain like `sightreading101.com`:

1. In Railway → Settings → Networking → Add Custom Domain
2. Enter your domain
3. Add the CNAME record Railway shows you to your DNS provider (Namecheap, GoDaddy, etc.)
4. Takes 5–30 minutes to propagate

---

## Local development (optional)

To run it on your own machine before pushing:

```bash
cd sight-reading-101
npm install
npm start
# Open http://localhost:3000
```
