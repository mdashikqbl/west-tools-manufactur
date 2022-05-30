import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5 '>
            <h1 className='text-center text-4xl text-secondary font-bold mt-7'>ANSWER & QUESTIONS</h1>
            <div className='mt-5'>
                <h1 className='text-2xl '> 1.How will you improve the performance of a React Application?</h1>
                <p className='mt-3'>Optimizing application performance is key for developers who are mindful of keeping a user’s experience positive to keep them on an app and engaged.

                    According to research by Akamai, a second delay in load time can cause a 7 percent reduction in conversions, making it imperative for developers to create apps with optimized performance.

                    In React applications, we are guaranteed a very fast UI by default. However, as an application grows, developers may encounter some performance issues.

                    In this guide, we will discuss five important ways to optimize the performance of a React application, including pre-optimization techniques. These include:</p>
                <li>Keeping component state local where necessary.</li>
                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                <li>Code-splitting in React using dynamic import()</li>
                <li>Windowing or list virtualization in React.</li>
                <li>Lazy loading images in React.</li>
            </div>
            <div className='mt-5'>
                <h1 className='text-2xl '>2. What are the different ways to manage a state in a React application?</h1>
                <p className='mt-3'>Are you facing difficulties in making loading spinners or a pop-up appears at the right time? It can be because of an unmanaged state in React. A state is a JavaScript object. It stores a component’s dynamic data and determines the component’s behavior. In other words, it is the interface between any data of changes (backend or local) and the representation of this data with UI elements in the frontend.</p>
                <h3 className='text-1xl'>Communication State:</h3>
                <p>Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you had requested a call back to an HTTP request? That’s when you introduced the communication system in your app.</p>
                <h3 className='text-1xl' >Data State:</h3>
                <p>Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app. The information stored in the data state will include the following things – project names, contacts, details about the clients, etc.</p>
                <h3 className='text-1xl'>Control State:</h3>
                <p>Contrary to the state mentioned above in a React app, the control state does not represent the application’s environment. Instead, it refers to the state which the user has input into the app. For example, form inputs, selected items, etc. Control state is known to be more diverse and versatile when it comes to storing information</p>
                <h3 className='text-1xl'>Session State:</h3>
                <p>While Session state can store similar patterned components like Control state, there is a thick difference between both the information stored. For example, you may have a part of a Control state information that represents parts of a tree view, you can find kind of similar data in the Session state, but it will definitely be different from the Control state.</p>
                <h3 className='text-1xl'>Location State:</h3>
                <p>Location state is the UTF-8 display that appears in your URL bar. In fact, the L in URL stands for Locator! One of the most interesting facts about Location state is that you can give directions to a user to parts of the application that do not have unique URLs associated with them. Also, the HTML5 History API allows you to store states separately from the specific URL.</p>
            </div>
            <div>
                <h2 className='text-2xl'>3.How does prototypical inheritance work?</h2>

            </div>
            <div></div>
        </div>
    );
};

export default Blogs;