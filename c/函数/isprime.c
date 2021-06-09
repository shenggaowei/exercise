// 判断是不是素数
#include <stdio.h>
int isprime(int a);
void main()
{
    int x;
    scanf("%d", &x);
    if (isprime(x))
    {
        printf("%d is prime\n", x);
    }
    else
    {
        printf("%d is not a prime \n", x);
    }
}

int isprime(int a)
{
    int i;
    for (i = 2; i < a - 1; i++)
    {
        if (a % i == 0)
        {
            return 0;
        }
    }
    return 1;
}