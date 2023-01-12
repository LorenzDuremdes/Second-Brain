1. intractability; a problem that can be solved in theory (e.g. given large but finite resources, especially [[time]]), but for which in practice _any_ solution takes too many resources to be useful^[https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability]
	1. an [[exponential]]-[[time]] [[algorithm]] that takes 1.0001<sup>n</sup> operations is practical until _n_ gets relatively large
2. clairvoyance → intractability
	1. even with complete foreknowledge, finding the perfect schedule might be practically impossible^[Algorithms to Live By: The [[computer science]] of Human Decisions, p. 126]
		1. what about partial clairvoyance (half-life)?

# problem solving
1. could "sampling" be efficient when the problem is intractable? + why + how^[Algorithms to Live By: The Computer Science of Human Decisions, p. 196]
	1. yes, you can increase accuracy via a bigger sample size of higher quality (e.g. 'truly' random)
		1. exhaustive analysis would take too long/start only being accurate after a long [[time]] has passed
		2. **see also**: [[Monte Carlo method]]

# related
1. [[nonlinear partial differential equation]]
2. [[Gödels second incompleteness theorem]]
3. [[Bloom filter]]