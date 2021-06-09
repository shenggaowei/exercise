#include <stdio.h>

double fac(int x)
{
    int sum = 1;
    for (int i = 0; i < x; i++)
    {
        sum = sum * i;
    }
    return sum;
}

double cmn(int m, int n)
{
    return fac(m) / (fac(n) * fac(m - n));
}

int main()
{
    int m, n;
    scanf("%d%d", &m, &n);
    double ret = cmn(m, n);
    printf("%f", ret);
    return 0;
}
