# COMPONENTS

- **ShortPage.vue:**
```
This is the component which is re-used the most in the website.

This component displays the areas, members and products based on the props passed to this component.

Props:

The props that can be passed to this component are:

1. needHeading: If this is true, the component displays the heading specifying the area name as a link. 
                This is used in all intro pages for areas, our_team and products page

2. getArea: If this is true, the component will display details of the area value passed in 'forArea' prop.
            getArea ALWAYS requires 'forArea' prop (Object type) to be passed.

3. getMember: If this is true, the component will display details of all members of the specific area passed in 'forArea' prop.
                getMember ALWAYS requires 'forArea' prop (Object type) to be passed. 
                If 'mem' prop (String type) is also passed as an optional parameter, the component will display only that particular member details.

4. getProduct: If this is true, the component will display details of all products of the specific area passed in 'forArea' prop.
                getProduct ALWAYS requires 'forArea' prop (Object type) to be passed. 
                It also accepts optional parameters 'item' which is an array and will have value of list of products passed by 'MemberInfo.vue'.

5. needToggleInfo: If this is true, the message '(Click on image to toggle short description)' will be displayed.

Computed:

1. isMemberReady: Checks if getMember is true. If getMember is false, exits.
                  If getMember is true, checks if 'mem' is passed. If 'mem' is passed, executes method retrieveMembersByName. Else, executes retrieveMembersByArea

2. isProductReady: Checks if getProduct  is true. If getProduct is false, exits.
                   If getProduct is true, checks if 'item' is passed. If 'item' is passed, returns 'item'. Else, executes retrieveProductsByArea.

Methods:

1. retrieveMembersByName: Uses MemberDataService to retrieve members based on 'mem' value passed

2. retrieveMembersByArea: Uses MemberDataService to retrieve members based on 'forArea' value passed

3. retrieveProductsByArea: Uses ProductDataService to retrieve products based on 'forArea' value passed

4. isShow(item): Toggles whether to show/hide a card by using an array 'renderItem'. 
                 The value of 'item' passed is added to the array if it is not there already, and removed if already exists in array.
```

- **Breadcrumbs.vue:**
```
This is the component that displays the breadcrumbs on top of the page.
The current path of the page is obtained from this.$route.path parameter split using '/' character.

We then loop over the crumbs parameter for each split of '/' and the link is generated based on the index of the crumb.

For instance, for page Products/ProductInfo?name=Product1, the crumbs will be 'Products' and 'ProductInfo'. 
The breadcrumbs however will display 'Products / Product1' only. This is because, 'ProductInfo' is not an actual page.
```

- **Chat.vue:**
```
Not much has been changed from https://gitlab.com/hypermedia2020-21/hands-on-3/-/blob/master/components/Chat.vue

The only changes were in CSS to adjust height, width of .chat-container and .button.

Also, img src was changed from URL to local file in /static folder
```

- **Footer.vue:**
```
This component for Footer displays all the landmark links as an unstyled list.

'list-unstyled' CSS is defined to not display bullet points.
```

- **Heading.vue:**
```
This Heading component accepts heading, subheading and description parameters to be displayed in order of heading style
```

- **Navbar.vue:**
```
This Navbar component displays the navigation bar on top with the menu names specified in script data section.

The Navbar will adjust based on device width (< 800px) using @media CSS.


/*Do not lock navbar on top when device width is small*/
  .navbar {
    display: block;
    position: relative;
  }
  /*Define size of logo for small device*/
  .logo img {
    height: 10vh;
    width: 100vw;
  }
```

- **Topbar.vue:**
```
This component displays the Navbar along with the breadcrumbs on top of the page.

The CSS for 'topbar' is specified in layouts/default.vue
```
