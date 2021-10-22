1. highest response ratio next (HRRN); processes that have spent a long time waiting compete against those estimated to have short run times. If the waiting time of a process increases, it's response ratio increases making the long awaited process to execute next.
2. this [[algorithm]] solves the starvation problem that exists in [[shortest remaining time first|SRTF]] scheduling [[algorithm]]
3. do "important and urgent" first makes use of the [[algorithm]] "highest response ratio next"^[Algorithms to Live By: The [[computer science]] of Human Decisions, p. 117]
4. how does "highest response ratio" handle new incoming tasks?
	1. each time a new piece of work comes in, divide its importance by the amount of time it will take to complete. If that figure is higher than for the task you’re currently doing, switch to the new one; otherwise stick with the current task^[Algorithms to Live By: The [[computer science]] of Human Decisions, p. 126]

# related
1. [[weighted shortest remaining time first]]