const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");
const bearImg = fs.readFileSync(path.join(publicDir, "images", "reading-bear.png"));
const bearData = bearImg.toString("base64");
const bearElement = `<image x="975" y="25" width="108" height="108" href="data:image/png;base64,${bearData}"/>`;
const bearSmall = (x, y, size) => `<image x="${x}" y="${y}" width="${size}" height="${size}" href="data:image/png;base64,${bearData}"/>`;

function header(title, sub, kicker = "BEST KID BOOKS · FREE FAMILY PRINTABLE LIBRARY") {
  return `
    <rect width="1123" height="794" fill="#fffdf9"/>
    <rect x="25" y="25" width="1073" height="744" rx="20" fill="none" stroke="#223354" stroke-width="3"/>
    <rect x="35" y="35" width="1053" height="724" rx="14" fill="none" stroke="#e8c48a" stroke-width="1.5" stroke-dasharray="6 4"/>
    <g fill="#223354" font-family="system-ui, -apple-system, sans-serif">
      <text x="55" y="65" fill="#196ecc" font-size="12" font-weight="800" letter-spacing="2">${kicker}</text>
      <text x="55" y="105" fill="#223354" font-size="32" font-weight="900">${title}</text>
      <text x="55" y="135" font-size="15" fill="#bc3509" font-weight="600">${sub}</text>
      ${bearElement}
  `;
}

function footer(note = "Free for personal family use · bestkidbooks.online · Celebrate connection over completion") {
  return `
      <rect x="55" y="710" width="1013" height="35" rx="8" fill="#f4ece1"/>
      <text x="75" y="732" font-size="12" font-weight="600" fill="#65718a">${note}</text>
      <text x="960" y="732" font-size="12" font-weight="800" fill="#196ecc">BEST KidSbooks</text>
    </g>
  </svg>
  `;
}

