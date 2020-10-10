import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const summaryItems =[
  'Full stack developer with expertise in developing products using multiple web languages and frameworks such as JavaScript, React.js, Backbone.js and Node.js in Product Development environment such as Git, Bitbucket and Visual studio.',
  'Graduated from a Master’s in Computers Science Program with 4.0 GPA in all core courses and 3.7 overall CGPA.'
]

const skills = [
  'Work Environment: Git, BitBucket, Webpack, JIRA, Slack, SourceTree, Visual Studio Code Docker Languages: JavaScript, TypeScript, Node.js, SQL, jQuery',
  'Libraries: React.js, Backbone.js',
  'Database Technologies: Oracle 11g, PL/SQL, PostgreSQL, MySQL',
  'SDLC: Agile'
]

const Section = ({sectionName, values}) => {
  return <div>
    <h4>{sectionName}</h4>
    <p className="text-justify">
      <ul>
          {values.map(a => <li> {a}</li>)}
      </ul>
    </p>
  </div>
}

const adp = {
  position: 'Application Developer',
  company: 'ADP',
  location: 'Roseland, NJ',
  fromDate: `Feb'19`,
  toDate: 'Present',
  header: 'Working as a full stack developer to create a web application to support HCM and payroll from scratch. Supported a client and ran their payroll through the app.',
  workDone: [
    'Work extensively on backend with GraphQL, Go, Typescript, MySQL, Docker and Redis.',
    'Added features to the application according to client requirements.',
    'Make SOAP and REST calls from Node.js.',
    'Write test cases in Node.js with mocha and chai.',
    'Work with AWS lambda and cloudwatch.',
    'Review pull request for junior developers and help with the technical orientation of new employees in the team.'
  ]
}

const shiptory = {
  position: 'Full Stack Developer',
  company: 'Shiptory',
  location: 'Hackensack, NJ',
  fromDate: `March’18`,
  toDate: 'Oct’18',
  header: 'Worked as a full stack developer to create Shiptory, a responsive web application for e-commerce professionals, which handles online shop and marketplace orders in an innovative way with superb shipping, tracking, order and inventory management capabilities.',
  workDone: [
    `Worked on the frontend with HTML, less, Sass, Javascript, jQuery and Backbone.js. On the backend using Node.js, Express.js and MySQL.`,
    `Worked with Javascript libraries like underscore, lodash, redis, moment, express, etc •Integrate application with Amazon, eBay, Walmart and another API's.`,
    `Maintain large volume of data in MySQL database.`,
    `Used Eslint for consistent coding conventions and GitHub as the repository.`
  ]
}

const oodi = {
  position: 'Jr Software Developer',
  company: 'OODI',
  location: 'Middletown, NJ',
  fromDate: `Sept’17`,
  toDate: 'March’18',
  header: 'Worked on the frontend with Javascript modern framework React and Redux. On the backend used Node.js with Express for routing and PostgreSQL',
  workDone: [
    `Wrote sql and Sequelize queries to get the result from the database.`,
    `Worked with promises, promises chaining and async - await for better asynchronous calls. •Developed new user-facing features using React.js and Redux for state management. •Worked with product, development team and graphic designers`,
    `Used Eslint for consistent coding conventions and BitBucket as the repository.`,
    `Exposed to Typescript`
  ]
}

const hdfc = {
  position: 'Assistant Manager in IT-SMG',
  company: 'HDFC Bank Ltd',
  location: 'Mumbai, India',
  fromDate: `Feb’14`,
  toDate: 'Jul’15',
  header: 'Worked with the Business Analyst and Business Teams to assist in formulating the Business Requirements Document and the Technical Specifications/Design Document where my role was also of the Key Software Architect',
  workDone: [
    `Exposed to Web technologies like JavaScript, jQuery, HTML, CSS, etc.`,
    `Utilized OOAD and created UML diagrams to communicate Use-Cases and product end-state to Stakeholders.`,
    `Managed the project from the definition stage through the Design, Development and Test phases till Go-Live`
  ]
}

const Experience = ({position, company, location, fromDate, toDate, header, workDone}) => {
  return <div>
    <div className="w-100">
      <h5 className="float-left w-50">{position} , {company}</h5>
      <h5 className="float-right w-50">{location}, {fromDate} - {toDate}</h5>
    </div>
    <div>
      <p className="text-justify">
        {header}
        <ul>
          {workDone.map(a => <li> {a}</li>)}
        </ul>
      </p>
    </div>
  </div>
}

class Profile extends Component {
  render() {
    return (
      <div className="" onClick={this.props.onClick}>
        <Link to="/" className="d-block text-left"> back </Link>
          <h2> Profile </h2>
          <div>
            <div className="contact">
              <h3>Amit Lopes</h3>
              <h5 className="float-left">973-444-3190</h5>
              <h5 className="float-right">lopesamit@gmail.com</h5>
            </div>
            <Section sectionName='Summary' values={summaryItems} />
            <Section sectionName='Technical skills' values={skills} />
            <div>
              <h4>Professional experience</h4>
              <Experience {...adp} />
              <Experience {...shiptory} />
              <Experience {...oodi} />
              <Experience {...hdfc} />
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;
