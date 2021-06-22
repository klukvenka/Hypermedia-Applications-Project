# Hypergnocchi
## Group Members
- Aida Gasanova 10732229‌ aida.gasanova‌@mail.polimi.it
- Lorenzo‌ ‌Grossi‌ ‌10570753‌ lorenzo.grossi@mail.polimi.it‌
- Veronica‌ ‌Lucchetti ‌10539391‌ ‌veronica.lucchetti@mail.polimi.it
- Sairaghav‌ ‌Venkataraman‌ ‌10767948‌ sairagav.venkataraman@mail.polimi.it

## Group Member Contribution
- **Aida Gasanova:** 
```
1. Low-fidelity wireframes
2. High-fidelity wireframes
3. Code for Homepage (pages/index.vue), Contact Us (pages/contact_us.vue) and Company (pages/the_company.vue)
4. Design document
```
- **Lorenzo Grossi:**
```
1. C-IDM and P-IDM
2. High-fidelity wireframes
3. Code for Area (pages/areas.vue), Products (pages/products.vue) and Our Team (pages/our_team.vue) introduction pages
4. Design document
```
- **Veronica Lucchetti:**
```
1. C-IDM and P-IDM 
2. Code for individual areas (pages/Areas/AreaInfo.vue), individual products (pages/Products/ProductInfo.vue) and individual team member pages (pages/our_team/MemberInfo.vue)
3. Collection of data for all members, products and areas
4. Logo design
5. Design document
```
- **Sairaghav Venkataraman:**
```
1. High-fidelity wireframes
2. Code for components - Navbar (components/Navbar.vue), Breadcrumbs (components/Breadcrumbs.vue), Footer (components/Footer.vue), Shortpage (components/Shortpage.vue), Heading (components/Heading.vue), Topbar (components/Topbar.vue)
3. Chatbot (components/Chat.vue, mixins/mmcc-mixin.js and Chatbot/chatbot-config.json)
4. CSS (layouts/default.vue), Error page (layouts/error.vue)
5. Services to access DB (services/*)
6. Axios config for API (http-common.js)
7. Server (server/routes/*, server/server.js)
8. DB (server/models/, server/migrations/*, server/config/*, server/controllers/*)
9. Github README
```

## Technical Documentation
- **Server and DB Technologies:** [server/README.md](./server/README.md)
- **Components Developed and their structure:** [components/README.md](./components/README.md)
- **Plugins:** [plugins/README.md](./plugins/README.md)
- **Chatbot:** [Chatbot/README.md](./Chatbot/README.md)

## Compliance to best-practices of framework

**Consistency of page design, colors and font:**

- **Consistent design CSS, fonts and colors (layouts/default.vue):** Making use of layouts folder provided by Nuxt for easy management of consistent CSS and components across all pages. Detailed explanation provided [here](./layouts/README.md)

- **Common error page (layouts/error.vue):** Making use of layouts folder provided by Nuxt for common error page for all errors encountered by user. Detailed explanation provided [here](./layouts/README.md)

**Re-usability of code:**

- **Re-usable CSS**: Most of the CSS to be re-used is configured in layouts/default.vue and CSS is only added to individual pages if there is a need to over-write some styles for the specific page. All styles that is valid for the particular page is provided with `scoped` attribute. Detailed explanation provided [here](./layouts/README.md)

- **Re-usable code**: Almost ALL the information in the website is displayed using a SINGLE component (components/ShortPage.vue). Each part of the web-page is written as a set of components (Navbar, Footer, Topbar, Chat, Heading and ShortPage) and displayed as necessary.
Detailed explanation provided [here](./components/README.md)

**Adherence to project specification:**

- **Responsiveness**: The website is responsive and will adapt to the device height and width due to the use of CSS Media queries


**Adherence to applicable usability heuristics:**

- **Visibility of system status:** The breadcrumbs are displayed on top of every page and there are landmarks in header and footer in all pages. The top bar with the navigation and the breadcrumbs is displayed on top wven if user scrolls down on the page.

- **Match between system and the real world:** Well-known terms like Products, Team, About and Contact are used throughout the website.

- **Consistency and standards:** The consistency is implemented through the re-usability of components and default.vue in layouts for CSS and behavior.

- **Error prevention:** In the 2 pages that require user input, message is displayed if there is a need to fill all fields nad if user entry matches validation of field (e.g. email)

- **Help users recognize, diagnose and recover from errors:** Common error page is displayed when user encounters an error (layouts/error.vue). In the 2 pages that require user input, message is displayed if there is a need to fill all fields nad if user entry matches validation of field (e.g. email)

