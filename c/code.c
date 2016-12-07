#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <unistd.h>
#include <ctype.h>
#include <string.h>

struct name_node {
  char *name;
  struct name_node *next;
};

void print_all_entries(struct name_node *l)
{
  struct name_node *iter = l;
  while (iter != NULL) {
    printf("Data %s\n", iter->name);
    iter = iter->next;
  }

}

void linked_list_example(void)
{
  struct name_node *head = malloc(sizeof(struct name_node));
  struct name_node *iter_node = head;
  char *names[] = {"Edgar", "Gohar", "Robert", "Kalipso", NULL};
  size_t spot = 0;
  char *iter = names[spot];

  while (true) {
    if (names[spot] == NULL) {
      break;
    } else {
        iter_node->name = malloc(strlen(iter) + 1);
        strcpy(iter_node->name, iter);
        spot++;
        iter = names[spot];

        if (iter != NULL) {
         iter_node->next = malloc(sizeof(struct name_node));
         iter_node = iter_node->next;
      }else
      {
        iter_node->next=NULL;
      }
    }
  }

  print_all_entries(head);
}


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
  linked_list_example();
  printf("Test length: %zu\n", strlen_("Hello World"));
  return 0;
}
