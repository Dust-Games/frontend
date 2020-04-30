# Frontend for project Dust Games 🎮

### What's that?

It' s the frontend part for the Dust Games project website. The purpose of the site is to give users the opportunity to earn coins (and bring them to real money) by using the referral program, forecasts, tournaments and participation in them, as well as other tools.

### Project architecture

1. assets folder
   fonts
   icomoon - icon font, folder is fully copied, downloaded from icomoon site
   images - png, svg, jpeg and the like
   scss - styles
2. components folder - components shared for the project (not ui)
   auth - the thing about authorization (it's all in modals)
3. folder ui-components - ui-components shared for the project
4. the locales folder - is what concerns localization
5. folder router - vue router
6. store folder - store for the project (all store here)
7. services - the folder where backend and frontend meet
   httpClient - setup file for all services
8. modules folder - application parts divided into modules
   home - home page
   info - reference pages, links to which are in the sidbar footer
   other - something that doesn't concern other modules
   user - what concerns the user (profile, wallet, etc.)
9. App.vue - entry point of the vue application (+ modals are also glued here)
10. main.ts - application entry point (libraries are screwed on here)
11. \*.d.ts - what about typescript

### Installation

Install all dependencies

```
npm install
```

Build project

```
npm run build
```

(for development) Run project on localhost

```
npm run serve
```
