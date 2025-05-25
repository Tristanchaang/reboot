import { link } from "fs";

const MATERIALS = {
    "Random Fun Problems": "random",
    "Talks": "talks",
    "BIMO Handouts": "bimo",
    "Olympiads": "olympiads",
    "Non-Olympiads": "nonolympiads",
    "SPM Chemistry": "spmchemistry",
    "MIT": "mitnotes"
}

const materialHTMLs = Object.entries(MATERIALS).map(([title, link]) => `
                        <a class="materialThumbnail" href="/materials/${link}">
                            <img src="/assets/folder-closed-solid.svg" alt="Folder Icon" class="materialIcon" style="width:2rem; height:2rem; margin-right:1rem; vertical-align:middle;" />
                            <span style="font-size: 1.3rem; width:auto">${title}</span>
                        </a>`.trim());


export const materialsIndexHTML = `
    <div id="materials">
        <h1>Materials</h1>
        <div id="materialWindow">${materialHTMLs.join("")}</div>
    </div>
`;