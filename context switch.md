1. context switch; the process of storing the state of a process or thread, so that it can be restored and resume execution at a later point^[https://en.wikipedia.org/wiki/Context_switch]
	1. this allows multiple processes to share a single central processing unit (CPU), and is an essential feature of a multitasking operating system
2. context switch → [[computational complexity]]
	1. "context switch" is generally heavily computationally complex^[Algorithms to Live By: The [[computer science]] of Human Decisions, p. 127]

# related
1. [[preempting (computing)]]

## [[cache hierarchy]]
1. e.g. long-term [[human memory|memory]] is sometimes resumed later (moved to a higher cache hierarchy (temporarily))
2. cache hierarchies → context switching
	1. different tasks that are brought up a higher cache hierarchy might require other components (from lower cache hierarchies) as well (that might have to be brought up a higher cache hierarchy as well), which increases computational/time complexity^[Algorithms to Live By: The Computer Science of Human Decisions, p. 129–130]