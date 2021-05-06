1. [[prioritization|priority]] inheritance; a process scheduling algorithm increases the priority of a process (A) to the maximum priority of any other process waiting for any resource on which A has a [[priority inversion|resource lock]] (if it is higher than the original priority of A)^[https://en.wikipedia.org/wiki/Priority_inheritance]
2. If a low-priority task is found to be blocking a high-priority resource, well, then all of a sudden that low-priority task should momentarily become the highest-priority thing on the system, “inheriting” the priority of the thing it’s blocking^[Algorithms to Live By: The Computer Science of Human Decisions, p. 122]

# related
1. [[priority inheritance]]