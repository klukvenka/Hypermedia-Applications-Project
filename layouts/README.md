# LAYOUTS

- **Template:**
```
Loads the chat and footer in all pages
```

- **CSS:**

**1. .topbar:** Visible on all pages except home page. It is fixed to the top and always displayed when user scrolls down. Displays the Navbar and breadcrumb.
```
.topbar {
  position: sticky;
  top:0vh;
  width: 100vw;
}
```

**2. .content:** Displays data with a shadow border.
```
.content {
  margin: 2vh 10vw;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
}
```

**3. .card:** Displays data with a shadow border and text aligned to center. This is used for images with heading and cursor changes to pointer.
```
.card {
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
  margin: 2vh 2vw;
  cursor: pointer;
}
```

**4. .flex-list:** Displays data in flex but wraps content with center alignment
```
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

**5. display-details:** Displays data in flexbox and displays side-by-side.
```
.display-details {
  display: flex;
}
```

- **Common Error page:**
```
Displays a common error message with link to home
```