import math
import matplotlib.pyplot as plt

# Definimos la función f(x, y) = 2 * cos(x) * y
def f(x, y):
    return 2 * math.cos(x) * y

# Solución exacta y(x) = e^(2 * sin(x))
def exact_solution(x):
    return math.exp(2 * math.sin(x))

# Método de Euler
def euler_method(x0, y0, h, n):
    x_values = [x0]
    y_values = [y0]
    
    for i in range(n):
        x = x_values[-1]
        y = y_values[-1]
        y_next = y + h * f(x, y)
        x_values.append(x + h)
        y_values.append(y_next)
    
    return x_values, y_values

# Parámetros iniciales
x0 = 0
y0 = 1
h = 0.25
n = 4  # Número de pasos

# Aplicamos el método de Euler
x_values, y_values = euler_method(x0, y0, h, n)

# Calculamos valores exactos, errores absolutos y relativos
exact_values = [exact_solution(x) for x in x_values]
absolute_errors = [abs(y_values[i] - exact_values[i]) for i in range(len(x_values))]
relative_errors = [absolute_errors[i] / exact_values[i] for i in range(len(x_values))]

# Mostramos los resultados
print("x\t\tAproximado\tExacto\t\tError Absoluto\tError Relativo")
for i in range(len(x_values)):
    print(f"{x_values[i]:.2f}\t\t{y_values[i]:.6f}\t{exact_values[i]:.6f}\t{absolute_errors[i]:.6f}\t{relative_errors[i]:.6f}")

# Graficamos la solución exacta y la aproximada
x_exact = [x0 + i * 0.01 for i in range(int((x_values[-1] - x0) / 0.01) + 1)]  # Puntos más finos para la solución exacta
y_exact = [exact_solution(x) for x in x_exact]

plt.plot(x_exact, y_exact, label="Solución exacta", color="blue")
plt.plot(x_values, y_values, label="Aproximación de Euler", marker="o", linestyle="--", color="red")
plt.xlabel("x")
plt.ylabel("y")
plt.title("Comparación entre la solución exacta y la aproximación de Euler")
plt.legend()
plt.grid(True)
plt.show()