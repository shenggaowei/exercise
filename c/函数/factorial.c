#include <stdio.h>

long fac(int n)
{
    long p;
    if (n == 1)
    {
        p = 1;
    }
    else
    {
        p = n * fac(n - 1);
    }
    return p;
}

int main()
{
    int n;
    long ret;
    scanf("%d", &n);
    ret = fac(n);
    printf("ff=%ld\n", ret);
    return ret;
}