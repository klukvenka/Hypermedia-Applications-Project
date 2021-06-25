# LAYOUTS

- **UI Layout:**
```
Loads the chat and footer in all pages
```

- **CSS:**

`viewport-height (vh)` and `viewport-width (vw)` are used wherever possible to adjust to available viewport instead of specific number of pixels.

Font is configured as Arial with size 16px in layouts/default.vue unless explicitly specified.

1. **.topbar:** Visible on all pages except home page. It is fixed to the top and always displayed when user scrolls down. Displays the Navbar and breadcrumb.
```
.topbar {
  position: sticky;
  top:0vh;
  width: 100vw;
}
```

2. **.content:** Outermost box for displaying content. Difference with .card is the margin parameter.
```
.content {
  margin: 2vh 10vw;
  text-align: center;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px #ccc;
  padding: 1%;
}
```

3. **.card:** Displays data with a shadow border and text aligned to center. This is used for images with heading and cursor changes to pointer. Card-like box for displaying content. Difference with .content is the margin parameter
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

4. **.flex-list:** Displays data in flex but wraps content with center alignment
```
.flex-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

5. **display-details:** Displays data in flexbox and displays side-by-side.
```
.display-details {
  display: flex;
}
```

6. **.card img:** Padding for all <img> elements in .card
```
.card img {
  padding: 1%;
}
```
7. **button:** Define property for button for all pages. Cursor will become pointer and button color will be black with white text.
```
button {
    border: none;
    background-color: black;
    color: white;
    outline: none;
    padding: 2%;
    margin: 2%;
    cursor: pointer;
    box-shadow: 2px solid #333;
}
``` 
8. **button:hover:** Define common behavior when hovering over <button> elements. When hovering, button will turn blue color
```
button:hover {
  background-color: steelblue
}
```

9. **.blue-text:** Define property 'blue-text' with blue color and no line underneath. Intended to be used for <a> 
```
.blue-text {
  color: steelblue;
  text-decoration-line: none;
}
```

10. **.breadcrumbs:** Define common properties for breadcrumbs in all pages with border and padding
```
.breadcrumbs {
  background-color: rgb(255, 255, 255);
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 10rem;
  padding: 10px;
}
```

11. **.breadcrumb-item:** Transform breadcrumb text to capital and display in bold
```
.breadcrumb-item {
  display: inline;
  text-transform: uppercase;
  font-weight:bold;
}
```

12. **img:** Define common <img> size if not explicitly provided
```
img {
  width: 300px;
  height: 300px;
}
```

13. **p:**Configure common font size and alignment for all <p> elements

```
p {
    text-align: justify;
    font-size: 13px;
}
```

14. **text-center:** Define property to align text center
```
.text-center {
  text-align: center;
}
```

15. **.topic-content:** Define padding for topic-content element used in index.vue and the_company.vue. 
```
.topic-content {
  padding: 2%;
}
```

16. **.top-image:** Define property of top-image element used in index.vue and the_company.vue. 
```
.top-image {
  margin-top: 1%;
  width: 100vw;
  height: 60vh;
}
```

17. **.light-heading:** Define property for heading with lighter font
```
.light-heading {
    font-weight:normal;
    text-align: justify;
}
```

Media query CSS is provided in `Responsiveness` section of main README. [Main README](../README.md)

- **Common Error page:**
```
Displays a common error message with link to home.
```