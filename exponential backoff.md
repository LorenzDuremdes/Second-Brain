1. exponential backoff; an algorithm that uses feedback to multiplicatively decrease the rate of some process, in order to gradually find an acceptable rate^[https://en.wikipedia.org/wiki/Exponential_backoff]
	1. Exponential backoff is commonly utilised as part of rate limiting mechanisms in computer systems such as web services, to help enforce fair distribution of access to resources and prevent network congestion. Each time a service informs a client that it is sending requests too frequently, the client reduces its rate by some predetermined factor, until the client's request rate reaches an acceptable equilibrium.
	2. **see also**: Algorithms to Live By: The Computer Science of Human Decisions, p. 226

# related
1. [[exponentially weighted moving average]]