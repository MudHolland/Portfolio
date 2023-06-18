a = 0
b = 1
c = a + b

for number in range(1, 101):
    print(a)
    a = b
    b = c
    c = a + b
