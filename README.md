# Gifty

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Contributors](#contributors)
* [Technologies](#technologies)

## Description

 - This was the capstone project for the [Turing School of Software and Design](www.turing.edu).  We worked in a team of front and back end engineers to complete a full stack application over the course of two weeks.

 - Our team utilized Agile methodologies and a git rebase workflow to collaborate on Gifty, an application to keep track of dates and gift ideas for friends' birthdays. We have all had the experience of shopping last-minute for a birthday gift you forgot to purchase, and settling on something less-than-stellar for an amazing friend. With Gifty, you'll never spend the day before a birthday desperately browsing Amazon again. 

### Deploy Link

https://gifty-capstone.herokuapp.com/

### Frontend Repo

https://github.com/Gifty-capstone/gifty-frontend


### Backend Repo

https://github.com/kendallha/go-look-at-a-tree-api

### Notable frontend features

 - Built using React framework
 - Use of Router to enable user to navigate using back and forward browser controls.
 - Implemented Redux for global state management
 - Frontend tested with Cypress acceptance testing including the use of stubbed fetch data and happy/sad paths
 - Utilized responsive design for mobile, tablet or desktop viewing
 - 95% Lighthouse accessibility score


## Installation
1. Clone down this [repo](https://github.com/Gifty-capstone/gifty-frontend)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Run `npm start` to begin the server
5. Application should open in default browser window (if not, navigate to http://localhost:3000)


## Walkthrough

### Home Page

When the application loads, the dashboard of a demo user is displayed. The dashboard shows a list of upcoming birthdays, as well as if a gift has been purchased for those birthdays. A complete list of friends is displayed on the main dashboard.

<img src="https://user-images.githubusercontent.com/25498241/126571156-f74af2e9-d718-416d-862d-c0521c08e61a.png" width="600">


The user can add a new friend from the dash board, via a modal form.

<img src="https://media.giphy.com/media/xCPXj6j3sLmZ0QgjBr/giphy.gif" width="600">

By clicking on any friend's name, the user can visit their specific gift page to view details about that friend.

On this page, the user can add, delete, or mark any gift as purchased.

<img src="https://media.giphy.com/media/iEPFxFZWS0lCVeAnWa/giphy.gif" width="600">

## Wireframes

<img src="https://user-images.githubusercontent.com/25498241/126570992-9a49b4fa-538f-4989-b110-01140dc3ba55.png" width="400">
<img src="https://user-images.githubusercontent.com/25498241/126571034-e84a10cc-d630-42b9-9778-2b61a8eb37f4.png" width="400">
<img src="https://user-images.githubusercontent.com/25498241/126571053-f5e9bdd0-983b-4eef-8e0d-ef8f5934295d.png" width="400">

## Learning Goals

- Collaborate with backend engineers to build a full stack application.
- Practice using an Agile workflow.
- Implement git rebase workflow.
- Understand and implement Redux. 
- Expand upon React skills to build a more complex application using Hooks.


## Contributors
<table>
    <tr>
        <td><a href="https://github.com/daomeow">Melanie Daoheuang</td>
        <td><a href="https://github.com/kendallha">Kendall Haworth</td>
        <td><a href="https://github.com/rhen92">Rachel Hendricks</td>
    </tr>
    <tr>
      <td><img src="https://avatars.githubusercontent.com/u/72346536?v=4" alt="M. Daoheuang" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/25498241?v=4" alt="K. Haworth" width="125" height="auto" /></td>
      <td><img src="https://avatars.githubusercontent.com/u/76266623?v=4" alt="R. Hendricks" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
  <tr>
    <td><img src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png" alt="react" width="100" height="auto" /></td>
    <td><img src="https://juststickers.in/wp-content/uploads/2018/08/redux.png" alt="css" width="100" height="auto" /></td>
    <td><img src="https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png" alt="javascript" width="100" height="auto" /></td>
    <td><img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="html" width="100" height="auto" /></td>
    <td><img src="https://www.pinclipart.com/picdir/middle/175-1759459_eng-a-med-kamel-frameworks-css-css-logo.png" alt="css" width="100" height="auto" /></td>
  </tr>
  
</table>
