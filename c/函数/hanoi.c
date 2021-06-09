#include <stdio.h>
int step = 1;
void move(int, char, char, char);
void main()
{
    int n;
    printf("请输入盘子数");
    scanf("%d", &n);
    move(n, 'a', 'b', 'c');
    printf("\n");
}

void move(int m, char p, char q, char r)
{
    if (m == 1)
    {
        printf("\n[%d] move %d# from %c to %c", step, m, p, r);
        step++;
    }
    else
    {
        move(m - 1, p, r, q);
        printf("\n[%d] move %d# from %c to %c", step, m, p, r);
        step++;
        move(m - 1, q, p, r);
    }
}