int is_in(int n, int *list)
{
    int i = 0;
    while (list[i]){
        if (list[i] == n)
            return (1);
        i = i + 1;
    }
    return (0);
}

char *set_letter(char c, char *secret, char *to_guess)
{
    int i = 0;
    char *res = to_guess;

    while(secret[i]) {
        if (secret[i] == c)
            res[i] = c;
        i = i + 1;
    }
    return (res);
}