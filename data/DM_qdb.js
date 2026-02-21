const questionDatabase = {
            unit1: {
                name: "Mathematical Logic & Boolean Algebra",
                subtopics: {
                    "1.1": {
                        name: "Quantifiers & Logic Basics",
                        questions: [
                            {
                                id: "Q1.01",
                                text: "Write short notes on Quantifier.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.02",
                                text: "Define Universal and Existential quantifier.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.03",
                                text: "Define Logic and their basic operations.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q1.04",
                                text: "What are logic connectives. Explain using truth tables.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q1.05",
                                text: "Explain the connectives conjunction, Disjunction, Conditional and Biconditional with truth tables.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.06",
                                text: "Test the validity of the argument: 'If 8 is even then 2 does not divide 9. Either 7 is not prime or 2 divides 9. But 7 is prime therefore 8 is odd.'",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.2": {
                        name: "Boolean Algebra & Properties",
                        questions: [
                            {
                                id: "Q1.07",
                                text: "Define Boolean Algebra.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.08",
                                text: "Define Boolean Algebra prove the following identities: (i) a+a=a (ii) aÂ·a=a (iii) (a')' = a",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.09",
                                text: "State and prove De-Morgan's law in a Boolean algebra (B,+,Â·,').",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.10",
                                text: "Prove that for every elements a and b of a Boolean algebra: (i) (a+b)' = a'Â·b' (ii) (aÂ·b)' = a'+b'",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.3": {
                        name: "Normal Forms (DNF & CNF)",
                        questions: [
                            {
                                id: "Q1.11",
                                text: "Explain normal forms of Boolean functions change the following Boolean function to disjunctive normal form: f(x,y,z) = (x'+y') + x'yz",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q1.12",
                                text: "What are disjunctive and conjunctive normal forms convert the function x+yz' into disjunctive and conjuctive normal forms of variables x, y, z.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q1.13",
                                text: "Change the following boolean fiction to disjunctive normal form and conjuctive normal form: f(x,y,z)=(x+y+z)(xy+x'z)",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.14",
                                text: "Change the following bookcan function to conjunctive nomal form: f(x,y,z,t)=(x'y+xyz' +x'y'z+x'y'z't+)",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.15",
                                text: "Obtain the conjunctive normal form of the following function: f(x,y,z) = xy' + xz + x'y'z'",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.16",
                                text: "Define Conjunetive Normal Form (CNF) in the Boolean algebra (B, +, Â·, /) and express the Boolean function f(x,y,z)=(xÂ·y' + xz) in its conjunctive normal form.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "1.4": {
                        name: "Tautology & Logical Equivalence",
                        questions: [
                            {
                                id: "Q1.17",
                                text: "Define Tautology and Contradiction with example.",
                                frequency: 1,
                                marks: 4,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q1.18",
                                text: "Prove that: (p â†’ q)âˆ§(q â†’ r) â‡’ (p â†’ r) is a tautology.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.19",
                                text: "Prove that (pâˆ§q)âˆ¨(qâˆ§r) â‡’ (pâˆ¨r) is a tautology.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.20",
                                text: "Establish the equivalence relation pâ‡’(qâˆ¨r)=(pâ‡’q)âˆ¨(pâ‡’r)",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q1.21",
                                text: "Construct converse, inverse and contrapositive of the direct statement: 'If 4x-2=10 then y=3.'",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(AM)"],
                                priority: "medium"
                            }
                        ]
                    },
                    "1.5": {
                        name: "Switching Circuits & Logic Applications",
                        questions: [
                            {
                                id: "Q1.22",
                                text: "Explain the application of Boolean algebra in switching circuits and logic circuits with examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q1.23",
                                text: "Draw the switching circuit of the function F(x,y,z)=xy'(z+x)+y(y'+z) and replace it by simplified one.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q1.24",
                                text: "Draw the switching circuit of the following function f(x,y,z)=xÂ·y+[zÂ·(x' + y')] and replace them by simpler ones, also draw the simpler circuit.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit2: {
                name: "Set Theory, Relations, Functions",
                subtopics: {
                    "2.1": {
                        name: "Set Theory & Operations",
                        questions: [
                            {
                                id: "Q2.01",
                                text: "Explain countable and uncountable sets.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q2.02",
                                text: "If A and B have n elements in common, how many elements do AÃ—B and BÃ—A have in common.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.03",
                                text: "Let A={1,2,4}, B={2,5,7} and C={1,3,7}, then show that AÃ—(Bâˆ©C)=(AÃ—B)âˆ©(AÃ—C)",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.04",
                                text: "If A, B, C are any three non empty sets then prove that: AÃ—(Bâˆ©C)=(AÃ—B)âˆ©(AÃ—C)",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.05",
                                text: "If U is a Universal set and A and B are its two subsets, then prove the following De-Morgan's Law: (i) (AâˆªB)' = A'âˆ©B' (ii) (Aâˆ©B)' = A'âˆªB'",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.2": {
                        name: "Relations & Types",
                        questions: [
                            {
                                id: "Q2.06",
                                text: "Define Equivalence Relation.",
                                frequency: 2,
                                marks: 4,
                                years: ["2023(ND)", "2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.07",
                                text: "Explain the following with examples: (i) Equivalence Relation (ii) Partial Order Relation",
                                frequency: 1,
                                marks: 4,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q2.08",
                                text: "What is an equivalence relation. Explain with examples prove that for two equivalence relations in set their intersection is also an equivalence relation.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q2.09",
                                text: "If I is the set of integers and the relation 'xRy = xâˆ’y is an even integer'. then prove that R is an equivalence relation, where x,yâˆˆI.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.10",
                                text: "Prove that the relation R in the set of natural numbers N, where the meaning of aâ„›b is aÂ²âˆ’4ab+3bÂ²=0(a,b)âˆˆN is reflexive but neither symmetric nor transitive.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.11",
                                text: "If R and S be equivalence relations is the set X, then prove Râˆ©S is an equivalence relation in X.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.3": {
                        name: "Partial Order & Lattices",
                        questions: [
                            {
                                id: "Q2.12",
                                text: "Define partial order relation. Prove that the relation 'a divides b', if there exists an integer c such that ac=b and is denoted by a/b, on the set of all positive integers IN is a partial order relation.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.13",
                                text: "Show that the inclusion relation 'âŠ†' is a partial ordering on the power set P(s) and draw the Hasse diagram for the partial ordering {(A,B)| AâŠ‚B}.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.14",
                                text: "Explain: (i) Partial Order Relation (ii) Hasse Diagram",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.15",
                                text: "Define Lattice. Let L be the set of all factors of 12 and let '|' be the divisibility relation on L. Show that (L,|) is a lattice.",
                                frequency: 2,
                                marks: 8,
                                years: ["2022", "2023"],
                                priority: "high"
                            }
                        ]
                    },
                    "2.4": {
                        name: "Functions & Types",
                        questions: [
                            {
                                id: "Q2.16",
                                text: "Explain floor and ceiling functions with examples.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "medium"
                            },
                            {
                                id: "Q2.17",
                                text: "Define Injective, Surjective and Bijective function. If Q is the set of all rational numbers and f:Qâ†’Q is defined by f(x)=3x+2, xâˆˆQ, then prove that f is bijective function. Also find fâ»Â¹.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q2.18",
                                text: "What is composition of function. Explain If f:Râ†’R is defined as f(x)=xÂ²âˆ’2xâˆ’3 and the function g:Râ†’R is defined as g(x)=3xâˆ’4, find (gâˆ˜f)(x) and (fâˆ˜g)(x).",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q2.19",
                                text: "Show that the function f:Râ†’R defined by f(x)=5xÂ³âˆ’1 is one-one onto. Where R is the set of real numbers.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.20",
                                text: "If f:Xâ†’Y be a one-one and onto mapping then prove that fâˆ˜fâ»Â¹=Iáµ§ and fâ»Â¹âˆ˜f=Iâ‚“ where Iâ‚“ and Iáµ§ are identity mappings of X and Y respectively.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.21",
                                text: "Show that the composite of mappings obeys associative law.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q2.22",
                                text: "If f:Xâ†’Y and g:Yâ†’Z be one-one onto mapping, then prove that the mapping gâˆ˜f:Xâ†’Z is also one-one onto and (gâˆ˜f)â»Â¹=fâ»Â¹âˆ˜gâ»Â¹",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit3: {
                name: "Algebraic Structures",
                subtopics: {
                    "3.1": {
                        name: "Groups & Properties",
                        questions: [
                            {
                                id: "Q3.01",
                                text: "Define group code.",
                                frequency: 2,
                                marks: 4,
                                years: ["2022", "2023"],
                                priority: "high"
                            },
                            {
                                id: "Q3.02",
                                text: "Define Algebraic Structure.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.03",
                                text: "Define the following with example: (i) Abelian group and (ii) Subgroup",
                                frequency: 1,
                                marks: 4,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q3.04",
                                text: "Prove that every cyclic grup is an abelian group.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.05",
                                text: "Show that the set of cube roots of unity is an abelian group with respect to multiplication.",
                                frequency: 2,
                                marks: 8,
                                years: ["2023", "2025"],
                                priority: "high"
                            },
                            {
                                id: "Q3.06",
                                text: "Let Qâ‚Š be the set of all positive rational numbers and * is a binary operation on Qâ‚Š defined as a*b=ab/2, âˆ€a,bâˆˆQâ‚Š, show that (Qâ‚Š,*) is a group.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.07",
                                text: "Show that the set of all integers I forms a group with respect to binary operation '*' defined by the rule a*b=a+b+1 âˆ€a,bâˆˆI",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.08",
                                text: "Show that the set of all (mÃ—n) matrices having their elements as real numbers is an infinite abelian group with matrix addition as composition.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.09",
                                text: "Show that (5,2) encoding function e:BÂ²â†’Bâµ defined by e(00)=00000, e(01)=01110, e(10)=10101, e(11)=11011 is a group code.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.2": {
                        name: "Subgroups & Lagrange's Theorem",
                        questions: [
                            {
                                id: "Q3.10",
                                text: "State Lagrange's theorem.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.11",
                                text: "State and prove Lagrange's theorem.",
                                frequency: 2,
                                marks: 8,
                                years: ["2022", "2021(AM)", "2025"],
                                priority: "high"
                            },
                            {
                                id: "Q3.12",
                                text: "Prove that interection of two subgroups of group G, is a subgroup of G.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.13",
                                text: "Prove that the order of each subgroup of a finite group is a divisor of the order of the group.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.3": {
                        name: "Homomorphism & Isomorphism",
                        questions: [
                            {
                                id: "Q3.14",
                                text: "What is homomorphism and isomorphism of groups. Explain with exanmples. Show that the group {Zâ‚„,+} is a homomorphic image of the group {Z,+}.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q3.15",
                                text: "Define Isomorphism of groups. If G be the multiplicative group of three cube roots of unity, G=({1,Ï‰,Ï‰Â²},Â·) where Ï‰Â³=1 and G' be the additive group of integers module 3 G'=({0,1,2},+â‚ƒ) then show that G and G' is isomorphic.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.16",
                                text: "Define isomorphism. Let R be the additive group of all real numbers and Râ‚Š be the multiplicative group of positive real numbers, then show that the following is isomorphism f:Râ†’Râ‚Š defined by f(x)=eË£ âˆ€xâˆˆR.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "3.4": {
                        name: "Rings, Integral Domains & Fields",
                        questions: [
                            {
                                id: "Q3.17",
                                text: "Define the following with example: (i) Rings (ii) Integral Domain",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.18",
                                text: "Show that S={a+bâˆš2: a,bâˆˆZ} for the operations +, Ã— is an integral domain but not a field.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q3.19",
                                text: "Prove that every field is an integral domain.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.20",
                                text: "Prove that every finite integral domain is a field.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q3.21",
                                text: "What is a field. For the set Iâ‚„={0,1,2,3}. Show that the modulo 4 system is a field.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit4: {
                name: "Graph Theory",
                subtopics: {
                    "4.1": {
                        name: "Graph Basics & Terminology",
                        questions: [
                            {
                                id: "Q4.01",
                                text: "Explain Walk, Path and Circuit is a graph with examples.",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.02",
                                text: "Define the following terms: (i) Directed Graph (ii) Undirected Graph",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.03",
                                text: "Define Handshaking theorem for graphs.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q4.04",
                                text: "What is a simple graph. Show that the maximum number of edges in a simple graph with n vertices is n(nâˆ’1)/2",
                                frequency: 3,
                                marks: 8,
                                years: ["2022", "2021(AM)", "2025"],
                                priority: "high"
                            },
                            {
                                id: "Q4.05",
                                text: "Explain different operations on graph by taking suitable examples.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q4.06",
                                text: "Let G be a simple graph with n vertices. If G has k components, then the maximum number of edges that G can have are (nâˆ’k)(nâˆ’k+1)/2",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.07",
                                text: "Prove that the sum of the degrees of odd vertices in a graph is always an even number.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.2": {
                        name: "Matrix Representation",
                        questions: [
                            {
                                id: "Q4.08",
                                text: "Explain the following with example: (i) Incidence Matrix and (ii) Adjacency Matrix",
                                frequency: 1,
                                marks: 4,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q4.09",
                                text: "Define and find the incidence and adjacency matrix of the following diagraph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.10",
                                text: "Define incidence matrix and find the incidence matrix of the given graph.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.11",
                                text: "Draw the undirccted graph G corresponding to the following adjacency matrix.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.3": {
                        name: "Shortest Path Algorithms",
                        questions: [
                            {
                                id: "Q4.12",
                                text: "Solve the travelling salesman problem for the given weighted graph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q4.13",
                                text: "Find the shortest path between a and z for the given graph, where the numbers associated with the edge are the distances between vertices.",
                                frequency: 2,
                                marks: 8,
                                years: ["2021(AM)", "2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.14",
                                text: "Apply Dijkstra's algorithm to the graph given below and find the shortest path from point a to f.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q4.15",
                                text: "Using Dijkstra's algorithm, find the shortest path between A and F for the given graph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.4": {
                        name: "Eulerian & Hamiltonian Graphs",
                        questions: [
                            {
                                id: "Q4.16",
                                text: "Define Hamiltonian path, Hamiltonian circuit and Hamiltonian graph.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.17",
                                text: "Explain the following: (i) Eulerian and Hamltonian graph (ii) Binary tree and spaning tree",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            }
                        ]
                    },
                    "4.5": {
                        name: "Trees & Spanning Trees",
                        questions: [
                            {
                                id: "Q4.18",
                                text: "Prove that if G is a tree with n vertices then it has exactly (nâˆ’1) edges.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q4.19",
                                text: "Explain Kruskal's algorithm to find the minimum spaning tree for the given graph.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q4.20",
                                text: "Find the minimal spanning tree of the weighted graph using prim's algorithm.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    }
                },
            },
            unit5: {
                name: "Combinatorics & Recurrence Relations",
                subtopics: {
                    "5.1": {
                        name: "Permutations & Combinations",
                        questions: [
                            {
                                id: "Q5.01",
                                text: "If â¿Pâ‚„ = 72, find the value of n.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q5.02",
                                text: "Find n, if 2Â·â¿Pâ‚„ + 50 = â¿âºÂ¹Pâ‚„",
                                frequency: 1,
                                marks: 4,
                                years: ["2025"],
                                priority: "high"
                            },
                            {
                                id: "Q5.03",
                                text: "If â¿Pâ‚‚ = 12 Ã— â¿Pâ‚ then find the value of n.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.2": {
                        name: "Pigeonhole Principle",
                        questions: [
                            {
                                id: "Q5.04",
                                text: "Define pigeonhole and generalized pigeonhole principle.",
                                frequency: 1,
                                marks: 4,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.05",
                                text: "State generalized pigeonhole principle. Show that if seven colours are used to paint 50 cars, atleast eight cars will have the same colour.",
                                frequency: 1,
                                marks: 4,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.06",
                                text: "Define Pigeonhole principle. How many peoples must you have guarantee that at least 9 of them will have birthday in the same day of the week.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.3": {
                        name: "Principle of Inclusion-Exclusion",
                        questions: [
                            {
                                id: "Q5.07",
                                text: "Find the number of integers between 1 and 250 that are divisible by any of the integers 2,3,5 and 7.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.08",
                                text: "Find how many integers between 1 and 60 that are not divisible by 2 nor by 3 and nor by 5.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.4": {
                        name: "Mathematical Induction",
                        questions: [
                            {
                                id: "Q5.09",
                                text: "Use mathematical induction to show that 1Â² > 2â¿â»Â¹ for nâ‰¥1.",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.10",
                                text: "By mathematical induction prove that (1+x)â¿ â‰¥ 1+nx.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q5.11",
                                text: "Show that 2â¿ > nÂ² for all nâ‰¥10 by mathematical induction.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.12",
                                text: "Show that: 1/(1Â·2) + 1/(2Â·3) + 1/(3Â·4) + ... + 1/(n(n+1)) = n/(n+1) by mathematical induction method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.13",
                                text: "Use method of induction to prove that: 1Â² + 2Â² + 3Â² + ... + nÂ² = n(n+1)(2n+1)/6",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.5": {
                        name: "Generating Functions",
                        questions: [
                            {
                                id: "Q5.14",
                                text: "Determine the generating function for the following sequence: aáµ£ = 2Ê³ if r is even, aáµ£ = âˆ’2Ê³ if r is odd",
                                frequency: 1,
                                marks: 4,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.15",
                                text: "Find the generating function for aáµ£ = 3Ê³, râ‰¥0",
                                frequency: 1,
                                marks: 8,
                                years: ["2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.16",
                                text: "Find the gencrating function of aáµ£ = 3, râ‰¥0.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(ND)"],
                                priority: "high"
                            }
                        ]
                    },
                    "5.6": {
                        name: "Recurrence Relations",
                        questions: [
                            {
                                id: "Q5.17",
                                text: "Solve the difference equation aáµ£ âˆ’ 4aáµ£â‚‹â‚ + 4aáµ£â‚‹â‚‚ = (r+1)2Ê³",
                                frequency: 1,
                                marks: 8,
                                years: ["2022"],
                                priority: "high"
                            },
                            {
                                id: "Q5.18",
                                text: "Solve the fibonacci sequcnce recurrence relation.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q5.19",
                                text: "Use generating function to solve aáµ£ = 9aáµ£â‚‹â‚ + 20, aâ‚€ = 0, aâ‚ = âˆ’3, aâ‚‚ = âˆ’10.",
                                frequency: 1,
                                marks: 8,
                                years: ["2023"],
                                priority: "high"
                            },
                            {
                                id: "Q5.20",
                                text: "Solve the recurrence relation aáµ£ âˆ’ 5aáµ£â‚‹â‚ + 6aáµ£â‚‹â‚‚ = 2, râ‰¥2 with the boundary conditions aâ‚€ = 2 and aâ‚ = 2.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.21",
                                text: "Solve the recurrence relation aáµ£â‚Šâ‚‚ âˆ’ 4aáµ£â‚Šâ‚ + 4aáµ£ = 2Ê³/(r+1) by characteristics root method.",
                                frequency: 1,
                                marks: 8,
                                years: ["2021(AM)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.22",
                                text: "Solve the recurrence relation aáµ£ âˆ’ 5aáµ£â‚‹â‚ + 6aáµ£â‚‹â‚‚ = 0 given that aâ‚€ = 0 and aâ‚ = 1.",
                                frequency: 2,
                                marks: 8,
                                years: ["2021(ND)", "2023(ND)"],
                                priority: "high"
                            },
                            {
                                id: "Q5.23",
                                text: "Solve the recurrence relation aáµ£â‚Šâ‚‚ âˆ’ 5aáµ£â‚Šâ‚ + 6aáµ£ = 2Ê³, with aáµ£ = 1 and aâ‚ = âˆ’1.",
                                frequency: 1,
                                marks: 8,
                                years: ["2025"],
                                priority: "high"
                            }
                        ]
                    }
                },
            }
        };
