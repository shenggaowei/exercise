/**
 * 编写函数，验证任意偶数都是两个素数之和，并输出这两个素数
 */
#include <stdio.h>
int isprime(int x);
void even(int x);
void main()
{
    int a;
    scanf("%d", &a);
    if (a % 2 == 0)
    {
        even(a);
    }
    else
    {
        printf("%d is not a even number", a);
    }
}

void even(int x)
{
    int i;
    for (i = 2; i <= x / 2; i++)
    {
        if (isprime(i) && isprime(x - i))
        {
            printf("%d=%d+%d\n", x, i, i - 1);
        }
    }
}

int isprime(int x)
{
    int i;
    for (i = 2; i < x - 1; i++)
    {
        if (x % i == 0)
        {
            return 0;
        }
    }
    return 1;
}
