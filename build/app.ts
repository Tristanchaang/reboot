import { HTMLize, write } from "./base.js";

import { postIndexHTML } from "./posts.js";
import { aboutIndexHTML } from "./about.js";
import { materialsIndexHTML } from "./materials.js"; 

write("index.html", HTMLize("Tristan Chaang's Page", 
    `
    <div id="welcome">
        Welcome to my personal page! Here I write about myself and all kinds of stuff I want to share.
    </div>
    ${postIndexHTML}
    ${aboutIndexHTML}
    ${materialsIndexHTML}
    `
));