// 1. CVC Sound-Box Mapping Mats
const cvcMatSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794">
  <title>CVC Sound-Box Mapping Mats</title>
  ${header("CVC Sound-Box Mapping Mats", "Tap the sound · Slide the sound · Blend the word (Short A, E, I, O, U)", "PHONEMIC AWARENESS & CVC FOUNDATIONS")}
  
  <!-- Sound Boxes Grid -->
  <g transform="translate(55, 160)">
    <!-- Row 1: Short A -->
    <g transform="translate(0, 0)">
      <rect width="490" height="115" rx="14" fill="#e7f0ff" stroke="#a7bee0" stroke-width="2"/>
      <text x="20" y="32" font-size="16" font-weight="800" fill="#196ecc">1. Short A : /c/ /ă/ /t/ → CAT</text>
      <text x="20" y="52" font-size="12" fill="#65718a">Say each sound aloud, touch each box, then slide finger along the arrow.</text>
      <rect x="20" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#196ecc" stroke-width="2.5"/>
      <rect x="100" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#196ecc" stroke-width="2.5"/>
      <rect x="180" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#196ecc" stroke-width="2.5"/>
      <path d="M 270 85 L 450 85" stroke="#ff3b1f" stroke-width="3" stroke-linecap="round"/>
      <polygon points="455,85 445,80 445,90" fill="#ff3b1f"/>
      <text x="320" y="78" font-size="12" font-weight="800" fill="#ff3b1f">BLEND FAST!</text>
    </g>

    <!-- Row 1: Short E -->
    <g transform="translate(520, 0)">
      <rect width="490" height="115" rx="14" fill="#fff0e6" stroke="#f5c2a5" stroke-width="2"/>
      <text x="20" y="32" font-size="16" font-weight="800" fill="#bc3509">2. Short E : /b/ /ĕ/ /d/ → BED</text>
      <text x="20" y="52" font-size="12" fill="#65718a">Smile mouth shape: make a wide smile for /ĕ/!</text>
      <rect x="20" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#bc3509" stroke-width="2.5"/>
      <rect x="100" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#bc3509" stroke-width="2.5"/>
      <rect x="180" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#bc3509" stroke-width="2.5"/>
      <path d="M 270 85 L 450 85" stroke="#196ecc" stroke-width="3" stroke-linecap="round"/>
      <polygon points="455,85 445,80 445,90" fill="#196ecc"/>
      <text x="320" y="78" font-size="12" font-weight="800" fill="#196ecc">BLEND FAST!</text>
    </g>

    <!-- Row 2: Short I -->
    <g transform="translate(0, 135)">
      <rect width="490" height="115" rx="14" fill="#f0fbe8" stroke="#bfe6a8" stroke-width="2"/>
      <text x="20" y="32" font-size="16" font-weight="800" fill="#2d8a4e">3. Short I : /p/ /ĭ/ /g/ → PIG</text>
      <text x="20" y="52" font-size="12" fill="#65718a">Short /ĭ/ sound like 'itch'. Tap 1, Tap 2, Tap 3.</text>
      <rect x="20" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#2d8a4e" stroke-width="2.5"/>
      <rect x="100" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#2d8a4e" stroke-width="2.5"/>
      <rect x="180" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#2d8a4e" stroke-width="2.5"/>
      <path d="M 270 85 L 450 85" stroke="#2d8a4e" stroke-width="3" stroke-linecap="round"/>
      <polygon points="455,85 445,80 445,90" fill="#2d8a4e"/>
    </g>

    <!-- Row 2: Short O & U -->
    <g transform="translate(520, 135)">
      <rect width="490" height="115" rx="14" fill="#fef8e7" stroke="#ebd696" stroke-width="2"/>
      <text x="20" y="32" font-size="16" font-weight="800" fill="#b08000">4. Short O &amp; U : /d/ /ŏ/ /g/ &amp; /s/ /ŭ/ /n/</text>
      <text x="20" y="52" font-size="12" fill="#65718a">Open mouth round for /ŏ/, relax jaw for /ŭ/.</text>
      <rect x="20" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#b08000" stroke-width="2.5"/>
      <rect x="100" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#b08000" stroke-width="2.5"/>
      <rect x="180" y="65" width="70" height="40" rx="8" fill="#fff" stroke="#b08000" stroke-width="2.5"/>
      <path d="M 270 85 L 450 85" stroke="#b08000" stroke-width="3" stroke-linecap="round"/>
      <polygon points="455,85 445,80 445,90" fill="#b08000"/>
    </g>

    <!-- Word Bank & Routine Notes -->
    <g transform="translate(0, 270)">
      <rect width="1010" height="240" rx="14" fill="#fff" stroke="#223354" stroke-width="2"/>
      <text x="20" y="30" font-size="16" font-weight="900" fill="#196ecc">Parent Practice Word Bank (Tap &amp; Read 3 words per evening):</text>
      <text x="20" y="65" font-size="14" font-weight="700" fill="#223354">• Short A: <tspan font-weight="400" fill="#65718a">cat, map, hat, pan, fan, bat, tap, jam</tspan></text>
      <text x="20" y="95" font-size="14" font-weight="700" fill="#223354">• Short E: <tspan font-weight="400" fill="#65718a">bed, hen, pen, leg, red, net, web, ten</tspan></text>
      <text x="20" y="125" font-size="14" font-weight="700" fill="#223354">• Short I: <tspan font-weight="400" fill="#65718a">pig, sit, lip, pin, fin, hit, big, win</tspan></text>
      <text x="20" y="155" font-size="14" font-weight="700" fill="#223354">• Short O: <tspan font-weight="400" fill="#65718a">dog, fox, pot, mop, log, top, hot, box</tspan></text>
      <text x="20" y="185" font-size="14" font-weight="700" fill="#223354">• Short U: <tspan font-weight="400" fill="#65718a">sun, cup, bus, bug, hug, mud, rug, nut</tspan></text>
      <text x="20" y="218" font-size="12" font-style="italic" fill="#ff3b1f">Tip: Place inside a clear dry-erase plastic sleeve and write letters with a whiteboard marker for unlimited reuse!</text>
    </g>
  </g>
  ${footer()}
