#include <stdio.h>
void print(int x);

void main()
{
    int n;
    scanf("%d", &n);
    if (n < 0)
    {
        n = -n;
        putchar('-');
    }
    print(n);
    printf("\n");
}

void print(int n)
{
    if (n >= 0 && n <= 9)
    {
        printf("%d", n);
    }
    else
    {
        int num = n % 10;
        printf("%d", num);
        print(n / 10);
    }
}