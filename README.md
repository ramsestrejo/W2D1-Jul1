# Test Driven Development with Mocha & Chai

In today's lecture we reviewed some of the concepts presented over the weekend. We emphasized the phylosophy of TDD (Test Driven Development) : testing first - and implementing later.

## TDD
TDD is a development approach that puts tests at the core of the development life-cycle. It starts with writing tests first – and then it is followed by implementation of actual functionality (behaviour).

## TDD Process
1. Write “single” unit test describing an aspect of program
2. Run test, should fail because program lacks the feature
3. Write “just enough” code, simplest possible, to make test pass
4. “Refactor” code until it conforms to simplicity criteria
5. Repeat, “accumulating” unit tests over time

## TD Benefits
1. Increase confidence when refactoring
2. Significant reduction in defect rates at low initial cost
3. Defects are caught quickly
4. Reduction in effort in projects’ final phases & debugging
5. Improved design qualities in code, higher degree of “internal” or technical quality
6. Increased code reusability

## Unit Testing
Unit testing is critical for success of application development as it ensures that functionality works as expected. It also speeds up development.
The premise is to write the test before the code, test one individual component at a time, hence providing confidence that functionality is not broken as team member refactor each others' code.

## Mocha & Chai
After expanding on core concepts on TDD and Unit testing, we explored Mocha as JS testing framework and Chai as a companion BDD testing library. [Mocha is a feature-rich JavaScript test framework](https://mochajs.org/) that makes asynchronous testing made simple & fun.

We wrapped up our lecture by writing up some unit test, using a combination of  assertion styles, the typical found in Mocha with some more stylish provided by [Chai](https://www.chaijs.com/). Chai is a BDD / TDD assertion library that can be delightfully paired with any Javascript testing framework (including Mocha, of course). It provides chain-capable BDD styles that provide an expressive language & readable style. Code demo for all the examples above is included in the repository.



