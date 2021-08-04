# TASKS TO COMPLETE IN THE ASSIGMENT: 

1. Create TWO new Components: UserInput and UserOutput
2. UserInput should hold an input element, UserOutput two paragraphs
3. Output multiple UserOutput components in the App component(any paragraph texts of your choice)
4. Pass a Username(of your chice) to UserOutput via props and display it there
5. Add state to the App component (=> the username) and pass the username to the UseroOutput component. 
6. Add a method to manipulate the state (=> an event-handler method)
7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event. 
8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput.
9. Add two-way-binding to your input (in Userinput) to also display the starting username. 
10. Add styling of your chaice to your components/ elements in the components - both with inline styles and stylesheets. 

# Process for the solution 

1. We go to the folder where we want to create the project and in terminal use the following command to create a new project: 
		
		create-react-app <name-of-project>


2. Creating a component: 
        a. We go to the folder src
        b. We create two folders with the names of each component, one for UserInput and one for UserOutput.
        c. Inside each folder we create a js file with the same name.
        d. In the file we import React from ‘react’. 
        e. We create the component using a stateless arrow function and include all the elements of the component. We must be sure to group all the elements into one umbrella element, like a div, so we only return one element.
        f. We export default the component

3. Now we go to our App.js file and Import the components. 

4. As we want to use state in our App file, we must change the function App to a class App extends Component. We have to make sure to also import component from React. 

5. We output one userInput element and two userOutput elements to our App file (inside the return brackets)

6. We then create a state component, to add dynamic content, with an array of objects to introduce values for props. 
In our case, the array will be named userNames, and will have two objects with a property userName. 

7. In order to change our state we will create a method state called userNameCahngedHandler that will look for an event target value and change the username with that value. We will bind the method to our UserInput change event through the attribute changed.

8. going to our userInput.js file we will also have to updat the element to include this method. For that, we will add an onClick attribute to our input and assign it the props.changed. 

9. We will also set up an attribute currentName to our input in App.js to display the current usernames inside the input. On our userInput .js file we will add a value attribute to our input element and assign it to props.currentName. 

10. Finally we will add some styles. Inside each folder from each component we will creat a css file with the same name. In each file we will create a class with some styles and we will assign this class to each component in their js file. 
In order to add some inline styles we will go to our App.js file and create a new constant like h1Style, which will be an object with some style properties. In our case we will assign it to our h1 title using the attribut style. 




