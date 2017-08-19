# FrontEnd Grid Challenge
==================================================================

### Contestant : Daimen Q. Williams
###### [DaimenWill@gmail.com](mailto:DaimenWill@gmail.com)

---
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# Overview:
  * Challenge Breakdown
  * Technologies Used
  * Test Environment Setup
------

# Challenge Breakdown
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
##### Create a dynamic grid layout using JS, HTML, and CSS with the following conditions:
  1. The HTML will have two root elements:
        * A button titled _"Add box"_
        * A grid consisting of boxes in a specific layout
  2. The grid layout is as follows:
        * Each box is of dimesnions 300px x 300px
        * Spacing between each box and the perimeter of the grid is 20px
        * The minimum width of the grid must be 980px - allowing for 3 boxes horiziontally along with their required spacing
        * The max width must be 1620px allowing for 5 boxes horizontally
        * As the page scales larger than the grid's width, the margins of the page must scale as well
        * Each box must contain an _"X"_ at their top right corner - clicking on the _"X"_ icon in the box should remove the box from the grid
  3. The _"Add box"_ button from (1) will do as follows:
        * Add a new box to the beginning of the grid
        * Send an AJAX request to                                                            _"https://jsonplaceholder.typicod*com/posts/[id]"_
            where [id] is a random (or sequential, if you prefer) number from 1-100
        * After a successful response, use the _"title"_ property of the json as a message to be placed into the new box. The message must be in an _"h3"_ tag and styled so that it is perfectly centered in the box
  4. On pageload, 9 boxes should populate the grid using the add box button's functionality
  5. There should be **no use of any additional technologies or frameworks** for HTML or CSS. Frameworks and libraries like jQuery may be used with the JS for DOM manipulation and AJAX handling

-------


# Technologies Used

Aside from regular HTML and CSS; the AngularJS framework was used primarily to handle AJAX requests. Most logic is written in vanilla JS (granted within an Angular controller scope). The choice for Angular over much less massive options like jQuery was mostly due to Angular's architecture being built with jqLite which is a lighter version of jQuery, and partly due to how much more readable and structured Angular logic is over jQuery.

Other technologies **necessary** for the (small) test environment put in place are:
  1. Node v6.10.3
  2. NPM v3.10.10
  3. jasmine v2.7.0
  4. karma v1.7.0
  5. angular-mocks
  6. plugins for the above co-integration (check _packag*json_, setup explained below)

^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# Test Environment Setup

Once Node and NPM are in place -
  1. In the project's root folder, call an _"npm install"_ to have a node_modules folder generated with most of the required dependencies for the above technologies.
  2. Run the command _"npm install -g karma-cli"_ in order to run karma based commands  
  3. Either run _"npm test"_ or _"karma start karm*con*js"_ to launch the headless PhantomJS in the terminal and have tests run in that browser environment.

**note** there are only a few tests at the moment, more may be appended