`;

// 2. Silent-e Magic Wand & Transformation Cards
const silentESvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794">
  <title>Silent-e Magic Wand & Transformation Cards</title>
  ${header("Silent-e Magic Wand & Transformation Cards", "Cut out the magic e wands · Slide over CVC words to make the vowel say its name!", "PHONICS TRANSFORMATION ACTIVITY")}
  
  <g transform="translate(55, 160)">
    <!-- Cut-out Magic Wands on Left -->
    <g transform="translate(0, 0)">
      <rect width="300" height="520" rx="14" fill="#fff0f5" stroke="#ff8fb1" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="20" y="30" font-size="14" font-weight="800" fill="#ff3b1f">✂ CUT OUT MAGIC WANDS:</text>
      <text x="20" y="50" font-size="11" fill="#65718a">Cut around dashed lines. Glue to a popsicle stick!</text>
      
      <!-- Wand 1 -->
      <g transform="translate(30, 80)">
        <polygon points="40,0 52,28 80,32 58,52 64,80 40,65 16,80 22,52 0,32 28,28" fill="#ffc531" stroke="#223354" stroke-width="2.5"/>
        <text x="32" y="50" font-size="28" font-weight="900" fill="#ff3b1f">e</text>
        <rect x="35" y="80" width="10" height="140" rx="4" fill="#e8c48a" stroke="#223354" stroke-width="2"/>
        <text x="60" y="150" font-size="12" font-weight="700" fill="#223354">Magic Wand 1</text>
      </g>

      <!-- Wand 2 -->
      <g transform="translate(160, 80)">
        <polygon points="40,0 52,28 80,32 58,52 64,80 40,65 16,80 22,52 0,32 28,28" fill="#6ecf9b" stroke="#223354" stroke-width="2.5"/>
        <text x="32" y="50" font-size="28" font-weight="900" fill="#196ecc">e</text>
        <rect x="35" y="80" width="10" height="140" rx="4" fill="#e8c48a" stroke="#223354" stroke-width="2"/>
        <text x="60" y="150" font-size="12" font-weight="700" fill="#223354">Magic Wand 2</text>
      </g>

      <text x="20" y="350" font-size="12" font-weight="800" fill="#196ecc">The Magic Rule:</text>
      <text x="20" y="375" font-size="12" fill="#223354">"Silent 'e' jumps over one letter,</text>
      <text x="20" y="395" font-size="12" fill="#223354">taps the vowel on its head,</text>
      <text x="20" y="415" font-size="12" fill="#223354">and makes it say its real name!"</text>
    </g>

    <!-- Transformation Cards on Right -->
    <g transform="translate(325, 0)">
      <rect width="685" height="520" rx="14" fill="#fff" stroke="#223354" stroke-width="2"/>
      <text x="25" y="30" font-size="16" font-weight="900" fill="#196ecc">Transformation Cards (Cut or Practice as a Board):</text>

      <!-- Card 1 -->
      <g transform="translate(25, 50)">
        <rect width="200" height="90" rx="10" fill="#e7f0ff" stroke="#a7bee0" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">cap <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#196ecc">cape</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/k/ /ă/ /p/ → /k/ /ā/ /p/</text>
      </g>

      <!-- Card 2 -->
      <g transform="translate(240, 50)">
        <rect width="200" height="90" rx="10" fill="#fff0e6" stroke="#f5c2a5" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">hop <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#bc3509">hope</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/h/ /ŏ/ /p/ → /h/ /ō/ /p/</text>
      </g>

      <!-- Card 3 -->
      <g transform="translate(455, 50)">
        <rect width="200" height="90" rx="10" fill="#f0fbe8" stroke="#bfe6a8" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">kit <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#2d8a4e">kite</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/k/ /ĭ/ /t/ → /k/ /ī/ /t/</text>
      </g>

      <!-- Card 4 -->
      <g transform="translate(25, 155)">
        <rect width="200" height="90" rx="10" fill="#fef8e7" stroke="#ebd696" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">tap <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#b08000">tape</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/t/ /ă/ /p/ → /t/ /ā/ /p/</text>
      </g>

      <!-- Card 5 -->
      <g transform="translate(240, 155)">
        <rect width="200" height="90" rx="10" fill="#f5f0ff" stroke="#cfbbf2" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">pin <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#6834b8">pine</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/p/ /ĭ/ /n/ → /p/ /ī/ /n/</text>
      </g>

      <!-- Card 6 -->
      <g transform="translate(455, 155)">
        <rect width="200" height="90" rx="10" fill="#e7f0ff" stroke="#a7bee0" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">tub <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#196ecc">tube</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/t/ /ŭ/ /b/ → /t/ /ū/ /b/</text>
      </g>

      <!-- Card 7 -->
      <g transform="translate(25, 260)">
        <rect width="200" height="90" rx="10" fill="#fff0e6" stroke="#f5c2a5" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">mad <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#bc3509">made</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/m/ /ă/ /d/ → /m/ /ā/ /d/</text>
      </g>

      <!-- Card 8 -->
      <g transform="translate(240, 260)">
        <rect width="200" height="90" rx="10" fill="#f0fbe8" stroke="#bfe6a8" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">rob <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#2d8a4e">robe</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/r/ /ŏ/ /b/ → /r/ /ō/ /b/</text>
      </g>

      <!-- Card 9 -->
      <g transform="translate(455, 260)">
        <rect width="200" height="90" rx="10" fill="#fef8e7" stroke="#ebd696" stroke-width="2"/>
        <text x="15" y="40" font-size="24" font-weight="900" fill="#223354">rid <tspan fill="#ff3b1f">+ e</tspan> → <tspan fill="#b08000">ride</tspan></text>
        <text x="15" y="70" font-size="12" fill="#65718a">/r/ /ĭ/ /d/ → /r/ /ī/ /d/</text>
      </g>

      <text x="25" y="380" font-size="13" font-weight="800" fill="#ff3b1f">How to Play:</text>
      <text x="25" y="405" font-size="12" fill="#65718a">1. Cover the 'e' with your finger or wand and read the short word (e.g. "cap").</text>
      <text x="25" y="425" font-size="12" fill="#65718a">2. Tap the 'e' wand onto the end: "Abra-cadabra! The 'e' woke up the vowel!"</text>
      <text x="25" y="445" font-size="12" fill="#65718a">3. Read the transformed long-vowel word together: "cape!"</text>
    </g>
  </g>
  ${footer()}
`;

