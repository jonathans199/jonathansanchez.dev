# Blog Writing Guide — jonathansanchez.dev

Internal reference for adding, formatting, and publishing articles on the Blog.

---

## How to Add a New Blog Post

Articles live in a single file. No CMS, no migrations, no build pipeline to configure.

1. Open `data/blog.js`
2. Add a new object to the **end** of the `blogPosts` array
3. Fill in all fields (see schema below)
4. Run the dev server (`npm run dev` on port 3002) and verify at `/blog/[your-slug]`
5. Commit and push — Vercel deploys automatically

That's it.

---

## Article Object Schema

```javascript
{
  id: uid(16),           // leave as-is — auto-generates a unique ID at runtime
  slug: 'your-slug-here',          // kebab-case, becomes the URL: /blog/your-slug-here
  title: 'Your Article Title',
  description: 'One or two sentences. Used in the listing card and meta tags.',
  date: 'April 3, 2026',          // human-readable, displayed in the UI
  dateISO: '2026-04-03',           // ISO 8601, used for sorting and SEO
  readTime: '4 min read',          // rough estimate: ~200 words/min
  tags: ['Next.js', 'TypeScript'], // max 4-5 tags; use consistent casing
  mediumUrl: '',                   // full Medium URL if cross-posted, empty string if not
  content: `## Your Markdown Here

Paragraphs, code blocks, lists — all standard Markdown.`,
}
```

### Field Notes

- **slug** — must be unique across all articles; use lowercase and hyphens only
- **description** — write this last; it should summarize the article's core value in one breath
- **readTime** — count your words, divide by 200, round up
- **tags** — look at existing tags in `blog.js` before creating new ones to keep the tag list clean
- **mediumUrl** — if cross-posting to Medium, add the URL *after* publishing there (Medium requires the original to exist first to canonicalize correctly)
- **content** — standard Markdown in a template literal; escape backticks in inline code with `\`` and in fenced code blocks with `\`\`\``

---

## Writing the Content Field

Content is a JavaScript template literal containing Markdown. A few things to know:

**Fenced code blocks** require escaping the triple backtick:

```javascript
content: `## Section

\`\`\`bash
npm install some-package
\`\`\`
`
```

**Inline code** works without escaping in most cases, but if a backtick appears inside a template expression, escape it:

```javascript
`Use the \`uid\` function to generate IDs.`
```

**Images** — if you need images in an article, add them to `/public/img/writings/[slug]/` and reference them as `/img/writings/[slug]/filename.png` in Markdown.

---

## Suggested Writing Workflow

### Biweekly Cadence (recommended)

| Week | Activity |
|------|----------|
| Week 1, Mon | Pick a topic; write a rough outline in the `content` field |
| Week 1, Wed–Fri | Fill in sections; add code examples |
| Week 2, Mon | Read it cold; cut anything that doesn't add value |
| Week 2, Wed | Final pass; set date, slug, description, readTime |
| Week 2, Thu | Commit and push; optionally cross-post to Medium |

### Monthly Cadence (lighter)

- First week of the month: draft
- Third week: revision and publish

### Topic Selection

Good candidates for articles:

- Something you just figured out that took longer than it should have
- A setup or configuration pattern you find yourself repeating across projects
- A tradeoff or architectural decision you made and the reasoning behind it
- A tool or library you've evaluated — especially if your conclusion is surprising

---

## Tips for Good Technical Blog Posts

**Lead with the problem.** Don't open with what you're going to teach. Open with the pain point — the situation a reader is in when they need this article. If they recognize themselves in the first sentence, they'll read the rest.

**Show real code.** Toy examples waste the reader's time. Use realistic filenames, realistic package versions, realistic outputs. If you wouldn't use it in production, don't use it in an example.

**Explain the why, not just the how.** Step-by-step instructions are fine, but they age poorly and don't build understanding. At least one section in every post should explain *why* the approach works the way it does.

**Cut the throat-clearing.** "In this article, we will..." and "Let's dive in!" are filler. Start with content. The reader already knows what the article is about — they chose to open it.

**Short paragraphs.** Two to four sentences max. Technical content is dense. White space is not wasted space.

**End with something actionable.** A next step, a repo to clone, a follow-up question to think about. Don't just trail off.

**Publish before it's perfect.** A live post you can share and update is worth ten drafts. You can always add a section later.

---

## Cross-Posting to Medium

If you want an article on Medium as well:

1. Publish the article on jonathansanchez.dev first (push to Vercel)
2. Create the Medium post and paste the content there
3. In Medium's SEO settings, set the canonical URL to `https://jonathansanchez.dev/blog/[slug]`
4. After publishing on Medium, copy the URL and update `mediumUrl` in `blog.js`
5. Push the update — the listing page will now surface the Medium link

Canonical tagging ensures Google treats jonathansanchez.dev as the authoritative source.

---

## File Reference

| File | Purpose |
|------|---------|
| `data/blog.js` | All article data — add new posts here |
| `src/pages/blog/index.tsx` | Listing page |
| `src/pages/blog/[slug].tsx` | Individual article page |
| `public/img/writings/` | Image assets for articles (create subdirectory per slug) |
