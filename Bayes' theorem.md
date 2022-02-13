1. 2 general/basic types of things in existence (Bayes' theorem):^[Algorithms to Live By: The Computer Science of Human Decisions, p. 146, 147]
	1. things that tend toward (or cluster around) some kind of "natural" value (e.g. average human life span)
		1. makes use of "[[Laplace-Gauss distribution]]"
	2. things that don't follow "1"
		1. e.g. "power-law distributions" → e.g. population in a town, money
2. what's ironic about "Bayes"?
	1. For somebody who has had such an impact on the history of reasoning under uncertainty, Bayes’s own history remains ironically uncertain. He was born in 1701, or perhaps 1702, in the English county of Hertfordshire, or maybe it was London. And in either 1746, ’47, ’48, or ’49 he would write one of the most influential papers in all of [[mathematics]], abandon it unpublished, and move on to other things.^[Algorithms to Live By: The Computer Science of Human Decisions, p. 137]

# [[power law]]
1. how does "Bayes' theorem" work with "power-law distribution"?
	1. multiply it by a constant factor
		1. For the grosses of movies, for instance, it happens to be about 1.4. So if you hear a movie has made $6 million so far, you can guess it will make about $8.4 million overall; if it’s made $90 million, guess it will top out at $126 million.

# [[Laplace-Gauss distribution]]
1. how does "Bayes' theorem" deal with "[[Laplace-Gauss distribution]]"?^[Algorithms to Live By: The Computer Science of Human Decisions, p. 148]
	1. the farther below from average, the bigger the multiplication
		1. Following this rule gives reasonable predictions for the 90-year-old and the 6-year-old: 94 and 77, respectively. (The 6-year-old gets a tiny edge over the population average of 76 by virtue of having made it through infancy: we know he’s not in the distribution’s left tail.)

# [[memorylessness]]
1. Bayes' theorem · memorylessness = additive rule^[Algorithms to Live By: The Computer Science of Human Decisions, p. 149]
	1. predict that things will go on just a constant amount longer (e.g. +5 minutes or after 20 rolls)

# related
1. [[entropy (information theory)]]