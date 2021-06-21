# PLUGINS

**1. MMCC:** Plugin for chatbot: https://gitlab.com/i3lab/mmcc/frontend/mmcc-vue.git


**2. Axios:** Defined in `http-common.js`. API served in /api base URL. Makes use of services defined in ../services/ folder
```
AreaDataService:
    getAll - /api/areas/all
    getByName(name) - /api/areas/name?name=${name}
MemberDataService:
    getAll - /api/members/all
    getByName(name) - /api/members/name?name=${name}
    getByProduct(name) - /api/members/product?product=${name}
    getByArea(name) - /api/members/area?area=${name}
ProductDataService:
    getAll - /api/products/all
    getByName(name) - /api/products/name?name=${name}
    getByArea(name) - /api/products/area?area=${name}
    getByManager(name) - /api/products/manager?manager=${name}
    getByReference(name) - /api/products/reference?reference=${name}
```