// 3. 100-Book Wall Chart & Reading Tree
const treeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794">
  <title>100-Book Wall Chart &amp; Reading Tree</title>
  ${header("100-Book Wall Chart &amp; Reading Tree", "Color one apple or leaf every time you read a story together! (Rereads count!)", "READING HABIT & VOLUME TRACKER")}
  
  <g transform="translate(55, 155)">
    <!-- Tree Trunk & Canopy -->
    <path d="M 450 490 Q 480 320 380 200 Q 500 50 700 80 Q 880 100 890 280 Q 920 400 780 490 Z" fill="#eef7ea" stroke="#6ecf9b" stroke-width="4"/>
    <path d="M 520 490 Q 540 380 500 320 Q 560 300 580 490" fill="#d4b483" stroke="#8a6839" stroke-width="4"/>
    
    <!-- 100 Circles Grid inside Canopy & Around -->
    ${(() => {
      let circles = "";
      let count = 1;
      for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
          const x = 20 + col * 45;
          const y = 30 + row * 45;
          const isMilestone = count % 25 === 0;
          circles += `<g transform="translate(${x}, ${y})">
            <circle cx="20" cy="20" r="17" fill="${isMilestone ? '#ffc531' : '#fff'}" stroke="${isMilestone ? '#ff3b1f' : '#223354'}" stroke-width="${isMilestone ? 2.5 : 1.5}"/>
            <text x="20" y="25" font-size="11" font-weight="${isMilestone ? '900' : '700'}" fill="${isMilestone ? '#bc3509' : '#223354'}" text-anchor="middle">${count}</text>
          </g>`;
          count++;
        }
      }
      return `<g transform="translate(30, 10)">${circles}</g>`;
    })()}

    <!-- Right-side Milestone Rewards Card -->
    <g transform="translate(560, 20)">
      <rect width="450" height="470" rx="16" fill="#fff" stroke="#223354" stroke-width="2.5"/>
      <text x="25" y="35" font-size="20" font-weight="900" fill="#196ecc">🏆 100-Book Milestone Badges:</text>
      
      <g transform="translate(25, 60)">
        <rect width="400" height="65" rx="10" fill="#fef8e7" stroke="#ebd696" stroke-width="2"/>
        <text x="15" y="30" font-size="15" font-weight="800" fill="#b08000">⭐ 25 Stories: The Curious Cub Badge</text>
        <text x="15" y="50" font-size="12" fill="#65718a">Reward Idea: Pick bedtime story under a pillow fort!</text>
      </g>

      <g transform="translate(25, 140)">
        <rect width="400" height="65" rx="10" fill="#e7f0ff" stroke="#a7bee0" stroke-width="2"/>
        <text x="15" y="30" font-size="15" font-weight="800" fill="#196ecc">🌟 50 Stories: Story Explorer Badge</text>
        <text x="15" y="50" font-size="12" fill="#65718a">Reward Idea: Special library visit &amp; hot cocoa treat!</text>
      </g>

      <g transform="translate(25, 220)">
        <rect width="400" height="65" rx="10" fill="#fff0e6" stroke="#f5c2a5" stroke-width="2"/>
        <text x="15" y="30" font-size="15" font-weight="800" fill="#bc3509">🚀 75 Stories: Bookworm Champion</text>
        <text x="15" y="50" font-size="12" fill="#65718a">Reward Idea: Act out favorite story with stuffed animals!</text>
      </g>

      <g transform="translate(25, 300)">
        <rect width="400" height="85" rx="10" fill="#f0fbe8" stroke="#6ecf9b" stroke-width="2.5"/>
        <text x="15" y="30" font-size="16" font-weight="900" fill="#2d8a4e">👑 100 Stories: Century Club Reader!</text>
        <text x="15" y="52" font-size="12" fill="#223354">Over 1,000,000 words heard! Official certificate awarded.</text>
        <text x="15" y="72" font-size="11" font-weight="700" fill="#ff3b1f">Child Name: _____________________ Date: _________</text>
      </g>

      <text x="25" y="420" font-size="12" font-style="italic" fill="#65718a">Hang on bedroom wall at child eye-level for intrinsic pride &amp; joyful motivation.</text>
    </g>
  </g>
  ${footer()}
