## Vinous Voyages

## Description

The third project I undertook in my SEI training was to build a full-stack MERN application. This application was to consume data from our own API and contain full CRUD capabilities for users on the client side. My two partners and I decided to build an application where users could learn about wineries around the world, with a view to planning visits to them. Once registered, users were to have full CRUD capabilities with adding/owned wineries on the application, and CD capabilities with reviewing wineries.

## Deployment link

[https://vinous-voyages-8453f6380e78.herokuapp.com](https://vinous-voyages-8453f6380e78.herokuapp.com)

## Code Installation

1. [GitHub Repo](https://github.com/jamesbraid11/Vinous-Voyages) >>
2. Download directory >>
3. Server side:
   i. npm install in root directory
   ii. npm run serve
4. Client side (cd to client directory):
   i. npm install
   ii. npm run dev
5. Open local host in local browser

## Timeframe & Working Team

This was a collaborative project in which I was placed in a group of three. We were given nine days to complete this project, including planning.

## Technologies Used

- VS Code
- GitHub
- Insomnia
- Cloudinary
- Leaflet
- Node.js
- MongoDB Atlas
- React
- React Router
- Express
- Mongoose
- JSON Web Token
- Axios
- Sass
- Bootstrap
- React Bootstrap

## Brief

**Technical Requirements**
- Build a full-stack application by making your own backend and your own frontend.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate frontend built with React.
- Be a complete product, which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.
- Have a visually impressive design.
- Be deployed online so it's publicly accessible.

**Necessary Deliverables**
- A working app hosted on the internet.
- A link to your hosted working app in the URL section of your Github repo.
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project.
- A readme.md file.

## Planning

After deciding on the idea for our application, I created a diagram of the main components we would need on the client side. I then assigned names for the components, their paths and their loaders or actions (where applicable) to be used in our code.

<img width="1184" alt="1-front-end-diagram" src="https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/2275da0c-6f70-416e-b163-dba3e99f41c8">

I also led in creating a diagram for our server side, detailing the flow of processing and connectivity of our application.

![2-back-end-diagram](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/85dad857-b92f-449b-93c9-90322e65db2a)

Next, we created wireframe designs for our main client side components. Below is an example, the wireframe for our home page:

<img width="1179" alt="3-wireframe" src="https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/aca885c1-e400-444e-8820-989fa8c099b8">

Finally, I created a Trello board for this project to ensure we would keep track of our progress accurately and share workloads fairly.

![4-trello](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/8a2f2bff-111a-485e-8777-9ed08071891d)

## Code Process

While one partner built the server side for our application, after drawing up wireframes for our main client side components, I set up main.jsx with child pathways using React Router. I then created files for our main components, stubbed them up and tested the pathways on my local browser. Once the server side was built, I led its testing using Insomnia. Once we were happy that all functionality was working correctly and data being stored on MongoDB Atlas, I was able to start building functionality on the client side components.

First, I created the winery.js loader and wrote functions to fetch all of the wineries data and just that of a single winery from our API. It did not initially work, but after some research, my partners and I discovered that we needed to add a server proxy to the vite.config.js file:

![5-server-proxy](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/bca3e81b-9c92-45c5-b02f-ec626baf98f4)

While others in the group then worked on the winery index component, I completed coding the register and login components. This included creating an action file named auth.js that would post user submitted data to the database:

![6-auth-post](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/4f026232-c719-4a61-b6b3-294d91f04d22)

I included a useEffect in both components that, if register or login was successful, would navigate the user back to the home component. In the useEffect for the login component, the user’s JSON Web Token (created on the server side) would be saved to local storage.

Once winery data was being displayed on the winery index page, I created a dropdown filter by country, and a search bar that would find results matching against name, region, appellation and varietals grown. I was able to incorporate these into one function by combining the two filters into one useState variable as an object:

![7-filters](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/d41af552-c2bb-4922-aecc-841bd94a8843)
![8-filters](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/ea2922ea-17a8-4e8a-8704-ef66426f8618)

This helped greatly in making the code in the winery index component concise. For the countries dropdown filter, I coded the options to be derived from unique values in the database. To protect from user spelling errors in typing this entry when adding a winery to the application, I noted adding autofill/dropdown capability to the country input field on the winery create component. I was later able to achieve this.

I created a function called activeUser that would be used to display update and delete options for users looking at wineries or reviews that they own.

![9-active-user](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/3e99abc1-d6bb-4fb1-87fc-56b3e7662ef9)

Here is an example of its use in the WinerySingle.jsx file:

![10-active-user](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/826c7f50-eb58-407f-966d-15a691e475b9)

Through research, I learned how to create one action function for a component that could handle multiple different user request types. I implemented this on the WineryUpdate.jsx component, on which a user can update or delete their winery. Please see the code snippets below.

WineryUpdate.jsx:

![11-update-or-delete](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/2b2cc476-8b6a-4cdd-9e08-0bab74ef7e5c)

The name and value values are added to the request data as a key value pair.

main.jsx:

![12-update-or-delete](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/f22505a0-f902-453a-8411-cd62adfb1d85)

The request is passed on to the updateOrDeleteWinery function.

winery.js:

![13-update-or-delete](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/1154df1f-c5f2-4803-815f-809c77ee4687)

The request is sorted using if statements according to the value of the intent key in the request data. This ensures the request is sent to the server side end point as the correct request type.

I then used this same structure to make it possible for a user to create and delete (owned) reviews on the WinerySingle.jsx component.

![14-create-or-delete](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/f6981408-bbc1-4c11-8729-d5484976fd71)

Lastly, one of my partners created a modal version of our register and log in components that launched from the ever-present nav bar. I wrote the functions that connected these successfully to the server side.

![15-auth-functions](https://github.com/jamesbraid11/Vinous-Voyages/assets/147768485/3feeb9b8-0a56-49f1-bb55-d8f0703c2912)

Other parts of the project that I did not lead on but got experience with were using Cloudinary to upload images securely and using Leaflet to create an interactive map of global locations.

## Challenges/Wins

Combining multiple user request types in one action function was a big challenge and win in this project. After much research, I eventually found a very obscure, short and simple reference to this functionality on the React website. Once I did though, I was able to swiftly break down and adapt it to function for our needs in this application.

One big challenge throughout this project was that one of my group members was quite far behind the expected achievement level in their programming ability. As a teacher, it came naturally to me to teach and coach them on many tools and methods throughout the process. This helped me to embed my course learning further, and I now feel extremely confident with many aspects of React based applications.

## Key Learning

Over the course of this project, I became very confident with:
- Sending requests to a server using Axios.
- Using loaders and actions through React Router.
- Registering and logging in users securely.
- Creating and using JSON Web Tokens to alter user privileges.
- Facilitating full CRUD capability for users in a MERN application.

New learning I achieved while building this project includes:
- Create register and log in functionality within a modal.
- Performing multiple request types within one action function in React.
- Sending error messages to a user from the server side.
- Creating a server proxy in the Vite configuration.

## Bugs

No current known bugs.

## Future Improvements

I would like to add the following to this application in the future:
- Create two user types, vigneron and voyager, that would have different CRUD capabilities.
- Users can earn badges for the number of reviews they have posted.
- Add a wishlist/favourites button that would save wineries to a user’s profile page.
- A user’s profile page would display places they have visited, their wishlist and reviews they have posted.
- Profile update, delete and password change capability.
- The profile icon to change to a user’s profile picture once logged in.
- Average rating displayed on the winery index page.
- Add filters by average rating on the winery index page.
- Add weather API data to the single winery page to help plan a trip to that location.
- Use the mapbox API to make the winery location easier to input and more dynamic.
