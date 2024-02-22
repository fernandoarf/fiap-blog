# Fiap-blog README

This repository is the result of the Final Exercise of Front-End Engineering and User Experience (UX) from class Fiap MBA in Software Engineering 3AOJR.
This README.md file will guide you through the process of running the app locally and deploying it to Netlify, along with the dependencies used in the project and .

## About the App

App available at: https://65d7bc905f14be4a9a69f2e7--fiap-blog-188341.netlify.app/

The app was designed to show a list of posts and categories from a Blog. The home page contains the lastest posts and a list of categories. It is possible to see one of the latests posts by clicking on them or see all the posts published. The posts page shows a the list of posts ordered by the most recent to the oldest, having 5 posts per page.

The app uses the Contentful CSM to access data about the categories and posts published.


## How to Run the App Locally

To run the app on your local machine, follow these steps:

1. **Clone the Repository**: 
```bash
git clone https://github.com/fernandoarf/fiap-blog.git
```
2. **Navigate to the Project Directory:**
```bash
cd fiap-blog
```
3. **Install Dependencies:**
```bash
npm install
```
4. **Start the Development Server:**
```bash
npm run dev
```
Once the development server has started, open your web browser and navigate to http://localhost:5173 to view the application.

## How to Deploy the Application to Netlify
1. **Build the project**
```bash
npm run build
```
2. **Create an account on Netlify**
https://www.netlify.com/
3. **Login and create a Team**s
4. **Go to Sites and Add a new site with the option Deploy manually**
5. **Drop the dist directory created in step 1. in https://app.netlify.com/drop**
6. **Access the Site Overview and see the access url under the Site name**
