# Lunair Demo

Static portfolio demo built from the Lunair Figma prototype.

## Routes

- `/` homepage demo
- `/projects/mira-villas` project-template demo

## Run locally

```bash
npm install
npm run dev
```

## GitHub and Vercel

### 1. Create the GitHub repo

Create a new empty GitHub repository named `lunair-demo`.

### 2. Push this project

```bash
git init
git add .
git commit -m "Initial Lunair demo"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

### 3. Deploy with Vercel

1. Sign in to [Vercel](https://vercel.com).
2. Click `Add New...` then `Project`.
3. Import the `lunair-demo` GitHub repo.
4. Keep the default Next.js settings.
5. Click `Deploy`.

Vercel will give you a public URL that you can place in your portfolio as the live demo link.

## Notes

- This project is frontend-only.
- The flows are prototype-inspired: page transitions, smooth scrolling, filters, tabs, and FAQ interactions.
- Images currently use asset URLs extracted from the Figma file.
