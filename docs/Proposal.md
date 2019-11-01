CS411: Project Proposal
Team Members: Ashni, Jack, Elton, Lynn


#### New Preferred Idea:
Because we didn't like our original idea, we decided to pivot and design a different project. This project is a math problem solver. Using our app, you upload a picture of a math problem, perhaps scribbled in your notebook, or it's a problem in a textbook, and the app will solve it for you. This works because the picture is routed to an image recognition API called MathPix, which works specifically on mathematical symbols and such text. It parses the image into text and passes the text into the Wolfram-Alpha API which solves mathematical equations or problems using their software. Finally, we display the answer and related steps to get there, back to the user. This handy application helps students solve hard math problems, especially when they are handwritten and perhaps time-consuming or tedious to type into Wolfram-Alpha.

APIs expected: MathPix, WolframAlpha

#### Preferred Idea (deprecated):
A travel itinerary app. Can’t decide on a travel destination? The app will display locations with real-time tweet activity and predicted weather for the dates selected by the user. 
Users create an account on the app which stores their preferences and planned trips. Once a user clicks on a location, the app will generate activities from different travel APIs such as TripAdvisor, Groupon, etc. based on the weather and categories/filters chosen by the user (e.g. price, outdoor/indoor). 
This will help the user get a better sense of what to expect at their travel destinations, by being aware of trending news and events and all the possible activities available to them. The app will also display real-time tweets from users at the location, to get a sense of how popular the activity is at the moment.

APIs expected: TripAdvisor, NOA, Twitter

#### Backup Idea (deprecated):
A flight and hotel price aggregator. Airfare and travel sites are notorious for offering wildly varying prices, making it hard for consumers to find the cheapest option. 
Some of these websites even keep track of if you’ve looked at other travel sites, and adjust their prices accordingly. To make searching for cheap airfare(or transportation) and hotels more easily, the user will simply input location and dates, and our app will aggregate prices from multiple sources and display the cheapest options for the user. 
This will save the user the time and energy of searching through multiple sources or risking having prices altered because of traditional travel sites tracking your activity.

APIs used: TripAdvisor, Skyscanner, Expedia, Kayak

https://medium.com/rakuten-rapidapi/top-10-best-flight-apis-kayak-expedia-skyscanner-and-more-57cc5cd8af72

