1. Lagrangian [[relaxation (approximation)|relaxation]]; the method penalizes violations of inequality constraints using a Lagrange multiplier, which imposes a cost on violations

	These added costs are used instead of the strict inequality constraints in the optimization. In practice, this relaxed problem can often be solved more easily than the original problem.^[https://en.wikipedia.org/wiki/Lagrangian_relaxation]
	
	In a wedding seating optimization, for instance, we might relax the constraint that tables each hold ten people max, allowing overfull tables but with some kind of elbow-room penalty.^[Algorithms to Live By: The Computer Science of Human Decisions, p. 190]

# related
1. [[constrained optimization]]