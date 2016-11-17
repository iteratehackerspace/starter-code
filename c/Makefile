# here you should put your source file names
# separated by white space, aka list.c table.c
src := code.c
program_name := iterate_program

all: ${src}
	gcc -std=c11 -Wall \
	-fsanitize=address -g $< -o ${program_name}

clean:; @rm -rf ${program_name} *.o *.dSYM
