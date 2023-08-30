# Chandrayaan 3 TDD Assessment

## Table of Contents
- [Problem Statement](#problem-statement)
- [Description](#description)
- [Requirements](#requirements)
- [Example](#example)
- [Setup TDD Environment](#setup-tdd-environment)
- [Logic](#logic)
- [Project Architecture](#project-architecture)
- [How TDD works?](#how-tdd-works)

---

## Problem Statement

Chandrayaan 3 Lunar Craft: Galactic Space Craft Control

## Description

As a scientist at ISRO controlling the latest lunar spacecraft Chandrayaan 3, your task is to develop a program that translates commands sent from Earth into instructions understood by the spacecraft. The spacecraft navigates through the galaxy using galactic coordinates, represented by x, y, z coordinates (x for east or west location, y for north or south location, and z for distance above or below the galactic plane).

## Requirements

You will be given the initial starting point (x, y, z) of the spacecraft and the direction it is facing (N, S, E, W, Up, Down). The spacecraft receives a character array of commands, and you are required to implement the following functionalities:

- Move the spacecraft forward/backward (f, b): The spacecraft moves one step forward or backward based on its current direction.
- Turn the spacecraft left/right (l, r): The spacecraft rotates 90 degrees to the left or right, changing its facing direction.
- Turn the spacecraft up/down (u, d): The spacecraft changes its angle, rotating upwards or downwards.

Your task is to design the program that enables Chandrayaan 3 to execute these commands accurately and efficiently in the vast expanse of the galaxy.

---

## Example

Given the starting point (0, 0, 0) following (x, y, z) and initial direction N, the following commands should result in the indicated final position and direction:

Commands: [“f”, “r”, “u”, “b”, “l”]

Starting Position: (0, 0, 0)

Initial Direction: N

1. “f” - (0, 1, 0) - N
2. “r” - (0, 1, 0) - E
3. “u” - (0, 1, 0) - U
4. “b” - (0, 1, -1) - U
5. “l” - (0, 1, -1) - N

Final Position: (0, 1, -1)

Final Direction: N

---

## Setup TDD Environment

To set up the Test-Driven Development (TDD) environment for this project, follow these steps:

1. Create an NPM project:
   ```bash
   $ npm init
   ```

2. Create `example.js` and add it to the project’s root.

3. Install Jest for testing:
   ```bash
   $ npm install jest --save-dev
   ```

4. Update the `package.json` test script to run Jest tests:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```

5. Create test files using the `.test.js` extension to write your tests.

6. To run tests, use the following command:
   ```bash
   $ npm run test
   ```

---

## Logic

In the main command logic, traverse the command array and execute the appropriate function based on the current command. Here's an outline of the logic:

```javascript
function moveForward() {
    if (direction == 'N') y++;
    else if (direction == 'E') x++;
    else if (direction == 'W') x--;
    else if (direction == 'S') y--;
    else if (direction == 'U') z++;
    else if (direction == 'D') z--;
}

function moveBackward() {
    if (direction == 'N') y--;
    else if (direction == 'E') x--;
    else if (direction == 'W') x++;
    else if (direction == 'S') y++;
    else if (direction == 'U') z--;
    else if (direction == 'D') z++;
}

function turnLeft() {
    if (direction == 'N') direction = 'W';
    else if (direction == 'E') direction = 'N';
    else if (direction == 'W') direction = 'S';
    else if (direction == 'S') direction = 'E';
    else if (direction == 'U') direction = 'N';
    else if (direction == 'D') direction = 'S';
}

function turnRight() {
    if (direction == 'N') direction = 'E';
    else if (direction == 'E') direction = 'S';
    else if (direction == 'W') direction = 'N';
    else if (direction == 'S') direction = 'W';
    else if (direction == 'U') direction = 'S';
    else if (direction == 'D') direction = 'N';
}

function turnUp() {
    if (direction != 'U') direction = 'U';
}

function turnDown() {
    if (direction != 'D') direction = 'D';
}
```

You can use these functions to control the Chandrayaan 3 spacecraft based on the commands received.

---

## Project Architecture

![Screenshot (37)](https://github.com/dhruv2x/Chandrayaan_3_Assignment/assets/84621641/4b98fc5a-85f3-4c9e-a9f0-7abdd1389058)

This section provides an overview of the project's architecture, including the directory structure and modules used in the Chandrayaan 3 TDD Assessment project.

Directory Structure

The project follows a structured directory layout to organize its codebase. Below is an outline of the project's directory structure:

- `modules/`: This directory contains the core logic and functionality of the project.
  - `mainCommand.js`: Handles the main command execution logic.
  - `moveBackward.js`: Provides functionality for moving the spacecraft backward.
  - `moveForward.js`: Provides functionality for moving the spacecraft forward.
  - `turnDown.js`: Implements turning the spacecraft downwards.
  - `turnLeft.js`: Implements turning the spacecraft to the left.
  - `turnRight.js`: Implements turning the spacecraft to the right.
  - `turnUp.js`: Implements turning the spacecraft upwards.

- `test/`: This directory contains unit testing files to ensure the correctness of the project's functionality.
  - `Individual_testing/`: This subdirectory contains separate unit testing files for various aspects of the project, allowing for granular testing of individual modules.
    - `moveBackward.test.js`: Unit tests for the `moveBackward` module.
    - `moveForward.test.js`: Unit tests for the `moveForward` module.
    - `turnDown.test.js`: Unit tests for the `turnDown` module.
    - `turnLeft.test.js`: Unit tests for the `turnLeft` module.
    - `turnRight.test.js`: Unit tests for the `turnRight` module.
    - `turnUp.test.js`: Unit tests for the `turnUp` module.
  - `mainCommand.test.js`: Unit tests for the main command execution logic.

The project's structure is designed to promote modularity and ease of testing. Each module in the `modules/` directory focuses on a specific aspect of spacecraft control, making it easier to maintain and test individual components. The unit tests in the `test/` directory, including those in `Individual_testing/`, ensure that each module functions correctly.

This architecture allows for efficient development, debugging, and testing of the Chandrayaan 3 control program, ensuring its accuracy and reliability in the vast expanse of the galaxy.

---

## How TDD work?

![image](https://github.com/dhruv2x/Chandrayaan_3_Assignment/assets/84621641/a48bc570-7ecc-4238-98e4-2adb6e7a1306)



---
