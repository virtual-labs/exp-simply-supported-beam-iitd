
### Introduction

<img src=“images/th.png”/>

This simulation based experiment aims to study the mode of vibration of simply supported beams under flexure. The simply supported beam, a continuous system, is different from lumped masses (discrete system).

In the discrete systems, stiffness, mass, and damping are modelled as discrete properties.

The mathematical models for discrete system are ordinary differential equations, which thereby render themselves quite conductive to numerical solution techniques. An alternative method of modelling physical system, which is considered for this beam, is based on the principle of distributed mass and stiffness characteristics. Such a system for which stiffness and mass are considered to be distributed properties (rather than discrete) is referred as a distributed system.

Unlike a discrete system that possess a finite number of degree of freedom (DOF), the distributed systems, which are considered to be composed of infinite number of infinitesimal mass particles, theoretically possess an infinite number of degrees of freedom(DOF). However, only the first few modes are significant.

It is therefore not necessary to compute all of them.

This computer model is based on distributed system. By using this online java program, the user can easily get the natural frequencies of beams and simulate the first five mode shapes.
In addition, there is an exercise for user at the end of programme; the user needs to plot the graph between frequencies and length of beams keeping all others factors constant.

General solution for displacement for beam is given by (Chopra, 2001)
y (X) = c<sub>1</sub> sinh βx + c<sub>2</sub> cosh βx + c<sub>3</sub> sin βx + c<sub>4</sub> cos βx           (1)

After applying the boundary condition, we get

sin βL = 0           (2)

Hence,             βL = nπ           (3)

and          β<sub>n</sub><sup>2</sup> = ω<sub>n</sub>LC           (4)

Hence, the final solution for frequencies is f<sub>n</sub> = (πnn<sup>2</sup>/2Ln<sup>2</sup>) √ EI/ρA           (5)

and that for the mode shapes is y (X) = sin nπx / L           (6)

where,<br>
L is length of beam<br>
EI is flexural rigidity (E = Young's modulus, I = Moment of inertia)<br>
A is cross- sectional area<br>
ρ is density<br>
f<sub>n</sub> is natural frequencies<br>
C is constant<br>

<img src=“images/th1.png”/>
