# LearnBIGProgrammingExercise
This is the LearnBIG programming exercise that was given to me during my September 2015 interview with them.

# Overview
This exercise assignment specification can be reviewed in a more thorough fashion via the Requirements folder that was created. In there are three files:
* **Engineering Homework Assignment.pdf** - Explains task in-depth
* **Post-Mortem Questions.txt** - Explains questions to address after exercise
* **NumberPoolContract.cpp** - This is the contract for the module specified from within the pdf file

# How To Run the Code
```bash
# Get Other Modules
npm install
```

```bash
# Run Example Program
npm start
```

```bash
# Run Tests
npm test
```
# Module Contract Specification
```c++
//Number Set – C++
class NumberPool {
    public:
    NumberPool();
    ~NumberPool();
    int Allocate();
    bool Release(int x);
};
NumberPool::NumberPool() {
    // Add your own code here
};
NumberPool::~NumberPool() {
    // Add your own code here
}
int NumberPool::Allocate() {
    // Add your own code here
}
bool NumberPool::Release(int x) {
    // Add your own code here
}
```

# Beginning thought-process
At a high-level this appears to be a fairly standard exercise. Create a NumberPool class that demonstrates the method signatures provided. 

In my previous experience I have implemented a pooling system for my video game projects multiple times in order to conserve resources, recycle gameplay components for performance, and to make it so that object creation does not occur until it's needed.

Because I feel fairly familiar with the task I have elected to make an additional effort to make this project more interesting by trying to demonstrate several areas of coding competence with respect to the language, programming patterns, testing, and more complex algorithms.

## Areas of Concern
### Method Signatures and The Allocate Function
I believe I have some personal thoughts on the method signatures provided. 

> The Allocate method picks an available value from the pool, removes it from the pool, and returns this value to the caller. If the pool of available numbers is empty, the Allocate method returns 0.

This method is expected to return a number from a range of negative (-) to positive (+) numbers. In that range the number 0 exists. However, the error code that is expected to be returned is 0. This means that it has removed a candidate from the number range, and altered its output in such a way that will cause potential headaches in the future.

My suggestion would to make it so that it returns a form of infinity instead. This is because infinity is greater and less than any boundary condition and in returning that number you're guaranteed not to overlap with an actual number. For javascript it would be **Number.POSITIVE_INFINITY**.

The better alternative would be to throw an error when the list is empty. Using errors effectively should be something that is prioritized when creating a contract for a library. But that seems more like it's punishing the developer. 

Because of this concern I've elected to create another stipulation for the implementation. The list being created cannot contain the number 0. This is in order to prevent any ambiguity regarding the requirements and functionality.

## The constructor specification
The requirements for this module stated that a constructor must be used. I do not think that's a great idea in JavaScript. Especially when dealing with objects. However I understand some people prefer to use the *new* keyword in JavaScript. In order to satisfy this constraint this means I'm am going to have to create objects using the *new* keyword.

## The discrete specification
> The NumberPool class represents the pool of numbers ranging from one to ten-million (1 to 10,000,000).

The requirements for this stated to create a NumberPool that can go from 1 - 10,000,000. This is a discrete number. I will be making it so the class can have a range of numbers from the biggest negative number to the largest positive number. This way it is more re-useable.

# Implementation
## Language Selection
Javascript
## Libraries
* **algorithms** - Used in order to have access to quicksort, and binary search
* **chai** - Used as the assertion library for mocha
* **lodash** - Used for handling type checking, and basic utility features
* **mocha** - Used for the test framework  

## Style Guidles  
Snake Case is used for local variables and objects.  
Camel Case is used for class definitions.  
Pascal Case is use for function/method definitions.  

## Architecture
This module consists of "two classes" that are meant to be imported using the Node.js's require configuration.

There are two modules provided:
* **BasePool** - The base pooling library
* **NumberPool** - The number pool implementation

They have their own tests
* **BasePoolTests** - for *BasePool*
* **NumberPoolTests** - for *NumberPool*

