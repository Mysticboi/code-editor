const initValues = {
  cpp: `#include <iostream>

int main()
{
    for (int i = 1; i <= 100; i++) {
        if (i % 15 == 0)
            std::cout << "FizzBuzz"<< std::endl;
        else if (i % 5 == 0)
            std::cout << "Buzz" << std::endl;
        else if (i % 3 == 0)
            std::cout << "Fizz" << std::endl;
        else
            std::cout << i << std::endl;
    }
    return 0;
}`,
  c: `#include <stdio.h>

int main(void)
{
    for (unsigned int i = 1; i <= 100; i++) {
        if (i % 15 == 0) {
            puts("FizzBuzz");
        } else if (i % 3 == 0) {
            puts("Fizz");
        } else if (i % 5 == 0) {
            puts("Buzz");
        } else {
            printf("%u\\n", i);
        }
    }
    return 0;
}`,
  python: `for n in range(1, 101):
    if n % 3 == 0:
        print("FizzBuzz" if n % 5 == 0 else "Fizz")
        continue
    print("Buzz" if n % 5 == 0 else n)`,
  javascript: `function fizzbuzz(num){
    for(let i=1; i <= num; i++){
        if(i % 15 == 0){
        console.log("FizzBuzz");
        }
        else if(i % 5 == 0){
        console.log("Buzz");
        }
        else if(i % 3 == 0){
        console.log("Fizz");
        }
        else console.log(i);
    }
}
      
fizzbuzz(100);`,

  typescript: `function fizzbuzz(num:Number){
    let line:string;
    for(let i=1; i <= num; i++){
        if(i % 15 == 0){
        line="FizzBuzz";
        }
        else if(i % 5 == 0){
        line="Buzz";
        }
        else if(i % 3 == 0){
        line="Fizz";
        }
        else {
        line=String(i);
        };
        console.log(line);
    }
}
      
fizzbuzz(100)`,
  java: `public class Main{
        public static void main(String[] args)
        {
            for (int i=1; i<=100; i++) {
                fizzBuzz(i);
            }
        }
    
        public static void fizzBuzz(int num)
        {
            if (num % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (num % 5 == 0) {
                System.out.println("Buzz");
            } else if (num % 3 == 0) {
                System.out.println("Fizz");
            } else {
                System.out.println(num);
            }
        }
}`,
  markdown: `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://github.com/Mysticboi), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Puppy](https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*)
`,
};

export default initValues;
