1. throughput; the rate of production or the rate at which something is processed

# responsiveness vs. throughput
3. there's a tradeoff between "responsiveness" and "throughput"^[Algorithms to Live By: The Computer Science of Human Decisions, p. 132]
	1. operating system schedulers typically define a “period” in which every program is guaranteed to run at least a little bit, with the system giving a “slice” of that period to each program (increasing responsiveness at the cost of throughput)
	2. **related**: [[thrashing (computer science)]]
	3. **how can this be prevented?**
		1. setting a minimum length for the slices^[Algorithms to Live By: The Computer Science of Human Decisions, p. 132]
			1. in humans, it might realistically be at least several minutes e.g. [[Pomodoro Technique]]^[Algorithms to Live By: The Computer Science of Human Decisions, p. 133]
			2. essentially saying "no" if added slices cross the lower boundary
4. how much should you dedicate to "responsiveness" vs. "throughput"?
	1. e.g. until (estimated) opportunity cost increases significantly?
		1. estimated → via e.g. multidimensional [[Upper Confidence Bound algorithm]]
			1. multidimensional → e.g. half-life/diminishing returns
	2. operating systems try to dedicate as much as possible to throughput until feeling uncomfortably slow to the user^[Algorithms to Live By: The Computer Science of Human Decisions, p. 133]

# related
1. [[intrinsic cognitive load]]