#include<stdio.h>
int main() 
{
    int i = 100;
    int sum = 0;
    for (int j = 0; j <= 100; j++) {
        sum = sum + j;
    }
    printf("sum=%d", sum);
    return sum;
}