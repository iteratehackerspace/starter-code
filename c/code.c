#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistd.h>
#include <ctype.h>
#include <string.h>

size_t strlen_(char *n)
{
  size_t length = 0;
  char iter = 0;
  while (true) {
    if (*(n + iter) != '\0') {
      length++;
      iter++;
    } else {
      return length;
    }
  }
}


int main (int argc, char **argv)
{
  printf("Test length: %zu\n", strlen_("Hello World"));
  return 0;
}
