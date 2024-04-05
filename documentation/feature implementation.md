# Feature Implementation Specification for

# Party Finder

### Version 1.0

#### Created 1/04/2024

#### Updated 1/04/2024

#### Written by Daelop

## Table of contents
0. [References](#0)
1. [Basic features](#1)
    1. [Authentication](#1-1)
    2. [Event Creation](#1-2)
    3. [Event Listings](#1-3)
        1. [Individual Events](#1-3-1)
        2. [Event Listings Page](#1-3-2)
    4. [Event Applications](#1-4)
    5. [Application Handling](#1-5)
    6. [Participant Tracking](#1-6)
2. [Additional Features](#2)
    1. [Event Settings](#2-1)
    2. [Voting](#2-2)
        1. [Voting Form](#2-2-1)
        2. [Preventing Multiple Submissions](#2-2-2)
        3. [Judge Voting](#2-2-3)
        4. [Score Calculation](#2-2-4)
    3. [Embedded Streams](#2-3)
        1. [Stream Integration](#2-3-1)
        2. [Chat Integration](#2-3-2)
        3. [Twitch Streams](#2-3-3)
        4. [Other Streaming Platforms](#2-3-4)
    4. [Event Posts](#2-4)
    5. [Additional User Classes](#2-5)
    6. [Further Event Customization](#2-6)
        1. [Header Images](#2-6-1)
        2. [Colors](#2-6-2)
    7. [Event Sorting and Filtering](#2-7)
    8. [Social Media Links](#2-8)

## Section 0: References <a id = "0"></a>

This document references PfApi endpoints. Descriptions of these endpoints and their usage can be found in the [PfApi Documentation](PF-Docs.JSON).

## Section 1: Basic Features <a id="1"> </a>

### Section 1.1: Authentication <a id="1-1"> </a>

Authentication is handled by the Discord API. Party Finder processes the user data using the /auth/discord/redirect endpoint and stores the user's access token in a cookie. [UserContext](../party-finder/app/context/UserContext.tsx) takes this token and uses the /auth/discord/user, /users, and /users:id endpoints to retrieve and store the user data in a context. 

This context is passed to every page on the site to be consumed where needed.

### Section 1.2: Event Creation <a id="1-2"> </a>

Event creation is implemented using a form handled by TanStack Form. Once submitted, the form data is passed to the database using the /events endpoint.

### Section 1.3: Event Listings <a id="1-3"> </a>

#### Section 1.3.1: Individual Events <a id= "1-3-1"></a>

Listings for individual events are created by making a call to the /events/:id endpoint and mapping the data to a card.

#### Section 1.3.2: Event Listings Page <a id= "1-3-2"></a>

The events listing page makes a GET request to the /events endpoint and maps each event in the array to it's own card.


### Section 1.4: Event Applications <a id="1-4"> </a>

Event applications are implemented using a form handled by TanStack Form. The form fields are conditionally rendered based on the event's application settings. On submission, the form data is passed to the database, along with the user and event ids, using the /applications/create endpoint.

### Section 1.5: Application Handling <a id="1-5"> </a>

Every application for a given event is found by passing the event id to the /applications/event/id endpoint. Each application in the array is then mapped to a card and displayed to the event organizer. Each card includes an accept button that passes the application data to the /applications/accept endpoint. This deletes the application and creates an event user using the application data.

### Section 1.6: Participant Tracking <a id="1-6"> </a>

All event participants for a given event are found by passing the event id to the /eventusers/event/:id endpoint. Each event user is then mapped to a card and displayed to the event organizer.


## Section 2: Additional Features <a id="2"> </a>


### Section 2.1: Event Settings <a id="2-1"> </a>

Event setting will be implemented using a form handled by TanStack Form. This form will be organized into different sections. Once the form renders, it's default values will be set to the existing values in the event object returned by the /events/:id endpoint. On submission, the edited form data will be passed through a PUT request to the /events/:id endpoint and the event will be updated in the database.

### Section 2.2: Voting <a id="2-2"> </a>

#### Section 2.2.1: Voting Form <a id="2-2-1"> </a>

The voting form will be handled by TanStack Form. Party Finder will map the name of each participant in the event users array to a form field. On submission, the form will pass the form data to a new /scores endpoint using a POST request.

#### Section 2.2.2: Preventing Multiple Submissions <a id="2-2-2"> </a>

We are currently undecided on how to prevent multiple submissions. There are multiple options, but each has its own benefits and drawbacks. These options are:

- Requiring users to log in to vote. This method is the easiest and most reliable. It does, however, add a lot of friction to the voting process. This could potentially have a significant negative effect on audience participation.

- Creating a cookie on vote submission. This method is frictionless, but can be worked around by bad actors by deleting the cookie.

- Only allowing one vote per IP. Can be worked around, but requires a VPN. Causes issues if multiple users are on the same network.

It is likely that we will allow event organizers to choose which validation method they would like to use. Doing so increases user agency and reduces our liability in the case of fraudulent votes.

#### Section 2.2.3: Judge Voting <a id="2-2-3"> </a>

Judge voting will be done using the same voting form as audience voting. However, judge votes will be stored separately, POSTing to a different endpoint on submission.

#### Section 2.2.4: Score Calculation <a id="2-2-4"> </a>

Scores will be calculated using the data from both audience and judge votes. Event organizers will be able to define how votes are weighted when calculating final scores.

### Section 2.3: Embedded Streams <a id="2-3"> </a>

#### Section 2.3.1: Stream Integration <a id="2-3-1"> </a>

Party Finder will provide stream integration for events. Event organizers will be able to link their live stream to the event page. This can be done by adding the stream URL in the event settings. The embedded stream will be displayed on the event page for participants to watch.

#### Section 2.3.2: Chat Integration <a id="2-3-2"> </a>

 To enhance the streaming experience, Party Finder will also provide chat integration. Participants will be able to chat with each other during the live stream. The chat will be displayed alongside the embedded stream on the event page.

#### Section 2.3.3: Twitch Streams <a id="2-3-3"> </a>

Twitch streams will be implemented using the Twitch API for embedding streams.

#### Section 2.3.4: Other Streaming Platforms <a id="2-3-4"> </a>

Compatibility with other streaming services will be an ongoing project. When/if compatibility for each streaming service is added will be determined by the following factors:

- Demand.

- Compliance with Party Finders content guidelines and terms of service.

- Ease of access to the API.

### Section 2.4: Event Posts <a id="2-4"> </a>

Event posts will be created using a form handled by TanStack Form. This form will have multiple optional fields to cater to various different types of posts. On submission, the form data will be passed to the database through a POST request to a new PfApi route named /posts.

### Section 2.5: Additional User Classes <a id="2-5"> </a>

Additional classes will be implemented by adding a new key in the event object. This is an example of what that key could look like:

```
perms:{
    judge:{
        scope:{
            editEventInfo:false,
            editEventTime:false,
            manageApplications:false,
            manageContestants:false,
            judgeVoting:true
        }
        users:["user3", "user4", "user5"]
    }
     admin:{
        scope:{
            editEventInfo:true,
            editEventTime:true,
            manageApplications:true,
            manageContestants:true,
            judgeVoting:true
        }
        users:["user1", "user2", "user3"]
    },
     moderator:{
        scope:{
            editEventInfo:false,
            editEventTime:false,
            manageApplications:true,
            manageContestants:true,
            judgeVoting:false
        }
        users:["user7", "user8", "user9"]
    }

}
```
In this example, 'judge', 'admin' and 'moderator' define the names of the user classes. Within the nested object, 'scope' defines the permissions of the class and the user array defines the users with the class.

### Section 2.6: Further Event Customization <a id="2-6"> </a>

#### Section 2.6.1: Header Images <a id="2-6-1"> </a>

Header images will be implemented using a storage bucket for user uploaded images. The event object will contain a reference to the image in the storage bucket that will be used as the source for a Next.js ```<Image>``` tag.

#### Section 2.6.2: Colors <a id="2-6-2"> </a>

Users will be able to change the color scheme of their event listing and event page. This will be implemented by including color pickers in the display settings section of event settings. The event listing and event page will then have a style applied to them based on the display settings.

### Section 2.7: Event Sorting and Filtering <a id="2-7"> </a>

Event filtering will be implemented by adding a 'tags' key to the event object model. The filter component will query the database and search for all events with a specific tag. Events will also be able to be filtered by other keys, such as 'game' or 'date'. Event sorting will be implemented by manipulating the events array to order events by various parameters.

### Section 2.8: Social Media Links <a id="2-8"> </a>

Social media links will be implemented by adding a new 'socials' key to the event object. The value of the socials key will be an array of objects. This is an example of the structure of the socials array and it's nested objects.
```
socials: [
    {
    name:"discord",
    href: "discord.gg/exampleserver"
    icon: null
    },
    {
    name: "Our Youtube Channel",
    href: "https://www.youtube.com/channel/examplechannel"
    }
]
```
