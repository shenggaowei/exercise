#include<stdio.h>
int main() {
    double a,b;
    a = 123456789.0;
    b = a + 20;
    // float 单精度有效数字为7位 double 为16位
    printf("a=%f,b=%f\n",a,b);
    return 0;
}