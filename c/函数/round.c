/**
 * 将实数四舍五入到小数点后第n位。调用次函数将一个实数舍入到小数点后第2位
*/
#include <stdio.h>
double p(double x, int n);
void main()
{
    double x;
    scanf("%lf", &x);
    x = p(x, 2);
    printf("x=%f\n", x);
}

double p(double x, int n)
{
    int i;
    for (i = 1; i <= n; i++)
    {
        x = x * 10;
    }
    x = x + 0.5;
    x = (long)x;
    for (i = 1; i <= n; i++)
    {
        x = x / 10;
    }
    return x;
}