# A URL Shortening and QR Code Generation Web Application
## Components
The two main components of the web application are the URL shortener and the QR Code generator. After a user logs in or creates an account, they are directed to a page that houses both tools. Using the URL shortener, the user can create a bite-sized link that is easily shared online, and with a click of a button, that link can be copied to their clipboard.
The QR Code generator takes any text, including the already generated short link, and creates a QR Code image that can be saved by a right-click or a long-press on a mobile device. That image can then be scanned to reveal the information behind the image.
## Technologies Used
This application was built with VueJS and TypeScript. Firebase was used to implement the user authentication process, and the APIs used to build the tools can be found at https://goqr.me/api/doc/ for the QR Code generator and https://shrtco.de/docs for the shortened link creator. Additionally, I implemented a feature to copy the generated short link to clipboard, and the tool can be found at https://github.com/JamieCurnow/vue-clipboard3. The color pallette for the project can be found at https://www.happyhues.co/palettes/4
## Tests
Tests were written using the Jest unit testing framework. Tests were written for three components, with two unit tests in each, for a total of six tests.
## Misc
The application is responsive and is designed to work on various screen sizes from a 1440px-sized computer to a 320px-sized mobile device.
