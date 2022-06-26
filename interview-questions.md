# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer:
  So it looks like you are creating a model called Cohort that will have a child model called Students. Foreign key columns need to be in the child model, so you would have to use a Rails migration to add "cohort_id" to Students.

  Researched answer:
  So it looks like you are creating a model called Cohort that will have a child model called Students. Foreign key columns need to be in the child table, so you would have to use a Rails migration to add "cohort_id" to the Students table. The "cohort_id" should match the primary key of the Cohort object it is attached to. Along with "has_many", you need to add "belongs_to" to the Students model to finish creating the association.


2. Which RESTful routes must always be passed params? Why?

  Your answer:
  The RESTful routes that require params are create and update. That's because those routes require more input than just their primary key.

  Researched answer:
  The RESTful routes that require params are show, create, update, and destroy. Show and destroy need the id of the object they are showing or deleting. Create needs parameters to avoid making an object full of null values, and update needs parameters for the new values being assigned.


3. Name three rails generator commands. What is created by each?

  Your answer:
  Generate Model creates a model and a migration for the model.
  Generate Migration creates a blank migration a dev can use to make changes to models.
  Generate Resource creates a model, migration for the model, a controller, and routes.

  Researched answer:
  If you run the command '$rails generate' with no arguments, the terminal will display all the things it is able to generate.
  Generate Model creates a model and a migration for the model.
  Generate Migration creates a blank migration a dev can use to make changes to models.
  Generate Resource creates a model, migration for the model, a controller, and routes.


4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET"    location: /students 
controller method: "INDEX", displays all objects in the students table

action: "POST"   location: /students       
controller method: "CREATE", will create a new object in the students table

action: "GET"    location: /students/new
controller method: "NEW", will create a form for a new object in the students table

action: "GET"    location: /students/2  
controller method: "SHOW", will display the object in the students table with the primary key of 2

action: "GET"    location: /students/2/edit    
controller method: "EDIT", will create a form to edit the object in the students table with the primary key of 2

action: "PATCH"  location: /students/2      
controller method: "UPDATE", will update the object in the students table with the primary key of 2 with new values

action: "DELETE" location: /students/2      
controller method: "DESTROY", will delete the object in the students table with the primary key of 2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

01) As a user, I can create a task in my to do list.

02) As a user, I can view all the tasks I have created.

03) As a user, I can view a particular task.

04) As a user, I can mark a task as complete.

05) As a user, I can edit a task.

06) As a user, I can delete a task.

07) As a user, I can reorder my tasks.

08) As a user, I can have many lists.

09) As a user, I can reorder my lists.

10) As a user, I can have an alert before a task is due.