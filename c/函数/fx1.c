#include <stdio.h>
double pass(double y);
double calc(double x)
{
    double sum = 2 * x * x + 5 * x + 3;
    double passY = pass(sum);
    return passY;
}

double pass(double y)
{
    return y;
}

// 函数定义都是平行的。不允许在函数内定义函数
int main()
{
    double a;
    a = calc(3.3);
    printf("%f", a);
    return 0;
}
