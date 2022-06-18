const initValues = {
  cpp: `#include <iostream>

int main()
{
    for (int i = 1; i <= 100; i++) {
        if (i % 15 == 0)
            std::cout << "FizzBuzz"<<std::endl;
        else if (i % 5 == 0)
            std::cout << "Buzz"<<std::endl;
        else if (i % 3 == 0)
            std::cout << "Fizz"<<std::endl;
        else
            std::cout << i << <<std::endl;
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
  java: `public class java{
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
};

export default initValues;
