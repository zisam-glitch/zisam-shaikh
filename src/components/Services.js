import { Fragment, useEffect, useState } from "react";
import { Servicehashtag } from "../utilits";
import ServicePopup from "./popup/ServicePopup";

const serviceData = [
  {
    name: "Website and Web App",

    description: [
      "I Will design the visual layout and overall look and feel of websites and web applications. This includes creating wireframes, mockups, and prototypes to plan the user interface (UI) and user experience (UX) design.",
      "Website and web app design is a crucial aspect of frontend development. It involves creating the visual elements and user interfaces that users interact with when they visit a website or use a web application. Here are some key components and considerations for website and web app design:",
      "1. User Interface (UI) Design: UI design focuses on the aesthetics and layout of the elements on the screen. This includes designing buttons, menus, forms, icons, and other visual elements to create an attractive and user-friendly interface.",
      "2. User Experience (UX) Design: UX design is about ensuring that the website or web app provides a seamless and intuitive user experience. This involves understanding user behavior, conducting user research, and designing user flows that make it easy for users to achieve their goals.",
      "3. Wireframing and Prototyping: Before diving into the actual design, it's common to create wireframes and prototypes. Wireframes are simple sketches that outline the basic layout and structure, while prototypes are interactive mockups that allow you to test the user experience before development begins.",
      "4. Responsive Design: Designing for different screen sizes and devices is essential. Ensure that your designs are responsive, meaning they adapt gracefully to various screen resolutions, including desktops, tablets, and smartphones.",
      "5. Typography: Choose appropriate fonts and typography styles that are easy to read and match the overall design theme. Typography can greatly impact the visual appeal and readability of a website or app.",
      "6. Color Scheme: Select a color palette that aligns with the brand and creates a visually pleasing experience. Consider the psychological impact of colors and their accessibility for all users, including those with visual impairments.",
      "7. Images and Graphics: Incorporate images, icons, and graphics that enhance the content and engage users. Optimize images for fast loading times and ensure they are high-quality and relevant.",
      "8. Consistency: Maintain design consistency throughout the website or app. Use consistent fonts, colors, and styles to create a unified look and feel.",
      "9. Navigation Design: Design an intuitive navigation system that helps users easily find the information they need. This may include menus, breadcrumbs, and search functionality.",
      "10. Feedback and Interactivity: Incorporate feedback mechanisms such as hover effects, animations, and micro-interactions to provide visual cues and enhance the user experience.",
      "11. Accessibility: Ensure that your design is accessible to all users, including those with disabilities. Follow WCAG guidelines to make your design compliant with accessibility standards.",
      "12. Testing and Iteration: Test your designs with real users or stakeholders to gather feedback. Use this feedback to iterate and improve your designs before development begins.",
      "13. Collaboration: Work closely with developers, content creators, and other team members to ensure that the design can be implemented effectively and that it aligns with the project's goals.",
      "14. Mobile App Design: If you're designing for mobile apps, consider platform-specific guidelines (e.g., iOS Human Interface Guidelines or Material Design for Android) to ensure consistency with the operating system's design principles.",
      "15. Prototyping Tools: Use design and prototyping tools like Adobe XD, Sketch, Figma, or InVision to create and share your design concepts with stakeholders and developers.",
      "Effective website and web app design not only make a site visually appealing but also contribute significantly to user engagement, satisfaction, and the overall success of the project. Collaboration, user-centered design principles, and attention to detail are key to creating compelling designs.",
    ],
  },
  {
    name: "JavaScript Development",

    description: [
      " I will use JavaScript to add interactivity and dynamic functionality to websites and web apps. This can include things like form validation, animations, and real-time updates.",
      "JavaScript is a versatile programming language commonly used in frontend web development to add interactivity and dynamic functionality to websites and web applications. As a JavaScript developer, your role is crucial in creating a responsive and engaging user experience. Here are some key aspects of JavaScript development:",
      "Basic Syntax: Understanding the fundamental syntax of JavaScript, including variables, data types, operators, and control structures (if statements, loops), is essential.",
      ,
      ,
      "DOM Manipulation: JavaScript is used to manipulate the Document Object Model (DOM), which represents the structure of a web page. You can use JavaScript to modify HTML elements, change their attributes, and respond to user interactions.",
      ,
      ,
      "Event Handling: JavaScript allows you to capture and handle events triggered by user actions, such as clicks, mouse movements, keypresses, and form submissions. Event listeners are used to respond to these events.",
      ,
      ,
      "Functions: Functions in JavaScript allow you to group and reuse blocks of code. You can create both named and anonymous functions and pass them as arguments to other functions.",
      ,
      "Asynchronous Programming: JavaScript supports asynchronous operations using callbacks, promises, and async/await. This is crucial for handling tasks like fetching data from APIs or performing time-consuming operations without blocking the user interface.",
      ,
      "Working with Arrays and Objects: Arrays and objects are fundamental data structures in JavaScript. You'll often work with arrays to store and manipulate collections of data, while objects are used to represent structured information.",
      ,
      "ES6+ Features: Familiarize yourself with ES6 (ECMAScript 2015) and newer features such as arrow functions, template literals, destructuring, and the spread/rest operator. These modern features enhance code readability and maintainability.",
      ,
      "AJAX and Fetch API: JavaScript is used to make asynchronous requests to web servers to fetch data or send data to the server. The Fetch API is commonly used for this purpose.",
      ,
      "Client-Side Validation: Implement client-side form validation to provide immediate feedback to users and reduce the likelihood of incorrect data submission.",
      ,
      "Error Handling: Handle errors gracefully by using try...catch blocks and providing meaningful error messages to users or logging errors for debugging.",
      ,
      "LocalStorage and Cookies: Learn how to use LocalStorage and cookies to store small amounts of data on the client side for tasks like maintaining user preferences or authentication tokens.",
      ,
      "Third-Party Libraries and Frameworks: Familiarize yourself with popular JavaScript libraries and frameworks like jQuery, React, Angular, or Vue.js, depending on your project requirements.",
      ,
      "Package Managers: Use package managers like npm or Yarn to manage dependencies and streamline the development workflow.",
      ,
      "Testing: Write unit tests and use testing frameworks like Jest or Mocha to ensure the reliability and correctness of your JavaScript code.",
      ,
      "Performance Optimization: Optimize JavaScript code for better performance by minimizing DOM manipulation, reducing network requests, and optimizing algorithms.",
      ,
      "Cross-Browser Compatibility: Test your JavaScript code on various web browsers to ensure consistent behavior and handle browser-specific quirks.",
      ,
      "Security: Be aware of common security risks in JavaScript, such as cross-site scripting (XSS) and cross-site request forgery (CSRF), and implement security best practices to mitigate these risks.",
      ,
      "Documentation and Code Comments: Document your JavaScript code with comments and provide clear documentation to help other developers understand and use your code.",
      ,
      "JavaScript is a dynamic and evolving language, so staying updated with the latest developments, best practices, and emerging technologies is essential for a successful career as a JavaScript developer.",

      ,
    ],
  },
  {
    name: "Frontend Frameworks",

    description: [
      "I will work with frontend frameworks and libraries such as React, Angular, or Vue.js to build complex user interfaces efficiently and maintainably.",
      "Frontend frameworks are pre-built, structured collections of code, libraries, and tools that simplify the development of web applications. They provide a foundation for creating interactive and responsive user interfaces. Here are some of the most popular frontend frameworks as of my last knowledge update in September 2021:",

      "React:",

      "Developed and maintained by Facebook.",
      "Used for building user interfaces, especially for single-page applications.",
      "Component-based architecture for reusability.",
      "Virtual DOM for efficient rendering updates.",
      "Large ecosystem with many third-party libraries and tools.",
      "Angular:",

      "Developed and maintained by Google.",
      "A comprehensive framework for building dynamic web applications.",
      "Offers a powerful templating system, dependency injection, and a full-featured router.",
      "Uses TypeScript for strong typing and improved developer experience.",
      "Vue.js:",

      "A progressive JavaScript framework that is easy to integrate into existing projects.",
      "Known for its simplicity and flexibility.",
      "Provides a virtual DOM and component-based architecture.",
      "Growing community and ecosystem.",
      "Ember.js:",

      "A framework for building ambitious web applications.",
      "Opinionated and follows convention over configuration.",
      "Built-in features like Ember CLI for project scaffolding and Ember Data for data management.",
      "Batteries-included approach.",
      "Svelte:",

      "A relatively new framework that compiles components into highly efficient JavaScript.",
      "Focuses on minimalism and performance.",
      "Does not rely on a virtual DOM; updates the DOM directly.",
      "Gaining popularity for its small bundle sizes.",
      "Backbone.js:",

      "A lightweight framework that provides structure to web applications.",
      "Emphasizes modularity and simplicity.",
      "Suitable for developers who prefer more control over their application's architecture.",
      "Often used with Underscore.js for utility functions.",
    ],
  },
  {
    name: "Collaboration",
    description: [
      "I will collaborate with backend developers, designers, and other team members to integrate frontend and backend components and ensure seamless functionality.",
      "Collaboration between frontend developers, backend developers, designers, and other team members is essential for the successful development of web applications. Here's how collaboration typically works in the context of integrating frontend and backend components:",
      "Requirement Gathering: At the beginning of a project, frontend developers collaborate with designers and stakeholders to gather requirements for the user interface (UI) and user experience (UX). They understand the design and functionality goals and create wireframes or prototypes.",
      "Design Handoff: Once the designs are finalized, designers hand off design assets to frontend developers. This includes graphical assets, style guides, and design specifications that will guide the frontend development process.",
      "Backend Development: While frontend developers start working on the client-side of the application, backend developers begin building the server-side components. Backend developers work on the application's logic, data storage, and server endpoints.",
      "API Specification: To enable seamless integration, frontend and backend developers collaborate to define the API (Application Programming Interface) that the frontend will use to communicate with the backend. This includes specifying endpoints, data formats, and authentication methods.",
      "Frontend Development: Frontend developers use the design assets and API specifications to build the user interface and application functionality. They create HTML, CSS, and JavaScript code that interacts with the backend through API calls.",
      "Communication and Meetings: Regular communication and meetings between frontend and backend teams are crucial. This includes discussing API changes, resolving issues, and ensuring that both sides are aligned with project goals.",
      "Testing and Quality Assurance: QA engineers and testers collaborate with both frontend and backend developers to conduct thorough testing. This includes unit testing, integration testing, and end-to-end testing to ensure that all components work together seamlessly.",
      "Bug Tracking and Issue Resolution: Teams use issue tracking systems (e.g., Jira, Trello) to report and track bugs and issues. Collaboration is key in prioritizing and resolving these issues promptly.",
      "Version Control: Developers from both sides use version control systems like Git to manage and merge code changes. This ensures that frontend and backend codebases remain in sync.",
      "Deployment: Backend and frontend components are deployed to staging and production environments. Coordination is necessary to ensure that both components are deployed simultaneously and work together as expected.",
      "Monitoring and Maintenance: After deployment, both frontend and backend developers collaborate on monitoring the application's performance, handling any issues that arise, and providing regular updates and maintenance.",
      "Scaling: As the application grows, collaboration remains important when scaling frontend and backend components to handle increased traffic and data.",
      "Documentation: Documentation is created to help developers on both sides understand how to interact with the frontend and backend components. This documentation includes API documentation, code comments, and usage guidelines.",
      "Feedback and Continuous Improvement: Collaboration includes providing feedback to improve the development process. Teams regularly evaluate the effectiveness of their collaboration and look for ways to optimize workflows and communication.",
      "Effective collaboration between frontend and backend teams ensures that the final web application is both visually appealing and functionally robust. It helps prevent integration issues, reduces development friction, and ultimately leads to a smoother development process and a better user experience.",
    ],
  },
];

const Services = () => {
  const [current, setCurrent] = useState(0);
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Servicehashtag();
  }, [current]);

  return (
    <Fragment>
      <ServicePopup
        open={open}
        close={() => setOpen(false)}
        data={activeData}
      />
      <div className="orido_tm_section" id="service">
        <div className="orido_tm_service">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Services
                  <br />I Provide
                </span>
              </h3>
            </div>
            <div className="service_list">
              <ul>
                {serviceData.map((service, i) => (
                  <li className={current == i ? "current" : ""} key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <span className="number">{`0${i + 1}`}</span>
                        <h3 className="title">{service.name}</h3>
                      </div>
                      <div className="right">
                        <div className="text">
                          <p>{service.description[0].substring(0, 105)}...</p>
                        </div>
                        <div className="arrow">
                          <img
                            className="svg"
                            src="img/svg/top-arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <a
                        className="orido_tm_full_link c-pointer"
                        onClick={() => {
                          setActiveData(service);
                          setOpen(true);
                          setCurrent(i);
                        }}
                      />
                      {/* Modalbox Info Start */}
                      <img
                        className="popup_service_image"
                        src="img/service/1.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                ))}
              </ul>
              <span className="ccc" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Services;
