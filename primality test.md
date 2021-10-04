1. primality test (main steps)^[https://en.wikipedia.org/wiki/Primality_test#Probabilistic_tests]:
	1. randomly pick a number _a_
	2. Check equality (corresponding to the chosen test) involving _a_ and the given number _n_. If the equality fails to hold true, then _n_ is a composite number and _a_ is a _witness_ for the compositeness, and the test stops.
	3. get back to the step one until the required accuracy is reached