The *BasePool* class was created to demonstrate inheritance for this, more specifically demonstrate my understanding of javascript's prototypical inheritance.

The testing covers only the basic creation of the object, and expected default values.

## NumberPool Implementation
### Constructor
The other class- NumberPool is where more of the logic is applied. First, NumberPool's constructor is automatically different. It is required to be passed in the start and the end range. This is used to initialize the values of the numbers in the array. The implementation here does make an attempt to optimize the initialization such that it's O(log(n)) instead of O(n). This is done by filling the array via the n(n-1)/2 form of iteration.

### Allocate
There was no indication of how the allocate function should be removing numbers. I am simply iterating through it as though it were a queue, for each time that allocate is called. Per the specification, it returns 0 if the pool is empty.

### Release
The specification for release stated that it needed to know if the value being added was a unique value in the pool. This means that I would have to search the array. I could search it and compare values, but I'd rather not. Because I know that the elements in the pool are distinct, and that they're all numbers, I made the configuration for the list to be sorted via quickssort everytime a number is added. That way I can perform a binary search every time I need to validate if the number exists. This way the release operation is guaranteed O(log(n)) runtime consistently. This will scale well.

### GetType
I don't really like this function. This was to help the typing these classes. As a whole I would remove this all together, but I thought I would experimenting a little.

### Miscellanoues Functions
Various other helper functions were created for this.

# Post-Mortem
## Overall
Overall this implementation is acceptable. However, I wish that for these exercises I was allowed more in the way of configuring the method signatures. I find the "contracts" created for the NumberPool class were weak and poorly designed. They lacked foresight for expansion, and didn't decouple functionality appropriated.

## Fixing the Memory Allocation Issue
Ultimately as this scales you will always be required to maintain the objects in memory unless you create some form of data warehouse that would serve as some way overly complex solution for assigning numbers.  
However one way to help scaling would be address the initializing of the array elements on start. One solution would be to add the numbers into the pool when release is called. Then build the pool from there. The error checking within release will catch it everytime if the number is duplicated. So the easiest solution would be to remove the entire number range initialization, and instead build that list as the calls to release come in.

Otherwise if you wanted to get really crazy you would do some form of decentralized data storage, create front facing interfaces to query against it, and then leverage some kind of connected queries that update state between them, all for numbers! Even more than that you could start caching the requests to minimze the processing of those requests so that all you're doing is hitting the caching server for the data and doing minimal processing.

# LearnBIG Post-Mortem Questions
> Can you keep the memory allocation under 1 MB in the average case?

**See above**

> Can you make your code scale to handle the extreme case while still keeping good run-time performance and reasonable memory usage?

**See above**  
> Along with your solution, please also provide your thoughts on the following:
What other solutions did you consider and why did you select the presented solution? What are the pros and cons or tradeoffs of your solution?

One other solution that I wish I had more time to address was the way the BasePool treated the elements within in it. Because I took the effort to abstract out the *BasePool* class I wanted to abstracted out another one called *BasePoolElement*. Then what I would have followed that up with is making a contract for interaction between the *BasePool* class and the *BasePoolElement* class so that when extending them for sub classes all you would have to do is override some sub-methods in order to control how the searching, sorting, and validation is performed, and to do it with respect to the functions that are specified for the contracts between each other. However, this would have take more time than I could afford, so I left it on the table.
> What tradeoffs did you choose not to make?

I didn't make it so that the elements were created dynamically. I did optimize it, but this is not space-efficient. Again my stated solution would be to build the pool dynamically as elements are released, but the time-limit ran out.

> How would you modify your solution if memory was not an issue? Why?

I suppose I wouldn't change much.

> How would you characterize the performance of your implementation in the average and extreme cases?

Typically O(log(n)) for performance, but for space it's O(n).
# Call To Action
If you're still reading, let me know what you think about the implementation, the tests and so forth. The tests are enough for now, but I would like to see more rigorous usage and user stories.
