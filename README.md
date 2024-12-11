# Greenspark Product Assignment

![The final look](assets/images/final.png)

## URL:

[Vercel URL](https://greenspark-sigma.vercel.app/)

- Next JS application for the Greenspark assesment:

Why NextJS?

For the purpose of this project I intended to use React(NextJS) just based off my frequence of usage, happy to re-write the project using other familiar frameworks like Vue(Nuxt) as the case may be.

## Links

- [Task](https://drive.google.com/file/d/1ISb15W3a_MYC5fTgia0wDFgKmso75RGi/view)
- [Design](https://www.figma.com/file/EpzAE594mkDkMvg09WTqpb/Frontend-task?node-id=0%3A1)
- [API](https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets)

## Tech Stack

- Framework: NextJS
- Styling: Tailwind
- UI: Radix UI
- State management: Context API
- Testing: Jest
- UI testing: Storybook

## Installation

1. Clone the repository

2. Ensure the project runs within the desired node engine:
   `nvm use`

3. Install dependencies
   `npm install`

4. Run development server
   `npm run dev`

5. Open the application on
   `http://localhost:3001`

6. For testing
   `npm run test`

7. For storybook
   `npm run storybook`

## App Breakdown

1. State management
   The application uses React Context for state management through the `WidgetContext`. This provides:

- Widget data management
- Active widget tracking
- Widget updates and modifications
- Loading and error states

Decided to use context because the app is a simple project and does not require usage of Redux which is similar to Vuex for Vue applications.

2. Typescript
   It's a typescript based project with typesetting across files within the app.
