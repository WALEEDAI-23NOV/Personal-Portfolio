// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const navLinks = [
  { href: "#hero",     label: "Home" },
  { href: "#about",   label: "About" },
  { href: "#tools",   label: "Tools" },
  { href: "#projects", label: "Projects" },
  { href: "#cta",     label: "Contact" },
];

// ─── SKILLS ───────────────────────────────────────────────────────────────────
export const frontendSkills = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",              name: "HTML 5" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",                name: "CSS 3" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",    name: "JavaScript" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",    name: "TypeScript" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",      name: "Angular" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",              name: "React" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",            name: "Next.js" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",            name: "Node.js" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",          name: "MongoDB" },
];

export const stylingSkills = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",               name: "Sass" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",     name: "Bootstrap" },
];

export const uiSkills = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg",         name: "Chakra UI" },
  { img: "https://mui.com/static/logo.png",                                                                   name: "Material UI" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg", name: "React Bootstrap" },
];

export const toolSkills = [
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                 name: "Git" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",        name: "WordPress" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",             name: "Figma" },
  { img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",           name: "VSCode" },
];

// ─── SKILL GROUPS (used by Tools section) ─────────────────────────────────────
export const skillGroups = [
  { label: "FRONTEND & BACKEND", lineClass: "",       skills: frontendSkills, gridClass: "" },
  { label: "STYLING",            lineClass: "pink",   skills: stylingSkills,  gridClass: "small" },
  { label: "UI LIBRARIES",       lineClass: "orange", skills: uiSkills,       gridClass: "small" },
  { label: "TOOLS & DEVOPS",     lineClass: "green",  skills: toolSkills,     gridClass: "" },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    num: "01",
    name: "✦ Smart Event Management System (SEMS)",
    desc: "The Smart Event Management System (SEMS) is a platform for planning, booking, and managing events in one place. It connects organizers, vendors, and customers to streamline coordination.",
    tags: ["Java", "Kotlin", "XML", "Firebase"],
    imgGradient: "linear-gradient(135deg,#0d3b6e,#1a2d50)",
  },
  {
    num: "02",
    name: "✦ DEAD BY DAYLIGHT GAME WEBSITE",
    desc: "A fan-made website dedicated to the game Dead by Daylight, built using React and styled with Tailwind CSS for a sleek and responsive design.",
    tags: ["React", "Tailwind"],
    imgGradient: "linear-gradient(135deg,#3b0d0d,#200a0a)",
  },
  {
    num: "03",
    name: "✦ Gaming Website UI AC Valhalla",
    desc: "The website faithfully recreates the game's dark and mysterious aesthetic, with a focus on stunning visuals, seamless navigation, and engaging user interactions.",
    tags: ["React", "Tailwind"],
    imgGradient: "linear-gradient(135deg,#0d3b1a,#1a3020)",
  },
  {
    num: "04",
    name: "✦ AamAwaam – News & Blogging Platform (WordPress)",
    desc: "A WordPress-powered news platform designed to present impactful stories with clarity and accessibility. Features responsive design and category-based news coverage.",
    tags: ["WordPress", "Divi", "PHP", "CSS"],
    imgGradient: "linear-gradient(135deg,#8b0000,#3b0d0d)",
  },
];

// ─── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { num: "1+",  label: "Years Experience" },
  { num: "10+", label: "Projects Delivered" },
  { num: "3+",  label: "Technologies" },
];

// ─── POSTS ────────────────────────────────────────────────────────────────────
export const posts = [
  {
    initials:  "FH",
    name:      "Faizal Hussain M",
    time:      "2d ago",
    category:  "React Tips 💡",
    icon:      "⚛️",
    iconLabel: "React Hooks",
    bg:        "linear-gradient(135deg,#0d3b6e,#1a2d50)",
    iconColor: "#4f8ef7",
    footer:    "How to use useCallback properly 🚀",
  },
  {
    initials:  "FH",
    name:      "Faizal Hussain M",
    time:      "5d ago",
    category:  "React 19 ⭐",
    icon:      "🆕",
    iconLabel: "useFormStatus",
    bg:        "linear-gradient(135deg,#1a0d3b,#2d1a50)",
    iconColor: "#9b59b6",
    footer:    "React 19 new hooks explained ✨",
  },
  {
    initials:  "FH",
    name:      "Faizal Hussain M",
    time:      "1w ago",
    category:  "CSS Power 💪",
    icon:      "🎨",
    iconLabel: "CSS Attributes",
    bg:        "linear-gradient(135deg,#0d3b1a,#1a502d)",
    iconColor: "#2ecc71",
    footer:    "Power of CSS Attr(ibutes) 🔥",
  },
];

// ─── VS CODE TYPING LINES ─────────────────────────────────────────────────────
export const vsCodeLines = [
  {
    plain: "class Work extends Life {",
    html:  '<span class="kw-class">class</span> <span class="kw-name">Work</span> <span class="kw-extends">extends</span> <span class="kw-name">Life</span> <span class="kw-punct">{</span>',
  },
  {
    plain: "    constructor(wokeup) {",
    html:  '    <span class="kw-constructor">constructor</span><span class="kw-punct">(</span><span class="kw-param">wokeup</span><span class="kw-punct">) {</span>',
  },
  {
    plain: "        if (this.wokeup) {",
    html:  '        <span class="kw-if">if</span> <span class="kw-punct">(</span><span class="kw-this">this</span><span class="kw-punct">.</span><span class="kw-param">wokeup</span><span class="kw-punct">) {</span>',
  },
  {
    plain: "            this.code()",
    html:  '            <span class="kw-this">this</span><span class="kw-punct">.</span><span class="kw-method">code</span><span class="kw-punct">()</span>',
  },
  {
    plain: "        } else {",
    html:  '        <span class="kw-punct">} </span><span class="kw-if">else</span> <span class="kw-punct">{</span>',
  },
  {
    plain: "            this.playCricket()",
    html:  '            <span class="kw-this">this</span><span class="kw-punct">.</span><span class="kw-method">playCricket</span><span class="kw-punct">()</span>',
  },
  {
    plain: "        }",
    html:  '        <span class="kw-punct">}</span>',
  },
  {
    plain: "    }",
    html:  '    <span class="kw-punct">}</span>',
  },
];
