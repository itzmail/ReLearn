
const navItems = [
    { label: "Doc", href: "#content" },
    { label: "Learn", href: "#learn" },
    { label: "About", href: "#about" }
];

const navList = document.querySelector("header nav ul");

navItems.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    listItem.appendChild(link);
    navList.appendChild(listItem);
});