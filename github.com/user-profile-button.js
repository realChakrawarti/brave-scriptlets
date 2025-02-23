window.addEventListener("DOMContentLoaded", () => {
  const ele = document.querySelector('meta[name="user-login"]');
  const userName = ele.content;

  const container = document.querySelector(".AppHeader-globalBar-start");
  const profileLink = document.createElement("a");

  const icon = `<svg aria-hidden="true" focusable="false" class="Octicon-sc-9kayk9-0" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" style="display: inline-block; user-select: none; vertical-align: text-bottom; overflow: visible;"><path d="M10.561 8.073a6.005 6.005 0 0 1 3.432 5.142.75.75 0 1 1-1.498.07 4.5 4.5 0 0 0-8.99 0 .75.75 0 0 1-1.498-.07 6.004 6.004 0 0 1 3.431-5.142 3.999 3.999 0 1 1 5.123 0ZM10.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg>`;

  profileLink.href = `https://github.com/${userName}`;
  profileLink.style =
    "display: flex; place-items: center; border: solid var(--borderWidth-thin) var(--button-default-borderColor-rest); border-radius: var(--borderRadius-medium, var(--borderRadius-medium)); padding: 1px 6px; color: var(--fgColor-muted);";
  profileLink.target = "_blank";
  profileLink.innerHTML = icon;
  container.append(profileLink);
});
