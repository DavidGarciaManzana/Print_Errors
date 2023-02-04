
# Printer Errors

In a factory, a printer is tasked with printing labels for boxes. The printer uses a set of colors, named from a to m, to print the labels. The colors used are recorded in a control string for quality control purposes.

However, sometimes there are problems such as lack of colors or technical malfunctions, resulting in a "bad" control string with letters not from a to m. Your challenge is to write a program that will determine if the control string is "good" or "bad".

A "good" control string is defined as a string with the following properties:

 - Each color used by the printer is represented by a letter from a to m.
 - The control string consists of a sequence of letters, each representing a color used by the printer.

If the control string is "bad", your program should return an error message containing the number of errors in the control string as a fraction of the total number of letters (5/10).


## Installation

Install my-project with npm

```bash
  cd my-project
  npm install typescript --save-dev
  tsc --init
```


    
## Usage
Watch input files
```javascript
tsc --watch
```


## Authors

- [DavidGarciaManzana](https://github.com/DavidGarciaManzana)


## Acknowledgements

 - [Printer Errors Kata - Codewars.com](https://www.codewars.com/kata/56541980fa08ab47a0000040/typescript)

