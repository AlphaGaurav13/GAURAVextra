const sidebar = document.querySelector(".sidebar");
const sidebarTogglebtn = document.querySelector(".sidebar-toggle");

sidebarTogglebtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
})