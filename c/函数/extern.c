#include <stdio.h>
extern a;
void f1()
{
    a = 10;
    printf("\nf1 a = %d", a);
}

void f2()
{
    printf("\nf2 a = %d", a);
}

int a = 5;
void f3()
{
    printf("\nf3 a = %d", a);
}

void main()
{
    printf("\nm a = %d", a);
    f1();
    f2();
    f3();
}