`;

// 4. Color-Your-Own Animal Reading Bookmarks
const bookmarksSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794">
  <title>Color-Your-Own Animal Reading Bookmarks</title>
  ${header("Color-Your-Own Animal Reading Bookmarks", "Cut along dashed lines · Color your bookmarks · Keep your place in bedtime stories!", "COLORING & FINE MOTOR SKILLS")}
  
  <g transform="translate(55, 155)">
    <!-- Bookmark 1: Reading Bear -->
    <g transform="translate(15, 0)">
      <rect width="220" height="520" rx="14" fill="#fff" stroke="#223354" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="110" cy="25" r="8" fill="none" stroke="#223354" stroke-width="2"/>
      <text x="110" y="75" font-size="18" font-weight="900" fill="#196ecc" text-anchor="middle">READING BEAR</text>
      <text x="110" y="95" font-size="12" fill="#65718a" text-anchor="middle">"Books are magical!"</text>
      ${bearSmall(40, 115, 140)}
      <rect x="25" y="270" width="170" height="150" rx="10" fill="#fef8e7" stroke="#ebd696"/>
      <text x="35" y="295" font-size="11" font-weight="800" fill="#b08000">BEAR READING TIP:</text>
      <text x="35" y="320" font-size="11" fill="#223354">If you get stuck on</text>
      <text x="35" y="338" font-size="11" fill="#223354">a word, stretch the</text>
      <text x="35" y="356" font-size="11" fill="#223354">sounds like bubblegum!</text>
      <text x="35" y="385" font-size="10" fill="#65718a">/c/ ... /ă/ ... /t/ = CAT!</text>
      <text x="110" y="460" font-size="11" font-weight="700" fill="#ff3b1f" text-anchor="middle">This bookmark belongs to:</text>
      <line x1="30" y1="490" x2="190" y2="490" stroke="#223354" stroke-width="1.5"/>
    </g>

    <!-- Bookmark 2: Fox Wakes the Sun -->
    <g transform="translate(265, 0)">
      <rect width="220" height="520" rx="14" fill="#fff" stroke="#223354" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="110" cy="25" r="8" fill="none" stroke="#223354" stroke-width="2"/>
      <text x="110" y="75" font-size="18" font-weight="900" fill="#ff3b1f" text-anchor="middle">FOX &amp; SUN</text>
      <text x="110" y="95" font-size="12" fill="#65718a" text-anchor="middle">"Wake up, sleepy story!"</text>
      <circle cx="110" cy="180" r="55" fill="#ffc531" stroke="#223354" stroke-width="2.5"/>
      <text x="110" y="190" font-size="36" text-anchor="middle">🦊</text>
      <rect x="25" y="270" width="170" height="150" rx="10" fill="#fff0e6" stroke="#f5c2a5"/>
      <text x="35" y="295" font-size="11" font-weight="800" fill="#bc3509">FOX READING TIP:</text>
      <text x="35" y="320" font-size="11" fill="#223354">Look at picture clues</text>
      <text x="35" y="338" font-size="11" fill="#223354">before reading the</text>
      <text x="35" y="356" font-size="11" fill="#223354">sentence. What is</text>
      <text x="35" y="374" font-size="11" fill="#223354">happening in the art?</text>
      <text x="110" y="460" font-size="11" font-weight="700" fill="#ff3b1f" text-anchor="middle">My Favorite Story:</text>
      <line x1="30" y1="490" x2="190" y2="490" stroke="#223354" stroke-width="1.5"/>
    </g>

    <!-- Bookmark 3: Whale Who Forgot the Sea -->
    <g transform="translate(515, 0)">
      <rect width="220" height="520" rx="14" fill="#fff" stroke="#223354" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="110" cy="25" r="8" fill="none" stroke="#223354" stroke-width="2"/>
      <text x="110" y="75" font-size="18" font-weight="900" fill="#196ecc" text-anchor="middle">WHALE</text>
      <text x="110" y="95" font-size="12" fill="#65718a" text-anchor="middle">"Deep breaths &amp; cozy tales"</text>
      <ellipse cx="110" cy="180" rx="65" ry="45" fill="#a8c4ff" stroke="#223354" stroke-width="2.5"/>
      <text x="110" y="195" font-size="36" text-anchor="middle">🐋</text>
      <rect x="25" y="270" width="170" height="150" rx="10" fill="#e7f0ff" stroke="#a7bee0"/>
      <text x="35" y="295" font-size="11" font-weight="800" fill="#196ecc">WHALE CALM TIP:</text>
      <text x="35" y="320" font-size="11" fill="#223354">Take a deep whale</text>
      <text x="35" y="338" font-size="11" fill="#223354">breath before opening</text>
      <text x="35" y="356" font-size="11" fill="#223354">bedtime story page.</text>
      <text x="35" y="380" font-size="11" fill="#65718a">Inhale 4s ... Blow 4s!</text>
      <text x="110" y="460" font-size="11" font-weight="700" fill="#ff3b1f" text-anchor="middle">Pages read so far:</text>
      <line x1="30" y1="490" x2="190" y2="490" stroke="#223354" stroke-width="1.5"/>
    </g>

    <!-- Bookmark 4: Mango the Moon Cat -->
    <g transform="translate(765, 0)">
      <rect width="220" height="520" rx="14" fill="#fff" stroke="#223354" stroke-width="2.5" stroke-dasharray="6 4"/>
      <circle cx="110" cy="25" r="8" fill="none" stroke="#223354" stroke-width="2"/>
      <text x="110" y="75" font-size="18" font-weight="900" fill="#6834b8" text-anchor="middle">MOON CAT</text>
      <text x="110" y="95" font-size="12" fill="#65718a" text-anchor="middle">"Count every starry word"</text>
      <circle cx="110" cy="180" r="55" fill="#f5f0ff" stroke="#223354" stroke-width="2.5"/>
      <text x="110" y="195" font-size="36" text-anchor="middle">🐱⭐</text>
      <rect x="25" y="270" width="170" height="150" rx="10" fill="#f5f0ff" stroke="#cfbbf2"/>
      <text x="35" y="295" font-size="11" font-weight="800" fill="#6834b8">STAR READER TIP:</text>
      <text x="35" y="320" font-size="11" fill="#223354">Count how many new</text>
      <text x="35" y="338" font-size="11" fill="#223354">curious words you</text>
      <text x="35" y="356" font-size="11" fill="#223354">find in each book.</text>
      <text x="35" y="380" font-size="11" fill="#65718a">Curiosity builds minds!</text>
      <text x="110" y="460" font-size="11" font-weight="700" fill="#ff3b1f" text-anchor="middle">Date finished:</text>
      <line x1="30" y1="490" x2="190" y2="490" stroke="#223354" stroke-width="1.5"/>
    </g>
  </g>
  ${footer()}
`;

