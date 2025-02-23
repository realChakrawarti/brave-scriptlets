window.addEventListener("DOMContentLoaded", () => {
  const ele = document.querySelector('meta[name="user-login"]');
  const userName = ele.content;

  const container = document.querySelector(".AppHeader-globalBar-start");
  const profileLink = document.createElement("a");

  profileLink.href = `https://github.com/${userName}`;
  profileLink.style =
    "display: flex; place-items: center; border: solid var(--borderWidth-thin) var(--button-default-borderColor-rest); border-radius: var(--borderRadius-medium, var(--borderRadius-medium)); padding: 1px 6px; color: var(--fgColor-muted);";
  profileLink.target = "_blank";
  profileLink.innerHTML = "<span>Profile</span>";
  container.append(profileLink);
});
