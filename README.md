# Brave Scriptlets - Customize experience on Brave Browser


## Steps to enable custom filter and scriptlets

- Go to

```
brave://settings/shields/filters
```
All scriptlets and filter needs to be added here.

- Enable Developer Mode

- Add New Custom Scriptlet called `user-scriptlet.js`

```
console.log('Brave scriptlet')
```

![image](https://github.com/user-attachments/assets/e45b8aaf-7d04-4ef0-bf17-7722d7eaea2a)


- Create a Custom Filter: `brave.com,example.com##+js(user-scriptlet.js)`

- Click Save Changes

- On the Brave or Example page, open the DevTools (F12) console then refresh the page


**NOTE:** Brave Shields must be Up.


## Refer: 
- https://brave.com/privacy-updates/32-custom-scriptlets/
- https://www.bleepingcomputer.com/news/software/brave-now-lets-you-inject-custom-javascript-to-tweak-websites/
