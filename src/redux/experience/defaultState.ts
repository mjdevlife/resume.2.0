import { v4 as uuidv4 } from 'uuid';

const defaultState = [
    {
        id: uuidv4(),
        companyName: 'Cryoport',
        employmentSpan: ["January 2021", "May 2023"],
        employmentStack: "Ruby on Rails Engineer",
        searchStack: "ror",
        projectBrief: [
          `
          At Cryoport, a prominent pharmaceutical enterprise, the imperative was to devise
          a sophisticated software solution facilitating the seamless transportation of
          pharmaceutical products across international borders. Throughout my tenure at Cryoport,
          I had the privilege of being an integral member of a dynamic team comprised of
          six adept developers. Together, we embarked on the ambitious journey of architecting
          innovative functionalities that resonated with Cryoport's overarching mission –
          expeditiously connecting the right customer with their requisite pharmaceuticals.
          `,
          `
          To execute this mission, our team meticulously constructed a suite of backend shipping
          automation services. Among these solutions, a standout feature was the "Proof of Delivery" mechanism.
          This innovative service offered Cryoport a tangible means to monitor the real-time delivery status of
          their products while also generating conclusive evidence of successful deliveries. Notably,
          this service extended its utility to industry giants such as FedEx and DHL, subsequently enhancing
          their logistical capabilities. Moreover, its potential as an integral component of a comprehensive
          supply chain management system underscored its value proposition within the broader business landscape.
          `
        ],
        implementations: [
        `
          Built a product item tracking application and developed it for a web app using JavaScript, React, Rails,
          GraphQL, AWS, and implemented strong RSpec test suites for comprehensive test coverage.
        `,
        `
          Redesigned and developed the user interface, converting Figma templates into a functional UI using React,
          and wrote corresponding RSpec tests to ensure UI functionality and behavior.
        `,
        `
          Applied mocking and stubbing techniques in RSpec tests to isolate dependencies and ensure focused and
          reliable test execution.
        `,
        `
          Manage the applications technology platform status, project pipeline and development priorities.
        `,
        `
          Reviewed project specifications and design technology solutions that exceeded performance.
        `,
        `
          Collaborated with cross-functional teams, including product managers and designers, to gather
          requirements and deliver high-quality features within tight deadlines.
        `,
        `
          Led code reviews and provided constructive feedback to team members, resulting in improved code
          quality and best practices adherence.
        `,
        `
          Implemented user authentication and authorization features using Devise and CanCanCan,
          ensuring secure access to sensitive data and actions.
        `,
        `
          Optimized database queries and data fetching techniques, leading to significant performance
          improvements and faster response times.
        `,
        `
          Integrated third-party APIs, such as payment gateways and shipping services, to enhance the
          application's functionality and user experience.
        `,
        `
          Conducted A/B tests to analyze user behavior and iteratively improved UI/UX to increase user
          engagement and conversion rates.
        `,
        `
          Resolved complex bugs and issues reported by users, maintaining a high level of responsiveness
          and user satisfaction.
        `,
        `
          Implemented continuous integration and continuous deployment (CI/CD) pipelines using Jenkins and
          GitHub Actions, streamlining the development and deployment processes.
        `,
        `
          Conducted technical interviews and actively participated in the hiring process to build a talented
          and cohesive engineering team.
        `,
        `
          Actively contributed to team knowledge sharing sessions, conducting workshops on new technologies
          and best coding practices.
        `,
        ],
    },
    {
        id: uuidv4(),
        companyName: 'Amazon',
        employmentSpan: ["January 2018 ", "December 2021"],
        employmentStack: "Full Stack / Ruby on Rails Engineer",
        searchStack: "ror",
        projectBrief: [
            `
            As an esteemed e-commerce titan, Amazon's indomitable presence in the industry is unrivaled.
            My tenure at Amazon was marked by my pivotal role within the Amazon Flex team, an instrumental
            force dedicated to engineering pivotal solutions that furthered Amazon's operational prowess.
            In my capacity, I led a team of fellow developers, a role I cherished deeply, as it offered
            the opportunity to both guide and learn from my colleagues.
            This enriching experience underscored the fact that true excellence
            in development extends beyond mere code composition. It involves cultivating a culture of mutual
            respect and collaboration, recognizing the importance of cohesive teamwork.
            `,
            `
            Among our notable undertakings was the development of a sophisticated product pricing feature.
            This initiative entailed intricate processes encompassing meticulous data collection, the formulation
            of advanced Pricing Models, rigorous Evaluation procedures, and a continuous drive for Improvement.
            By leveraging predictive analytics grounded in driver availability forecasts and demand-based algorithms,
            our efforts sought to optimize pricing strategies. This multidimensional endeavor demanded a harmonious
            convergence of technical acumen and strategic thinking, emblematic of our commitment to innovation and
            problem-solving.
            `
        ],
        implementations: [
        `
            Built full-stack web applications using different languages/frameworks using Typescript, React, Vue, Node,
            Ruby on Rails, GraphQL, AWS, Jest. Developed comprehensive test suites using Jest to ensure robust code
            quality and reliability.
        `,
        `
            Developed web applications using Vanilla JavaScript, React, Unistore, and CSS Flexbox, leveraging modern ES6
            features and React hooks for enhanced functionality and maintainability.
        `,
        `
            Designed reusable components using the Ant UI library to create consistent and efficient user interfaces.
        `,
        `
            Maintained a proactive approach to professional development, staying up-to-date with the latest industry trends,
            technologies, and best practices. Actively sought out opportunities to expand knowledge and skills,
            demonstrating a commitment to personal growth and continuous improvement.
        `,
        `
            Built frontend UIs using Typescript, React, Material UI, and SCSS, combining strong type-checking with well-structured
            UI components and styling to deliver polished and visually appealing user experiences.
        `,
        `
            Built frontend UIs using typescript, react, material UI, SCSS.
        `,
        `
            Worked closely with project managers, VP of Engineering and CTO to meet deadlines and ensure the product fulfilled client
            expectations.
        `,
        `
            Lead and coach a team of junior engineers to create an application from scratch to production.
        `,
        `
            Managed multiple code bases simultaneously, handling bug fixes and pushing updates to live production environments.
        `,
        `
            Demonstrated excellent time management and multitasking abilities to deliver reliable and timely solutions.
        `,
        `
            Implemented serverless architecture using AWS Lambda and API Gateway to optimize application scalability and
            reduce operational costs.
        `,
        `
            Integrated third-party analytics tools, such as Google Analytics and Mixpanel, to track user behavior and gather
            insights for data-driven decision making.
        `,
        `
            Developed and maintained RESTful APIs using Node.js and Express.js, enabling seamless communication between
            the frontend and backend systems.
        `,
        `
            Conducted load testing and performance optimization using tools like JMeter and Lighthouse to ensure
            application stability and responsiveness under high user traffic.
        `,
        `
            Spearheaded the migration of legacy codebases to modern frameworks and languages, resulting in
            improved maintainability and performance.
        `,
        `
            Collaborated with cross-functional teams, including product managers and UX designers,
            to define project requirements and user stories, ensuring alignment with business objectives.
        `,
        `
            Implemented accessibility best practices, adhering to WCAG guidelines, to create an inclusive
            user experience for individuals with disabilities.
        `,
        `
            Conducted code refactoring and codebase restructuring to enhance code quality,
            maintainability, and readability.
        `,
        `
            Assisted in the onboarding and training of new team members, fostering a smooth
            transition and efficient integration into the development team.
        `,
        `
            Participated in regular code review sessions, providing constructive feedback
            and suggesting improvements to enhance code quality and team collaboration.
        `,
        `
            Actively contributed to the open-source community, sharing code snippets and
            contributing to relevant projects on GitHub.
        `,
        `
            Collaborated with stakeholders to prioritize and plan feature development,
            resulting in the timely delivery of key milestones and project goals.
        `,
        ],
    },
];

export default defaultState;