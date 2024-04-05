# Software Requirements Specification for

# Party Finder

### Version 1.0

#### Created 26/03/2024

#### Updated 1/04/2024

#### Written by Daelop



## Section 0: Table of contents


1. [Background](#1)
    1. [Use Case](#1-1)
    2. [Current industry state](#1-2)
    3. [Goal](#1-3)
2. [Target user base](#2)
3. [Features](#3)
    1. [Minimum viable product](#3-1)
    2. [Additional features](#3-2)



## Section 1: Background <a id="1" ></a>


### Section 1.1: Use case <a id="1-1" ></a>

While somewhat niche, events support the creation and continued existence of some of the strongest gaming communities in the world. These communities are vital to the gaming ecosystem and we are passionate about ensuring that they have the tools to thrive.


### Section 1.2: Current industry state <a id="1-2" ></a>

While there are many readily available tools to facilitate the operation of community events, none of them are dedicated community event tools.

As a result, event organizers are forced to rely on multiple different tools. Some common examples are:

- Google Forms; used for handling applications and audience voting.

- Google Sheets; used for calculating participant scores.

- Discord; used for contacting participants, posting event 
information, and promoting events.

- Twitch (and other streaming platforms) for livestreaming events.


### Section 1c: Goal <a id="1-3" ></a>

The goal of Party Finder is to provide a platform that can handle all of the above tasks in one place. We will achieve this by integrating necessary tools (such as Discord and Twitch), and replacing others (such as Google Forms and Sheets).

By providing a central platform, we aim to simplify the logistics of organizing, running, and finding community events.


## Section 2: Target user base <a id="2" ></a>

With Party Finder, we aim to target multiple different groups. These groups can broadly broken down into:

1. Event organizers who want to streamline the process.

2. Gamers who already participate in community events.

3. Gamers who want to organize community events, but lack the tools or knowledge to do so.

4. Gamers who want to participate in community events but don't know how to find them.



## Section 3: Features <a id="3" ></a>


The specifics of how these features will be implemented is outlined in the [feature implementation document](./feature%20implementation.md).


### Section 3.1: Minimum viable product <a id="3-1" ></a>

For us to achieve the goals of Party Finder, there are a number of features that must be available on release. These features are:

- Authentication; a method of identifying users to track their relationships to events.

- Event creation; the ability for users to input event information and have it stored as event.

- Event listings; the organized display of events that have been created with the stored information.

- Event applications; the ability for users to apply to participate in events by providing the necessary information.

- Application handling; the ability for event organizers to view and resolve applications.

- Participant tracking; the ability for event organizers to view the information of users with accepted applications.

Once all of these features have been implemented, we will consider Party Finder to be in a 'functional' state.


### Section 3.2: Additional features <a id="3-2" ></a>

Of course, these features are just the bare minimum required for Party Finder to function. For Party Finder to provide value to users, many more features are required. These additional features include, but are not limited to:

- Event settings; the ability for event organizers to customize how users view and interact with the event listing.

- Voting; handling of user-provided participant scores.

- Embedded streams; the display of event livestreams on the event listing page.

- Event posts; the ability for event organizers to post updates and promotional material on the event listing page.

- Additional user classes; the ability for event organizers to extend or restrict the scope of user permissions.

- Further event customization; the ability for event organizers to customize their event listing with images, colors, social media links, etc.

- Event sorting and filtering; the ability to sort events and find events with specific attributes.

- Social media links; the optional listing of social media links on an event page.






