1. additive increase/multiplicative decrease (AIMD); combines linear growth of the congestion window when there is no congestion with an [[exponential]] reduction when congestion is detected^[https://en.wikipedia.org/wiki/Additive_increase/multiplicative_decrease]
2. how does AIMD usually start?
	1. it starts multiplicatively (1 > 2 > 4 > ...)^[Algorithms to Live By The [[Computer Science]] of Human Decisions by Brian Christian, Tom Griffiths, Christian etc, p. 177]
	   
	   but as soon as any packet’s ACK does not come back to the sender, the AIMD [[algorithm]] takes over (additive increase)
3. **Overview of TCP phases**^[https://witestlab.poly.edu/blog/tcp-congestion-control-basics/]
   <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/TCP_Slow-Start_and_Congestion_Avoidance.svg" width="600" />

# applications
1. AIMD (images (analogy))
	1. e.g. compressing multiplicatively > decreasing multiplicatively > increasing additively
		1. additively in an adaptive manner e.g. in between first increase and decrease

# analogs
1. AIMD (ants (analogy))
	1. it turns out the ants’ solution is similar, too: a feedback cycle where successful foragers prompt more to leave the nest, while unsuccessful returnees result in a diminishment of foraging activity^[Algorithms to Live By The [[Computer Science]] of Human Decisions by Brian Christian, Tom Griffiths, Christian etc, p. 177]

# related
1. [[explore-exploit trade-off]]
	1. e.g. successful exploration → allocate more resources multiplicatively (first cycle) and additively after
2. [[exponentially weighted moving average]]
	1. e.g. reading a book
		1. takes longer to go from "exploit" to "explore" for a book having a higher desired percentage read already