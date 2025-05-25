import * as fs from "fs";
import assert from "assert";
import { HTMLize, read, write, parseMD } from "./base.js";
async function parsePost(mdName) {
    const date = mdName.slice(0, 10);
    const mdContent = await read("markdown/_posts/" + mdName);
    const [, frontMatter, body] = mdContent.split(/^---\s*$/m);
    const meta = Object.fromEntries((frontMatter ?? assert.fail())
        .split('\n')
        .filter(line => line.trim() && line.includes(':'))
        .map(line => {
        const [key, ...rest] = line.split(':');
        return [key?.trim(), rest.join(':').trim()];
    }));
    const content = HTMLize(meta.title, parseMD(body ?? assert.fail()));
    const htmlName = mdName.replace(/\.md$/, ".html");
    write("posts/" + htmlName, content);
    return { date: new Date(date), content: content, title: meta.title, filename: htmlName };
}
const fileNames = (await fs.promises.readdir("markdown/_posts")).filter(f => f.endsWith(".md"));
const engMonth = (monthNum) => ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][monthNum];
const postTitleHTMLs = (await Promise.all(fileNames.map(async (file) => parsePost(file))))
    .sort((a, b) => (a.date < b.date) ? 1 : -1)
    .map(file => `
                        <a class="postThumbnail" href="/posts/${file.filename}">
                            <span style="font-size: 1.3rem; width:auto">${file.title}</span>
                            <span style="min-width:135px;">${engMonth(file.date.getMonth())} ${file.date.getDate() + 1}, ${file.date.getFullYear()}</span>
                        </a>`.trim());
export const postIndexHTML = `
    <div id="posts">
        <h1>Posts</h1>
        <div id="postWindow">${postTitleHTMLs.join("")}</div>
    </div>
`;
//# sourceMappingURL=posts.js.map