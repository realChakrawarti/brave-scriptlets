## Hide Co-pilot icon from the header

```
github.com##.AppHeader-CopilotChat:remove()
```

## Hide Co-pilot search from the Dashboard
```
github.com##.copilotPreview__container:remove()
```

## Add Profile button on header
When clicked, redirects to `https://github.com/<username>` on a new tab
![profile-button](./profile-button.png)
```
github.com##+js(profile-button.js)
```