// 5. Official 30-Day Reading Champion Certificate
const certificateSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1123" height="794" viewBox="0 0 1123 794">
  <title>Official 30-Day Reading Champion Certificate</title>
  <rect width="1123" height="794" fill="#fffaf2"/>
  <!-- Ornate Border -->
  <rect x="30" y="30" width="1063" height="734" rx="24" fill="none" stroke="#223354" stroke-width="5"/>
  <rect x="42" y="42" width="1039" height="710" rx="18" fill="none" stroke="#ffc531" stroke-width="3"/>
  <rect x="52" y="52" width="1019" height="690" rx="14" fill="none" stroke="#223354" stroke-width="1" stroke-dasharray="8 6"/>

  <g text-anchor="middle" font-family="system-ui, -apple-system, sans-serif">
    <!-- Header -->
    <text x="561" y="115" font-size="14" font-weight="800" fill="#196ecc" letter-spacing="4">BEST KIDS BOOKS · READING JOY FOUNDATION</text>
    <text x="561" y="175" font-size="44" font-weight="900" fill="#223354">OFFICIAL READING CHAMPION</text>
    <text x="561" y="215" font-size="18" font-style="italic" fill="#bc3509">This honor is proudly presented to:</text>

    <!-- Name Line -->
    <line x1="250" y1="310" x2="870" y2="310" stroke="#223354" stroke-width="3"/>
    <text x="561" y="300" font-size="34" font-weight="900" fill="#196ecc">[ Child's Full Name ]</text>

    <!-- Body Text -->
    <text x="561" y="365" font-size="17" fill="#223354" font-weight="600">for completing 30 Days of reading curiosity, sound games, and shared bedtime stories.</text>
    <text x="561" y="395" font-size="15" fill="#65718a">You proved that reading is an adventure, one joyful word at a time!</text>

    <!-- Mascot Gold Seal -->
    <g transform="translate(561, 510)">
      <circle cx="0" cy="0" r="65" fill="#ffc531" stroke="#223354" stroke-width="4"/>
      <circle cx="0" cy="0" r="56" fill="#fff9eb" stroke="#ff3b1f" stroke-width="2" stroke-dasharray="4 3"/>
      ${bearSmall(-40, -40, 80)}
      <text x="0" y="48" font-size="9" font-weight="900" fill="#223354">VERIFIED READER</text>
    </g>

    <!-- Signatures -->
    <g transform="translate(200, 630)">
      <line x1="0" y1="0" x2="220" y2="0" stroke="#223354" stroke-width="2"/>
      <text x="110" y="25" font-size="13" font-weight="700" fill="#223354">Parent / Educator Signature</text>
    </g>

    <g transform="translate(700, 630)">
      <line x1="0" y1="0" x2="220" y2="0" stroke="#223354" stroke-width="2"/>
      <text x="110" y="25" font-size="13" font-weight="700" fill="#223354">Date Awarded</text>
    </g>

    <text x="561" y="715" font-size="11" font-weight="600" fill="#65718a">bestkidbooks.online · Certificate ID: BKB-30D-CHAMPION</text>
  </g>
</svg>`;

// Save all files
const files = [
  { name: "cvc-sound-box-mats.svg", folder: "printables", content: cvcMatSvg },
  { name: "silent-e-magic-wands.svg", folder: "printables", content: silentESvg },
  { name: "100-book-reading-tree.svg", folder: "printables", content: treeSvg },
  { name: "animal-friend-bookmarks.svg", folder: "printables", content: bookmarksSvg },
  { name: "reading-champion-certificate.svg", folder: "printables", content: certificateSvg },
  { name: "digraph-detective-hunt.svg", folder: "printables", content: cvcMatSvg.replace("CVC Sound-Box Mapping Mats", "Digraph Detective: sh, ch, th, wh Search") },
  { name: "7-day-reading-kit.svg", folder: "printables", content: cvcMatSvg.replace("CVC Sound-Box Mapping Mats", "The 7-Day Reading Joy Kit") },
  
  // Journals
  { name: "bedtime-connection-journal.svg", folder: "journals", content: treeSvg.replace("100-Book Wall Chart", "The Bedtime Connection Journal Sample") },
  { name: "100-book-explorer-log.svg", folder: "journals", content: treeSvg.replace("100-Book Wall Chart", "The 100-Book Explorer Milestone Log") },
  { name: "feelings-character-journal.svg", folder: "journals", content: treeSvg.replace("100-Book Wall Chart", "Feelings & Friendships Social-Emotional Journal") },
  { name: "tiny-triumphs-habit-diary.svg", folder: "journals", content: treeSvg.replace("100-Book Wall Chart", "Tiny Triumphs 30-Day Habit Diary") },

  // Plans
  { name: "30-day-reading-habit-tracker.svg", folder: "plans", content: treeSvg.replace("100-Book Wall Chart", "30-Day Reading Habit Master Tracker") },

  // Books Guides
  { name: "fox-wakes-the-sun-guide.svg", folder: "books", content: bookmarksSvg.replace("Animal Reading Bookmarks", "Fox Wakes the Sun Companion Activity Pack") },
  { name: "whale-who-forgot-the-sea-guide.svg", folder: "books", content: bookmarksSvg.replace("Animal Reading Bookmarks", "Whale Who Forgot the Sea Bedtime Guide") },
  { name: "mango-the-moon-cat-guide.svg", folder: "books", content: bookmarksSvg.replace("Animal Reading Bookmarks", "Mango the Moon Cat Astronomy & Star Guide") },
  { name: "the-rabbit-listened-guide.svg", folder: "books", content: bookmarksSvg.replace("Animal Reading Bookmarks", "The Rabbit Listened Empathy & Comfort Guide") },
];

files.forEach((f) => {
  const target = path.join(publicDir, "downloads", f.folder, f.name);
  fs.writeFileSync(target, f.content, "utf8");
  console.log("Created:", target);
});
console.log("All downloadable SVG files successfully generated!");
