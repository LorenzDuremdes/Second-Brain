# increasing intelligence
1. how could it make sense that one can 'acquire heritable (hardware) intelligence'?
	1. ◇some behavior/underlying processes are pre-programmed (since birth), which could be the same with people born with 'better hardware' e.g. "if X do Y"

		the latter could be acquired even by those not possessing that hardware, although having it innate could make it more efficient _in itself_, but also due to utilizing it since birth

# intelligence formulae
## F = T ∇ Sτ
1. intelligence → [[entropy]]
	1. higher intelligence decreases local [[entropy]] more quickly/efficiently
2. intelligence formula → [[exploration-exploitation trade-off]]
	1. usually, the fewer the (future) options, the more one should (or is) exploit
	2. the more options you can eliminate (not necessarily future ones), the faster one can go from exploration to exploitation e.g. [[dating]]

## universal intelligence
1. ![[universal intelligence.jpg]]^[https://arxiv.org/abs/0712.3329]
2. 3 basic components of "universal intelligence formula": agent · environment · [[goal]]^[Universal Intelligence: A Definition of Machine Intelligence, p. 15–16]

### formula
1. π (universal intelligence) = agent
	1. takes the current [[history]] as input and chooses the next action as output, probabilistically (not deterministically)
2. A (universal intelligence) = action space^[Universal Intelligence: A Definition of Machine Intelligence, p. 17]
3. perception space (P); the environment sends signals to the agent with symbols from a finite set^[Universal Intelligence: A Definition of Machine Intelligence, p. 17]
	1. symbols; [[information]]
4. µ (universal intelligence); environment^[Universal Intelligence: A Definition of Machine Intelligence, p. 18]
5. γ (universal intelligence); how heavily weighted the short-term is compared to the long-term^[Universal Intelligence: A Definition of Machine Intelligence, p. 18–29]
	1. the closer to "1", the less weight is placed on the shorter-term
		1. A standard way of formalising this is to scale the value of rewards so that they decay geometrically into the future at a rate given by a discount parameter γ ∈ (0, 1). For example, with γ = 0.95 a reward of 0.7 that is 10 [[time]] steps into the future would be given a value of 0.7 · (0.95)10 ≈ 0.42. At 100 [[time]] steps into the future a reward of 0.7 would have a value of just over 0.004

### agent
#### [[time]] discounting
1. how can we get rid (theory reductionism) of [[time]] discounting (universal intelligence)?^[Universal Intelligence: A Definition of Machine Intelligence, p. 19]
	1. require that the total reward returned by the environment can never exceed 1
		1. the [[expected value]] of the sum of rewards is also finite and thus discounting is no longer required
##### near-harmonic discounting
1. $$γ^i → 1/i^2$$ and modifying Γ accordingly^[Universal Intelligence: A Definition of Machine Intelligence, p. 19]
2. agent's age → 1/i<sup>2</sup>^[Universal Intelligence: A Definition of Machine Intelligence, p. 19]
	1. the agent needs to look forward into the future in a way that is proportional to its current age
##### constant effective horizon
1. the agent has a constant effective horizon of^[Universal Intelligence: A Definition of Machine Intelligence, p. 19]: $$1/(1− γ)$$
	1. e.g. under geometric discounting an agent with γ = 0.95 will not plan further than about 20 cycles ahead
2. how could "constant effective horizon" + "geometric discounting" not be as efficient to creating "universal intelligence"?^[Universal Intelligence: A Definition of Machine Intelligence, p. 19]
	1. because for every horizon there is a task that needs a larger horizon to be solve

		for instance, while a horizon of 5 is sufficient for tic-tac-toe, it is insufficient for chess
		
	2. it does not solve how to weight "short-term ↮ long-term rewards"

### environment
1. for any k ∈ N the [[probability]] of o<sub>k</sub>r<sub>k</sub>, given the current interaction [[history]] o<sub>1</sub>r<sub>1</sub>a<sub>1</sub>o<sub>2</sub>r<sub>2</sub>a<sub>2</sub>...o<sub>k−1</sub>r<sub>k−1</sub>a<sub>k−1</sub>, is given by the [[probability]] measure:

	µ(o<sub>k</sub>r<sub>k</sub>|o<sub>1</sub>r<sub>1</sub>a<sub>1</sub>o<sub>2</sub>r<sub>2</sub>a<sub>2</sub>...o<sub>k−1</sub>r<sub>k−1</sub>a<sub>k−1</sub>)
	1. why "<sub>k−1</sub>"? current interaction [[history]]=1 → ¬?

### [[computer science]]
1. what does the following depict? (universal intelligence)
	1. P := {(cold, 0.0), (warm, 1.0), (hot, 0.3)}
		1. the first part describes what the agent observes (cold, warm or hot) and the second part describes the reward (0.0, 1.0, or 0.3)^[Universal Intelligence: A Definition of Machine Intelligence, p. 17]
2. what does the following denote? (universal intelligence)
	1. π(a<sub>3</sub>|o<sub>1</sub>r<sub>1</sub>a<sub>1</sub>o<sub>2</sub>r<sub>2</sub>)
		1. the [[probability]] of action a 3 in the third cycle, given that the current [[history]] is o<sub>1</sub>r<sub>1</sub>a<sub>1</sub>o<sub>2</sub>r<sub>2</sub>^[Universal Intelligence: A Definition of Machine Intelligence, p. 17]

## process
1. maximizing intelligence → converging criticalities
	1. you can try to make use of both product and [[process optimalism]] → sometimes, this requires many **more** converging criticalities to end up with a situation with enough/most options (divergence)

## negative
### [[extended mind]]
1. what does creating too many connections (e.g. [[Obsidian.md]]) do to the "intelligence formula" and its components?
	1. it might raise the potential options, but decreases how many you can utilize (∇Sτ)
		1. organization is important
		2. how can you figure out whether this is likely to be the case or not?
			1. [[adaptive replacement cache]] → including the nearby (inside-out) concepts you are indirectly connecting to
				1. the most connected ones usually reside in the highest [[cache]] hierarchy and you also want these units to increase intelligence the most
	2. **related**
		1. [[connectivity noise]]


# [[information]]
1. heavy weighing factors causing external [[information]] (not stored in one's long-term [[human memory]]) to not contribute much to one's intelligence
	1. [[cache hierarchy]] (higher latency)
	2. less quantity of [[information]] (e.g. [[brain]] makes from "A" and "B" → "AB")
	3. lower [[adaptive replacement cache]] e.g. due to higher latency rather than because you need it less
3. do you have to know beforehand why you want to ask something? + why
	1. not necessarily → sometimes just increasing the quantity/accuracy of manipulable [[information]] is enough → increase future freedom of action
		1. e.g. you don't know (everything) either what you can do with the [[knowledge]] you acquire (in [[spaced repetition|SRS]])

# high intelligence
1. high intelligence → "simple" questions are complicated
	1. This is why high+ gifted people often seem so out of sync with those around them. The question “how are you today?” can feel extremely complex (How am I about which aspect of my life? Why are you asking? How should I be? and so on)
2. positive [[correlation]] between [[emotion|emotional]] intensity and intelligence (especially in girls)?
	1. e.g. ProjektMelody, Hanna Freriks, yourself, Anne-Lynn de Kock
	2. better [[neurophysiology|hardware]] → increases intensity of all?

# [[IQ]]
1. article + video you can show people when they think "[[IQ]]=intelligence" (or to a large degree) and can't be increased

	https://sites.google.com/view/sourcesintelligence

	[What Is Intelligence? Where Does it Begin? (Kurzgesagt, YouTube)](https://www.youtube.com/watch?v=ck4RGeoHFko)
2. the question then is not whether these tests are useful or measure something meaningful, but rather whether what they measure is indeed “intelligence”^[Universal Intelligence: A Definition of Machine Intelligence, p. 5]

## intelligence + learning
1. **Quote**: “Although learning and intelligence can be conceptually distinguished in terms of formal definitions and measurements, a review of evidence on the relationship between individual differences in measures of learning and of intelligence suggests that no clear distinction can be made between the cognitive processes that contribute to individual differences in these two definitionally different realms.”^[https://www.sciencedirect.com/science/article/pii/1041608089900095]^[https://sites.google.com/view/sourcesintelligence]

# analogs
1. intelligence → gravity
	1. intelligence is like gravity: it emanates from its point(s) of influence and (usually) becomes weaker farther away from them
		1. analogous to extended [[mind]] thesis
			1. interference1=[[gravitational potential energy]] → why (not)?
2. intelligence · Hill sphere (analogy)
	1. individual intelligence

# misconceptions
1. is "intelligence g is the ability to deal with cognitive complexity — in particular complex [[information]] processing" 100% accurate + why?
	1. not if the reward signal is always maximal no matter what the agent does despite a very complex environment with a rich set of relationships between the agent’s actions and observations^[Universal Intelligence - A Definition of Machine Intelligence, p. 22]
		1. if the output is the same multidimensionally, then one agent isn't per se more intelligent just because it can deal with more complex [[information]]

# related
1. [[collective intelligence]]