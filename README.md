# eCommerceJP

![PokeCommerce](https://media.giphy.com/media/NC15xmFtwAY28e5Ga9/giphy.gif)

The MVP of this project was to build a two-paged website that would contain a grid of products, also exposed by a carousel, stored in Firestore, containing some info. All data is stored in Firestore and fetched by the frontend, using a React application. Instead of creating products manually or using a loop in the application as a seeder, I used an existing API (PokeAPI) to fetch items to be used as my range of products. I also used Firestore as a database for user's carts and implemented an authentication process.

## Getting Started

To get started with this project, clone the repository and install the dependencies:

`git clone https://github.com/jpchaib/eCommerceJP.git`

`cd eCommerceJP`

`npm install`

Then, start the development server:

`npm run dev`

This will start the development server and open the app in your default browser. You can now make changes to the code and see the updates in real-time.

## Building for Production

To build the app for production, run the following command:

`npm run build`

This will create a production-ready build of the app in the `dist` directory.

## Credits

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Firestore](https://firebase.google.com/products/firestore?gclid=CjwKCAiAwc-dBhA7EiwAxPRylImQxuzBFXQEmIOAThJYTs41vhywTG9RdXU-HRvV_7N4__7hWhrmmBoCegoQAvD_BwE&gclsrc=aw.ds)
- [PokeAPI](https://pokeapi.co/)




