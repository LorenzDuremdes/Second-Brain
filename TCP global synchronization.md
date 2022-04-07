1. how can "TCP global synchronization" be prevented/solved?
	1. e.g. [[random early detection]]
	   
	   [[Tail drop]] can also lead to TCP global synchronization as all TCP connections "hold back" simultaneously, and then step forward simultaneously. Networks become under-utilized and flooded—alternately, in waves.
	   
	   RED addresses these issues by pre-emptively dropping packets before the buffer becomes completely full. It uses predictive models to decide which packets to drop.