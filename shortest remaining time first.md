1. shortest remaining [[time]] first (SRTF); the process with the smallest amount of [[time]] remaining until completion is selected to execute
2. disadvantage: it has the potential for process starvation: long processes may be held off indefinitely if short processes are continually added.^[https://en.wikipedia.org/wiki/Shortest_remaining_time#cite_note-1]
	1. This threat can be minimal when process times follow a [[heavy-tailed distribution]].^[https://en.wikipedia.org/wiki/Shortest_remaining_time#cite_note-2] A similar [[algorithm]] which avoids starvation at the cost of higher tracking overhead is [[highest response ratio next]]

# [[optimization]]
1. how is "SRTF" related to "[[learning rate]]"?
	1. [[learning rate]] can increase as one completes tasks, perhaps (expontentially) faster than starting with slower tasks
2. [[heavy-tailed distribution]] → average process lengths
	1. the former decreases (when optimal) the average process lengths
	   it doesn't decrease their lengths **relatively**^[GPT-4]
	   1. The [[heavy-tailed distribution]] refers to the natural distribution of process execution times, not a technique applied to change their lengths. In a system with a [[heavy-tailed distribution]], there are inherently a significant number of short processes and a smaller number of extremely long processes.

# see also
1. Algorithms to Live By: The [[computer science]] of Human Decisions, p. 117

# related
1. [[algorithm]]